import { useEffect, useState } from "react";
import { useNavigate }         from "react-router-dom";
import axios                   from "axios";

import NavBar from "@/features/properties/components/NavBar";
import { findRememberedChatContext } from "@/services/chatService";
import {
  getRentRequests,
  acceptRentRequest,
  rejectRentRequest,
  cancelRentRequest,
} from "@/services/rentRequestService";
import { useToast }       from "@/context/ToastContext";
import type { RentRequest } from "@/types";

const STATE_STYLES: Record<string, string> = {
  PENDING:   "bg-yellow-100 text-yellow-700",
  ACCEPTED:  "bg-blue-100 text-blue-700",
  PAYMENT_PENDING: "bg-blue-100 text-blue-700",
  REJECTED:  "bg-red-100 text-red-600",
  CANCELLED: "bg-gray-100 text-gray-500",
  PAID:      "bg-green-100 text-green-700",
  REFUNDED:  "bg-slate-100 text-slate-600",
};

export default function RentRequestsListPage() {
  const navigate = useNavigate();
  const toast    = useToast();

  const [sent,     setSent]     = useState<RentRequest[]>([]);
  const [received, setReceived] = useState<RentRequest[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [tab,      setTab]      = useState<"sent" | "received">("sent");
  const [actionId, setActionId] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);
    getRentRequests()
      .then((res) => {
        setSent(res.data.data.sent     ?? []);
        setReceived(res.data.data.received ?? []);
      })
      .catch((err) => {
        setError(
          axios.isAxiosError(err)
            ? (err.response?.data?.msg ?? "Failed to load requests.")
            : "Failed to load requests.",
        );
        toast.error("Failed to load requests.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const doAction = async (
    id: string,
    action: "accept" | "reject" | "cancel",
    label: string
  ) => {
    if (!window.confirm(`${label}?`)) return;
    try {
      setActionId(id);
      if (action === "accept") await acceptRentRequest(id);
      if (action === "reject") await rejectRentRequest(id);
      if (action === "cancel") await cancelRentRequest(id);
      toast.success(`Request ${action}ed.`);
      load();
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Action failed.") : "Action failed.");
    } finally {
      setActionId(null);
    }
  };

  const current = tab === "sent" ? sent : received;

  const openChat = (req: RentRequest) => {
    const isSentTab = tab === "sent";
    const partnerId = isSentTab ? req.owner_id : req.renter_id;
    if (!partnerId) return;

    const partnerName = isSentTab
      ? "Property Owner"
      : `Renter ${req.renter_id.slice(0, 6)}`;
    const existingChat = findRememberedChatContext(req.property_id, partnerId);
    const chatState = {
      partnerName,
      partnerId,
      propertyId: req.property_id,
      propertyName: req.property_name ?? `Property #${req.property_id}`,
      propertyImg: null,
    };

    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
      return;
    }

    navigate("/chat/start", {
      state: {
        receiverId: partnerId,
        ...chatState,
      },
    });
  };

  const Card = ({ req }: { req: RentRequest }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3 hover:shadow-md transition">

      {/* Top row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">
            {req.property_name ?? `Property #${req.property_id}`}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            ID: {req.request_id.slice(0, 8)}…
          </p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATE_STYLES[req.request_state] ?? "bg-gray-100 text-gray-500"}`}>
          {req.request_state}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>📅 Check-in: <span className="font-semibold text-gray-800">{req.check_in_date}</span></p>
        <p>📅 Check-out: <span className="font-semibold text-gray-800">{req.check_out_date}</span></p>
        <p>🔄 Type: <span className="font-semibold text-gray-800">{req.renting_type}</span></p>
        <p>💰 Total: <span className="font-semibold text-gray-800">EGP {Number(req.total_price).toLocaleString()}</span></p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap pt-1">
        <button
          onClick={() => navigate(`/rent/property/${req.property_id}`)}
          className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
        >
          View Property
        </button>

        {/* Owner actions */}
        {tab === "received" && req.request_state === "PENDING" && (
          <>
            <button
              onClick={() => doAction(req.request_id, "accept", "Accept this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-green-600 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              Accept
            </button>
            <button
              onClick={() => doAction(req.request_id, "reject", "Reject this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-red-500 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              Reject
            </button>
          </>
        )}

        {tab === "received" && (
          <button
            onClick={() => openChat(req)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Renter
          </button>
        )}

        {/* Renter: cancel */}
        {tab === "sent" && ["PENDING", "ACCEPTED"].includes(req.request_state) && (
          <button
            onClick={() => doAction(req.request_id, "cancel", "Cancel this request")}
            disabled={actionId === req.request_id}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition disabled:opacity-50"
          >
            Cancel Request
          </button>
        )}

        {/* Renter: pay */}
        {tab === "sent" && ["ACCEPTED", "PAYMENT_PENDING"].includes(req.request_state) && (
          <button
            onClick={() => navigate(`/payment/${req.request_id}`)}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition"
          >
            Pay Now →
          </button>
        )}

        {tab === "sent" && req.request_state === "PAID" && (
          <button
            onClick={() => navigate(`/payment/success?request_id=${req.request_id}`)}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition cursor-pointer"
          >
            View Confirmation
          </button>
        )}

        {tab === "sent" && (
          <button
            onClick={() => openChat(req)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Owner
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

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Rent Requests</h1>
          <p className="text-gray-500 text-sm mb-6">Manage incoming and outgoing rent requests.</p>

          {/* Tabs */}
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

          {/* Loading */}
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

          {/* Empty */}
          {!loading && !error && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📭</p>
              <p className="font-semibold">No {tab} requests yet.</p>
            </div>
          )}

          {/* Cards */}
          <div className="space-y-4">
            {current.map((req) => <Card key={req.request_id} req={req} />)}
          </div>

        </div>
      </div>
    </>
  );
}
