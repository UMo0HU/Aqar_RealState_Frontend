import { useEffect, useState } from "react";
import { Link, useNavigate }   from "react-router-dom";
import axios                   from "axios";

import NavBar                        from "@/features/properties/components/NavBar";
import {
  getMyProperties,
  deleteProperty,
  getPropertyById,
} from "@/services/propertyService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";
import { mapProperty }               from "@/utils/mapProperty";
import { useToast }                  from "@/context/ToastContext";
import type { Property }             from "@/types";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

export default function MyPropertiesPage() {
  const navigate = useNavigate();
  const toast    = useToast();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getMyProperties();
        const baseProperties = (res.data as unknown[]).map(mapProperty);
        const saleIds = baseProperties
          .filter((property) => property.property_type === "for_sale")
          .map((property) => property.propertyId);

        const detailedSales = await Promise.allSettled(
          saleIds.map((propertyId) => getPropertyById(String(propertyId))),
        );

        const detailedMap = new Map<number, Property>();
        detailedSales.forEach((result) => {
          if (result.status !== "fulfilled") return;
          const detailedProperty = mapProperty(result.value.data);
          detailedMap.set(detailedProperty.propertyId, detailedProperty);
        });

        const merged = baseProperties.map((property) =>
          detailedMap.get(property.propertyId) ?? property,
        );

        setProperties(merged);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      setDeletingId(id);
      await deleteProperty(String(id));
      setProperties((prev) => prev.filter((p) => p.propertyId !== id));
      toast.success("Property deleted.");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Delete failed.") : "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  const StatusBadge = ({ p }: { p: Property }) => {
    if (p.property_type === "for_sale") {
      const subscription = syncStoredListingSubscriptionWithProperty(p)
        ?? getStoredListingSubscription(p.propertyId);
      const state = getSaleSubscriptionUiState(p, subscription);

      if (state === "awaiting_verification")
        return <span className="text-[11px] font-bold bg-yellow-100 text-yellow-700 px-2.5 py-0.5 rounded-full">Awaiting Review</span>;
      if (state === "paid_awaiting_verification")
        return <span className="text-[11px] font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">Paid · Pending Review</span>;
      if (state === "ready_to_pay")
        return <span className="text-[11px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full">Verified · Unpaid</span>;
      if (state === "payment_pending")
        return <span className="text-[11px] font-bold bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full">Payment Processing</span>;
      if (state === "expired")
        return <span className="text-[11px] font-bold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">Subscription Expired</span>;
      if (state === "active")
        return <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">Listing Active ✓</span>;
      return <span className="text-[11px] font-bold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">Subscription Missing</span>;
    }

    if (!p.isVerified)
      return <span className="text-[11px] font-bold bg-yellow-100 text-yellow-700 px-2.5 py-0.5 rounded-full">Pending Review</span>;
    if (!p.isAvailable)
      return <span className="text-[11px] font-bold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">Unavailable</span>;
    return <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">Active ✓</span>;
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
              <p className="text-gray-500 mt-1 text-sm">Manage all the properties you've listed on AQAR.</p>
            </div>
            <Link
              to="/property/add-property"
              className="bg-dark-knight text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition"
            >
              + Add New
            </Link>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty state */}
          {!loading && properties.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-6xl">🏠</p>
              <p className="text-xl font-bold text-gray-700">No properties listed yet.</p>
              <p className="text-gray-400 text-sm">Start earning by listing your first property.</p>
              <Link
                to="/property/add-property"
                className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
              >
                List Your First Property
              </Link>
            </div>
          )}

          {/* Property rows */}
          <div className="space-y-4">
            {properties.map((p) => (
              <div
                key={p.propertyId}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex gap-4 p-4"
              >
                {/* Thumbnail */}
                <img
                  src={p.images[0] ?? "https://placehold.co/160x120?text=No+Image"}
                  alt={p.propertyName}
                  className="w-36 h-24 object-cover rounded-xl shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h2 className="text-base font-bold text-gray-900 truncate">{p.propertyName}</h2>
                    <StatusBadge p={p} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">📍 {p.location}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {p.bedroomsNumber} bed · {p.bathroomsNumber} bath · {p.size} m²
                  </p>
                  <p className="font-bold text-gray-900 mt-1.5 text-sm">
                    EGP {p.priceValue.toLocaleString()}
                    {p.property_type === "for_rent" && (
                      <span className="text-gray-400 font-normal">
                        {" "}/ {p.pricingUnit === "MONTH" ? "month" : "day"}
                      </span>
                    )}
                  </p>
                  {p.property_type === "for_sale" && (
                    <p className="mt-1 text-xs text-gray-400">
                      {hasExpiredSaleListing(p)
                        ? "Subscription expired"
                        : p.listingExpiry
                          ? `Listing expiry: ${new Date(p.listingExpiry).toLocaleDateString("en-GB")}`
                          : "Waiting for subscription activation"}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 shrink-0 justify-center">
                  <Link
                    to={p.property_type === "for_sale"
                      ? `/buy/property/${p.propertyId}`
                      : `/rent/property/${p.propertyId}`}
                    className="text-xs px-3.5 py-1.5 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => navigate(`/property/${p.propertyId}/edit`)}
                    className="text-xs px-3.5 py-1.5 bg-amber-300 text-dark-knight rounded-lg font-bold hover:bg-amber-400 transition"
                  >
                    Edit
                  </button>
                  {p.property_type === "for_sale" && (
                    <button
                      onClick={() => navigate(`/property/${p.propertyId}/subscription`)}
                      className="text-xs px-3.5 py-1.5 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Selling Plan
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(p.propertyId, p.propertyName)}
                    disabled={deletingId === p.propertyId}
                    className="text-xs px-3.5 py-1.5 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition disabled:opacity-50"
                  >
                    {deletingId === p.propertyId ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
