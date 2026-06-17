import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import { getLeasesAsRenter, getLeasesAsOwner } from "@/services/leaseService";
import { useToast }    from "@/context/ToastContext";
import type { Lease }  from "@/types";

const STATUS_STYLES: Record<string, string> = {
  UPCOMING:    "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-green-100 text-green-700",
  COMPLETED:   "bg-gray-100 text-gray-500",
  CANCELLED:   "bg-red-100 text-red-600",
  OVERDUE:     "bg-orange-100 text-orange-700",
};

export default function LeasesPage() {
  const toast = useToast();
  const navigate = useNavigate();

  const [renterLeases, setRenterLeases] = useState<Lease[]>([]);
  const [ownerLeases,  setOwnerLeases]  = useState<Lease[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [tab,          setTab]          = useState<"renter" | "owner">("renter");

  useEffect(() => {
    Promise.allSettled([getLeasesAsRenter(), getLeasesAsOwner()])
      .then(([r, o]) => {
        if (r.status === "fulfilled") setRenterLeases(r.value.data.data ?? []);
        if (o.status === "fulfilled") setOwnerLeases(o.value.data.data  ?? []);
        if (r.status === "rejected" && o.status === "rejected") {
          toast.error("Failed to load leases.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const fmt = (iso: string) => iso?.slice(0, 10) ?? "—";

  const LeaseCard = ({ lease }: { lease: Lease }) => (
    <div
      onClick={() => navigate(`/leases/${lease.lease_id}`)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3 hover:shadow-md hover:border-gray-300 transition cursor-pointer"
    >

      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">
            Lease #{lease.lease_id.slice(0, 8)}…
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">Property ID: {lease.property_id}</p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[lease.status] ?? "bg-gray-100 text-gray-500"}`}>
          {lease.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>🔄 Type: <span>{lease.renting_type}</span></p>
        <p>📅 Check-in: <span>{fmt(lease.check_in_date)}</span></p>
        <p>📅 Check-out: <span>{fmt(lease.check_out_date)}</span></p>
        {lease.next_billing_date && (
          <p>🗓️ Next billing: <span>{fmt(lease.next_billing_date)}</span></p>
        )}
      </div>

    </div>
  );

  const current = tab === "renter" ? renterLeases : ownerLeases;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Leases</h1>
          <p className="text-gray-500 text-sm mb-6">View active and past lease agreements.</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(["renter", "owner"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize
                  ${tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}
              >
                As {t}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "renter" ? renterLeases : ownerLeases).length}
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

          {/* Empty */}
          {!loading && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📋</p>
              <p className="font-semibold">No leases as {tab} yet.</p>
            </div>
          )}

          {/* Cards */}
          <div className="space-y-4">
            {current.map((l) => <LeaseCard key={l.lease_id} lease={l} />)}
          </div>

        </div>
      </div>
    </>
  );
}