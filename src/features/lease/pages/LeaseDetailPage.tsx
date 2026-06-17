import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import { getLeaseById } from "@/services/leaseService";
import type { Lease } from "@/types";

const STATUS_STYLES: Record<string, string> = {
  UPCOMING:    "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-green-100 text-green-700",
  COMPLETED:   "bg-gray-100 text-gray-500",
  CANCELLED:   "bg-red-100 text-red-600",
  OVERDUE:     "bg-orange-100 text-orange-700",
};

export default function LeaseDetailPage() {
  const { leaseId } = useParams<{ leaseId: string }>();
  const [lease, setLease] = useState<Lease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!leaseId) return;
    setLoading(true);
    getLeaseById(leaseId)
      .then((res) => setLease(res.data.data))
      .catch((err) => {
        setError(err.response?.data?.msg ?? "Failed to load lease.");
      })
      .finally(() => setLoading(false));
  }, [leaseId]);

  const fmt = (iso: string) => iso?.slice(0, 10) ?? "—";

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (error || !lease) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
          <p className="text-red-600 font-semibold">{error ?? "Lease not found."}</p>
          <Link to="/leases" className="text-sm text-dark-knight font-bold underline">Back to Leases</Link>
        </div>
      </>
    );
  }

  const imgs: string[] = lease.images
    ? (typeof lease.images === "string" ? JSON.parse(lease.images) : lease.images)
    : [];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/leases" className="text-sm text-dark-knight font-bold hover:underline mb-4 inline-block">
            &larr; Back to Leases
          </Link>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {lease.property_name ?? `Property #${lease.property_id}`}
                  </h1>
                  {lease.location && (
                    <p className="text-sm text-gray-500 mt-1">{lease.location}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">Lease ID: {lease.lease_id}</p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_STYLES[lease.status] ?? "bg-gray-100 text-gray-500"}`}
                >
                  {lease.status}
                </span>
              </div>
            </div>

            {/* Property Image */}
            {imgs.length > 0 && (
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={imgs[0]}
                  alt={lease.property_name ?? "Property"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Details */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <p className="text-gray-500">Renting Type</p>
                  <p className="font-semibold text-gray-900">{lease.renting_type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Property ID</p>
                  <p className="font-semibold text-gray-900">#{lease.property_id}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check-in Date</p>
                  <p className="font-semibold text-gray-900">{fmt(lease.check_in_date)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check-out Date</p>
                  <p className="font-semibold text-gray-900">{fmt(lease.check_out_date)}</p>
                </div>
                {lease.price_value && (
                  <div>
                    <p className="text-gray-500">Monthly Rent</p>
                    <p className="font-semibold text-gray-900">EGP {Number(lease.price_value).toLocaleString()}</p>
                  </div>
                )}
                {lease.next_billing_date && (
                  <div>
                    <p className="text-gray-500">Next Billing Date</p>
                    <p className="font-semibold text-gray-900">{fmt(lease.next_billing_date)}</p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <Link
                  to={`/rent/property/${lease.property_id}`}
                  className="px-5 py-2.5 bg-dark-knight text-white text-sm font-bold rounded-xl hover:opacity-90 transition"
                >
                  View Property
                </Link>
                <Link
                  to="/leases"
                  className="px-5 py-2.5 border border-gray-300 text-sm font-semibold rounded-xl hover:bg-gray-50 transition"
                >
                  All Leases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
