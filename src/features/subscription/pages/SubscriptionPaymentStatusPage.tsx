import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import {
  clearPendingSubscriptionPayment,
  loadPendingSubscriptionPayment,
} from "@/services/paymentService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
  updateStoredListingSubscriptionState,
} from "@/services/listingSubscriptionService";
import { getPropertyById } from "@/services/propertyService";
import type { Property } from "@/types";
import { mapProperty } from "@/utils/mapProperty";
import { getSaleSubscriptionUiState } from "@/utils/saleSubscriptionState";

type VerificationState =
  | "missing"
  | "checking"
  | "processing"
  | "success"
  | "not_paid"
  | "error";

const MAX_CHECKS = 6;
const CHECK_DELAY_MS = 2500;

export default function SubscriptionPaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [status, setStatus] = useState<VerificationState>("checking");
  const [reloadKey, setReloadKey] = useState(0);

  const pendingPayment = useMemo(() => loadPendingSubscriptionPayment(), []);

  const propertyId = useMemo(() => {
    const queryId = searchParams.get("property_id");
    return queryId ? Number(queryId) : (pendingPayment?.propertyId ?? null);
  }, [pendingPayment, searchParams]);

  const subscriptionId = useMemo(() => {
    const queryId = searchParams.get("subscription_id");
    return queryId ?? pendingPayment?.subscriptionId ?? null;
  }, [pendingPayment, searchParams]);

  useEffect(() => {
    if (!propertyId || !subscriptionId) {
      setStatus("missing");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    const verifyPayment = async () => {
      attempts += 1;

      try {
        const res = await getPropertyById(String(propertyId));
        if (cancelled) return;

        const nextProperty = mapProperty(res.data);
        setProperty(nextProperty);

        const synced = syncStoredListingSubscriptionWithProperty(nextProperty)
          ?? getStoredListingSubscription(nextProperty.propertyId);
        const uiState = getSaleSubscriptionUiState(nextProperty, synced);

        if (uiState === "active" || uiState === "paid_awaiting_verification") {
          updateStoredListingSubscriptionState(nextProperty.propertyId, "PAID");
          clearPendingSubscriptionPayment();
          setStatus("success");
          return;
        }

        if (uiState === "payment_pending" || (uiState === "ready_to_pay" && attempts < MAX_CHECKS)) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        updateStoredListingSubscriptionState(nextProperty.propertyId, "UNPAID");
        clearPendingSubscriptionPayment();
        setStatus(attempts < MAX_CHECKS ? "checking" : "not_paid");
      } catch {
        if (cancelled) return;

        if (attempts < MAX_CHECKS) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        setStatus("error");
      }
    };

    setStatus("checking");
    verifyPayment();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [propertyId, reloadKey, subscriptionId]);

  const summary = property && (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm">
      <h2 className="border-b border-gray-100 pb-3 text-sm font-bold text-gray-700">
        Listing Summary
      </h2>
      <div className="space-y-2 pt-3 text-sm text-gray-600">
        <div className="flex justify-between gap-4">
          <span>Property</span>
          <span className="font-semibold text-gray-900">{property.propertyName}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Status</span>
          <span className="font-semibold text-gray-900">{property.listingStatus}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Verification</span>
          <span className="font-semibold text-gray-900">
            {property.isVerified ? "Verified" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        {status === "checking" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">⏳</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Verifying Listing Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We&apos;re checking whether the selling-plan payment has activated the property listing yet.
              </p>
            </div>
            {summary}
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">🎉</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Listing Payment Confirmed!</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                {property?.isVerified
                  ? "Your sale listing is now active and available to buyers."
                  : "The listing fee has been received. The property will become visible after admin verification is completed."}
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {propertyId && (
                <Link
                  to={`/property/${propertyId}/subscription`}
                  className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
                >
                  View Subscription
                </Link>
              )}
              <Link
                to="/my-properties"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to My Properties
              </Link>
            </div>
          </>
        )}

        {status === "not_paid" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">⚠️</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Not Confirmed</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We redirected back successfully, but the property listing still has not switched to an active paid state.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {propertyId && (
                <Link
                  to={`/property/${propertyId}/subscription`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Return to Subscription
                </Link>
              )}
            </div>
          </>
        )}

        {status === "missing" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-5xl">🧾</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Context Missing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We couldn&apos;t determine which sale subscription this payment belongs to.
              </p>
            </div>
            <Link
              to="/my-properties"
              className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
            >
              View My Properties
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">❌</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Couldn&apos;t Verify Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We ran into a problem while checking the sale listing status. Try again in a moment.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Retry Verification
              </button>
              <Link
                to="/my-properties"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to My Properties
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
