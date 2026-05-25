import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "@/features/properties/components/NavBar";
import SellingPlanSelector from "@/features/properties/components/AddPropertyComponents/SellingPlanSelector";
import { useToast } from "@/context/ToastContext";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
  updateStoredListingSubscriptionState,
  type ListingSubscriptionRecord,
} from "@/services/listingSubscriptionService";
import {
  buildSubscriptionPaymentSuccessUrl,
  clearPendingSubscriptionPayment,
  getSubscriptionPaymentLink,
  savePendingSubscriptionPayment,
} from "@/services/paymentService";
import { getPropertyById } from "@/services/propertyService";
import type { Property } from "@/types";
import { mapProperty } from "@/utils/mapProperty";
import {
  getSaleSubscriptionUiState,
  hasExpiredSaleListing,
} from "@/utils/saleSubscriptionState";

const formatDate = (value: string | null | undefined) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

export default function PropertySubscriptionPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [property, setProperty] = useState<Property | null>(null);
  const [subscription, setSubscription] = useState<ListingSubscriptionRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);

  const loadPage = useCallback(async () => {
    if (!id) {
      setError("Missing property id.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await getPropertyById(id);
      const nextProperty = mapProperty(res.data);

      if (nextProperty.property_type !== "for_sale") {
        setError("This page is only available for sale listings.");
        setProperty(nextProperty);
        setSubscription(null);
        return;
      }

      setProperty(nextProperty);
      const synced = syncStoredListingSubscriptionWithProperty(nextProperty);
      setSubscription(synced ?? getStoredListingSubscription(nextProperty.propertyId));
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Could not load subscription details.")
          : "Could not load subscription details.",
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  const uiState = useMemo(
    () => (property ? getSaleSubscriptionUiState(property, subscription) : null),
    [property, subscription],
  );

  useEffect(() => {
    if (!uiState || !["awaiting_verification", "payment_pending"].includes(uiState)) {
      return;
    }

    const timer = window.setInterval(() => {
      loadPage();
    }, 15000);

    return () => window.clearInterval(timer);
  }, [loadPage, uiState]);

  const handlePay = async () => {
    if (!property || !subscription) return;

    try {
      setPaying(true);
      savePendingSubscriptionPayment(property.propertyId, subscription.subscriptionId);
      updateStoredListingSubscriptionState(property.propertyId, "PENDING");
      setSubscription((current) => current ? { ...current, paymentState: "PENDING" } : current);

      const res = await getSubscriptionPaymentLink(
        subscription.subscriptionId,
        buildSubscriptionPaymentSuccessUrl(property.propertyId, subscription.subscriptionId),
      );

      const paymentUrl = res.data?.url;
      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (err) {
      clearPendingSubscriptionPayment();
      updateStoredListingSubscriptionState(property.propertyId, "UNPAID");
      setSubscription((current) => current ? { ...current, paymentState: "UNPAID" } : current);

      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? err.message ?? "Failed to start subscription payment.")
          : err instanceof Error
            ? err.message
            : "Failed to start subscription payment.",
      );
      setPaying(false);
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
        </div>
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <NavBar />
        <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
          <p className="text-4xl">⚠️</p>
          <p className="text-xl font-bold text-gray-800">{error ?? "Property not found."}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => loadPage()}
              className="rounded-xl bg-dark-knight px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
            >
              Try Again
            </button>
            <Link
              to="/my-properties"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
            >
              Back to My Properties
            </Link>
          </div>
        </div>
      </>
    );
  }

  const showRenewalLimitation = uiState === "expired";
  const canPay = uiState === "ready_to_pay" && Boolean(subscription?.subscriptionId);
  const expiryLabel = hasExpiredSaleListing(property)
    ? "Expired"
    : formatDate(property.listingExpiry);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <button
            type="button"
            onClick={() => navigate("/my-properties")}
            className="text-sm font-semibold text-gray-500 transition hover:text-gray-900 cursor-pointer"
          >
            ← Back to My Properties
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">Selling Plan</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage the verification, subscription, and payment status for <strong className="text-gray-800">{property.propertyName}</strong>.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <SellingPlanSelector
                  value={subscription?.planMonths}
                  disabled
                  helperText={
                    subscription
                      ? "Selling plans are created with the property in the current backend. This screen controls when that saved plan can be paid."
                      : "Plan details are only available when this browser has a stored subscription record for the property."
                  }
                />

                {subscription && (
                  <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    <div className="flex justify-between gap-4">
                      <span>Subscription ID</span>
                      <span className="font-semibold text-gray-900">{subscription.subscriptionId.slice(0, 8)}…</span>
                    </div>
                    <div className="mt-2 flex justify-between gap-4">
                      <span>Listing fee</span>
                      <span className="font-semibold text-gray-900">EGP {subscription.amount.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 flex justify-between gap-4">
                      <span>Frontend payment state</span>
                      <span className="font-semibold text-gray-900">{subscription.paymentState}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                {uiState === "awaiting_verification" && (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                    <p className="font-bold">Waiting for admin verification</p>
                    <p className="mt-2 leading-relaxed">
                      Your selling plan is already attached to the property, but payment stays locked until the admin verifies the listing and enables it for sale.
                    </p>
                  </div>
                )}

                {uiState === "paid_awaiting_verification" && (
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
                    <p className="font-bold">Listing fee paid</p>
                    <p className="mt-2 leading-relaxed">
                      Payment was received, but the property still needs admin verification before buyers can see it publicly.
                    </p>
                  </div>
                )}

                {uiState === "ready_to_pay" && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                    <p className="font-bold">Ready for payment</p>
                    <p className="mt-2 leading-relaxed">
                      The property is verified. You can now pay the saved selling plan to activate the public sale listing.
                    </p>
                  </div>
                )}

                {uiState === "payment_pending" && (
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
                    <p className="font-bold">Payment in progress</p>
                    <p className="mt-2 leading-relaxed">
                      We’re waiting for the payment provider to confirm the listing fee. Use refresh if you already completed the card step.
                    </p>
                  </div>
                )}

                {uiState === "active" && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                    <p className="font-bold">Subscription active</p>
                    <p className="mt-2 leading-relaxed">
                      Your listing is active and visible to buyers. The current subscription expires on <strong>{expiryLabel}</strong>.
                    </p>
                  </div>
                )}

                {uiState === "expired" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                    <p className="font-bold">Subscription expired</p>
                    <p className="mt-2 leading-relaxed">
                      The listing is no longer active for buyers. The current backend does not expose a renewal API or a way to create a replacement subscription from the frontend.
                    </p>
                  </div>
                )}

                {uiState === "missing_subscription" && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                    <p className="font-bold">Subscription record unavailable</p>
                    <p className="mt-2 leading-relaxed">
                      This property is verified but we could not recover its unpaid subscription id from the available backend APIs. Payment can only continue if the subscription was previously stored in this browser.
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-3">
                  {canPay && (
                    <button
                      type="button"
                      onClick={handlePay}
                      disabled={paying}
                      className="rounded-xl bg-dark-knight px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                      {paying ? "Preparing payment…" : "Pay Listing Fee"}
                    </button>
                  )}

                  {uiState === "payment_pending" && (
                    <button
                      type="button"
                      onClick={() => loadPage()}
                      className="rounded-xl bg-dark-knight px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                    >
                      Check Payment Status
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => loadPage()}
                    className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
                  >
                    Refresh
                  </button>

                  <Link
                    to={`/buy/property/${property.propertyId}`}
                    className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                  >
                    View Property Page
                  </Link>
                </div>

                {showRenewalLimitation && (
                  <p className="mt-4 text-xs leading-relaxed text-gray-500">
                    Renewal and post-expiry plan changes are blocked by the current backend, which has no route to create a new unpaid sale subscription after the original one is paid.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-gray-800">Listing Snapshot</h2>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between gap-4">
                    <span>Verification</span>
                    <span className="font-semibold text-gray-900">
                      {property.isVerified ? "Verified" : "Pending"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Listing status</span>
                    <span className="font-semibold text-gray-900">{property.listingStatus}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Expiry</span>
                    <span className="font-semibold text-gray-900">{expiryLabel}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sale price</span>
                    <span className="font-semibold text-gray-900">EGP {property.priceValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-gray-800">What happens next</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                  <p>1. Add the sale property with a selling plan.</p>
                  <p>2. Wait for admin verification to mark the property verified and available.</p>
                  <p>3. Pay the listing fee to activate the selling subscription.</p>
                  <p>4. Buyers can then contact you through chat while the listing stays active.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
