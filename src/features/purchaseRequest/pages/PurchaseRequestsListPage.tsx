import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "@/features/properties/components/NavBar";
import {
  purchaseRequestService,
} from "@/services/purchaseRequestService";
import { findRememberedChatContext } from "@/services/chatService";
import { useToast } from "@/context/ToastContext";
import type { PurchaseRequest } from "@/types";

const STATE_STYLES: Record<string, string> = {
  PENDING:            "bg-yellow-100 text-yellow-700",
  ACCEPTED:           "bg-blue-100 text-blue-700",
  REJECTED:           "bg-red-100 text-red-600",
  CANCELLED:          "bg-gray-100 text-gray-500",
};

export default function PurchaseRequestsListPage() {
  const navigate = useNavigate();
  const toast    = useToast();

  const [sent,     setSent]     = useState<PurchaseRequest[]>([]);
  const [received, setReceived] = useState<PurchaseRequest[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [tab,      setTab]      = useState<"sent" | "received">("sent");
  const [actionId, setActionId] = useState<number | null>(null);
  const [actionType, setActionType] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);
    Promise.all([
      purchaseRequestService.getMyRequests(),
      purchaseRequestService.getReceivedRequests(),
    ])
      .then(([myRes, receivedRes]) => {
        setSent(myRes.data ?? []);
        setReceived(receivedRes.data ?? []);
      })
      .catch((err) => {
        setError(
          axios.isAxiosError(err)
            ? (err.response?.data?.message ?? "Failed to load requests.")
            : "Failed to load requests.",
        );
        toast.error("Failed to load requests.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const doAction = async (
    id: number,
    action: "accept" | "reject" | "cancel" | "sold",
    label: string,
    extra?: { property_id?: number },
  ) => {
    if (!window.confirm(`${label}?`)) return;
    try {
      setActionId(id);
      setActionType(action);
      if (action === "accept") await purchaseRequestService.updateStatus(String(id), "ACCEPTED");
      if (action === "reject") await purchaseRequestService.updateStatus(String(id), "REJECTED");
      if (action === "cancel") await purchaseRequestService.cancelRequest(String(id));
      if (action === "sold" && extra?.property_id) {
        await purchaseRequestService.markAsSold(extra.property_id);
      }
      toast.success(`${action === "sold" ? "Property marked as sold." : `Request ${action}ed.`}`);
      load();
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.message ?? "Action failed.") : "Action failed.");
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const handleOpenChat = (partnerId: string, partnerName: string, propertyId: number, propertyName?: string) => {
    const existingChat = findRememberedChatContext(propertyId, partnerId);
    const chatState = { partnerName, partnerId, propertyId, propertyName: propertyName ?? `Property #${propertyId}` };
    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
    } else {
      navigate("/chat/start", { state: chatState });
    }
  };

  const current = tab === "sent" ? sent : received;

  const Card = ({ req }: { req: PurchaseRequest }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3 hover:shadow-md transition">

      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">
            {req.property_name ?? `Property #${req.property_id}`}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            ID: #{req.request_id}
          </p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATE_STYLES[req.status] ?? "bg-gray-100 text-gray-500"}`}>
          {req.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>📅 Sent: <span className="font-semibold text-gray-800">{new Date(req.created_at).toLocaleDateString()}</span></p>
        {req.message && (
          <p className="col-span-2 italic text-gray-400">“{req.message}”</p>
        )}
      </div>

      <div className="flex gap-2 flex-wrap pt-1">
        <button
          onClick={() => navigate(`/buy/property/${req.property_id}`)}
          className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
        >
          View Property
        </button>

        {/* Sent tab — cancel */}
        {tab === "sent" && req.status === "PENDING" && (
          <button
            onClick={() => doAction(req.request_id, "cancel", "Cancel this request")}
            disabled={actionId === req.request_id}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition disabled:opacity-50"
          >
            {actionId === req.request_id && actionType === "cancel" ? "Cancelling…" : "Cancel Request"}
          </button>
        )}

        {/* Sent tab — message seller */}
        {tab === "sent" && (req.status === "PENDING" || req.status === "ACCEPTED") && req.owner_id && (
          <button
            onClick={() => handleOpenChat(req.owner_id, [req.owner_first_name, req.owner_second_name].filter(Boolean).join(" ") || "Seller", req.property_id, req.property_name)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Seller
          </button>
        )}

        {/* Received tab — pending */}
        {tab === "received" && req.status === "PENDING" && (
          <>
            <button
              onClick={() => doAction(req.request_id, "accept", "Accept this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-green-600 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {actionId === req.request_id && actionType === "accept" ? "Accepting…" : "Accept"}
            </button>
            <button
              onClick={() => doAction(req.request_id, "reject", "Reject this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-red-500 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {actionId === req.request_id && actionType === "reject" ? "Rejecting…" : "Reject"}
            </button>
          </>
        )}

        {/* Accepted — show buyer contact */}
        {tab === "received" && req.status === "ACCEPTED" && req.buyer_email && (
          <div className="w-full rounded-xl bg-blue-50 border border-blue-200 px-3 py-2 text-xs text-blue-800">
            <p className="font-semibold">Buyer contact</p>
            <p>{req.buyer_first_name} {req.buyer_second_name} · {req.buyer_email}</p>
          </div>
        )}

        {/* Received tab — message buyer */}
        {tab === "received" && (req.status === "PENDING" || req.status === "ACCEPTED") && req.buyer_id && (
          <button
            onClick={() => handleOpenChat(req.buyer_id, [req.buyer_first_name, req.buyer_second_name].filter(Boolean).join(" ") || "Buyer", req.property_id, req.property_name)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Buyer
          </button>
        )}

        {/* Mark as Sold — on any accepted request */}
        {tab === "received" && req.status === "ACCEPTED" && (
          <button
            onClick={() => doAction(req.request_id, "sold", `Mark property #${req.property_id} as sold`, { property_id: req.property_id })}
            disabled={actionId === req.request_id}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
          >
            {actionId === req.request_id && actionType === "sold" ? "Marking…" : "Mark as Sold"}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Purchase Requests</h1>
          <p className="text-gray-500 text-sm mb-6">Manage incoming and outgoing purchase requests.</p>

          <div className="flex border-b border-gray-200 mb-6">
            {(["sent", "received"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize
                  ${tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}
              >
                {t === "sent" ? "Sent" : "Received"}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "sent" ? sent : received).length}
                </span>
              </button>
            ))}
          </div>

          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={load}
                className="rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📭</p>
              <p className="font-semibold">No {tab} purchase requests yet.</p>
            </div>
          )}

          <div className="space-y-4">
            {current.map((req) => <Card key={req.request_id} req={req} />)}
          </div>
        </div>
      </div>
    </>
  );
}
