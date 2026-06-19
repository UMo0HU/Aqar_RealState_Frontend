import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { deleteProperty } from "@/services/propertyService";
import { findRememberedChatContext } from "@/services/chatService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";
import SponsorshipModal from "@/features/subscription/components/SponsorshipModal";

import { saleService } from "@/services/saleService";
import { getSaleListingLabel, getSaleListingTone } from "@/utils/propertyListing";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";
import { useToast } from "@/context/ToastContext";
import type { Lease, Property } from "@/types/index";

import { usePropertyRentalContext } from "./usePropertyRentalContext";

interface Props { property: Property }

const ACTIVE_LEASE_STATUSES: Lease["status"][] = ["UPCOMING", "IN_PROGRESS", "OVERDUE"];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const hasDatePassed = (value: string) =>
  new Date(`${value}T23:59:59`).getTime() < Date.now();

export default function OwnerPanel({ property }: Props) {
  const navigate = useNavigate();
  const toast = useToast();
  const [deleting, setDeleting] = useState(false);
  const [showSponsorshipModal, setShowSponsorshipModal] = useState(false);

  const isSale = property.property_type === "for_sale";
  const saleSubscription = isSale
    ? syncStoredListingSubscriptionWithProperty(property) ?? getStoredListingSubscription(property.propertyId)
    : null;
  const saleSubscriptionState = isSale
    ? getSaleSubscriptionUiState(property, saleSubscription)
    : null;

  const {
    loading: rentalLoading,
    error: rentalError,
    relevantLease,
    relevantReceivedRequest,
  } = usePropertyRentalContext({
    propertyId: property.propertyId,
    enabled: !isSale,
    role: "owner",
  });

  const currentRenterId = useMemo(() => {
    if (relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status)) {
      return relevantLease.renter_id;
    }

    if (relevantReceivedRequest?.request_state === "PAID"
      || relevantReceivedRequest?.request_state === "ACCEPTED"
      || relevantReceivedRequest?.request_state === "PAYMENT_PENDING") {
      if (relevantReceivedRequest.request_state === "PAID" && hasDatePassed(relevantReceivedRequest.check_out_date)) {
        return null;
      }
      return relevantReceivedRequest.renter_id;
    }

    return null;
  }, [relevantLease, relevantReceivedRequest]);

  const openRenterChat = useCallback(() => {
    if (!currentRenterId) return;

    const partnerName = relevantLease?.renter_name ?? "Current Renter";
    const existingChat = findRememberedChatContext(property.propertyId, currentRenterId);
    const chatState = {
      partnerName,
      partnerId: currentRenterId,
      propertyId: property.propertyId,
      propertyName: property.propertyName,
      propertyImg: property.images[0] ?? null,
    };

    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
      return;
    }

    navigate("/chat/start", {
      state: {
        receiverId: currentRenterId,
        ...chatState,
      },
    });
  }, [currentRenterId, navigate, property.images, property.propertyId, property.propertyName, relevantLease]);

  const [markingSold, setMarkingSold] = useState(false);

  const handleMarkAsSold = async () => {
    if (!window.confirm(`Mark "${property.propertyName}" as sold? This will hide it from search results.`)) return;
    try {
      setMarkingSold(true);
      await saleService.markAsSold(property.propertyId);
      toast.success("Property marked as sold.");
      navigate(0);
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.message ?? "Failed to mark as sold.")
          : "Failed to mark as sold.",
      );
    } finally {
      setMarkingSold(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${property.propertyName}"? This cannot be undone.`)) return;
    try {
      setDeleting(true);
      await deleteProperty(String(property.propertyId));
      toast.success("Property deleted.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Delete failed.")
          : "Delete failed.",
      );
    } finally {
      setDeleting(false);
    }
  };

  const renderPropertyStatusCard = () => {
    if (isSale) {
      const tone = saleSubscriptionState === "expired"
        ? "bg-red-50 text-red-700 border-red-200"
        : saleSubscriptionState === "ready_to_pay"
          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
          : saleSubscriptionState === "paid_awaiting_verification" || saleSubscriptionState === "payment_pending"
            ? "bg-blue-50 text-blue-700 border-blue-200"
            : getSaleListingTone(property.listingStatus);

      const title = saleSubscriptionState === "awaiting_verification"
        ? "Pending admin verification"
        : saleSubscriptionState === "paid_awaiting_verification"
          ? "Listing fee paid"
          : saleSubscriptionState === "ready_to_pay"
            ? "Ready for listing payment"
            : saleSubscriptionState === "payment_pending"
              ? "Waiting for payment confirmation"
              : saleSubscriptionState === "expired"
                ? "Subscription expired"
                : getSaleListingLabel(property.listingStatus);

      const description = saleSubscriptionState === "awaiting_verification"
        ? "The selling plan is attached, but payment stays locked until the property passes admin verification."
        : saleSubscriptionState === "paid_awaiting_verification"
          ? "The listing fee has been received. Buyers will only see the property after admin verification is complete."
          : saleSubscriptionState === "ready_to_pay"
            ? "The property is verified and can now be activated by paying the saved selling plan."
            : saleSubscriptionState === "payment_pending"
              ? "A payment session was started for this plan. Refresh or open the selling-plan page to confirm the result."
              : saleSubscriptionState === "expired"
                ? "The current backend has no renewal endpoint, so expired sale subscriptions cannot be recreated from the frontend yet."
                : property.listingStatus === "active"
                  ? "Visible to buyers and ready for chat."
                  : property.listingStatus === "under_negotiation"
                    ? "Buyer discussions are already underway."
                    : property.listingStatus === "sold"
                      ? "This property has been marked as sold."
                      : "This listing is waiting for activation.";

      return (
        <div className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold ${tone}`}>
          <span className="text-base">🏷️</span>
          <div>
            <p>{title}</p>
            <p className="mt-1 text-xs font-medium opacity-80">{description}</p>
          </div>
        </div>
      );
    }

    if (rentalLoading) {
      return (
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
        </div>
      );
    }

    if (rentalError) {
      return (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <p className="font-semibold">{rentalError}</p>
          <p className="mt-1 text-xs">Open rent requests to inspect the current tenant status manually.</p>
        </div>
      );
    }

    if (relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status)) {
      const overdue = relevantLease.status === "OVERDUE";

      return (
        <div className={`rounded-xl border px-4 py-3 text-sm ${
          overdue
            ? "border-orange-200 bg-orange-50 text-orange-800"
            : "border-green-200 bg-green-50 text-green-800"
        }`}>
          <p className="font-semibold">{overdue ? "Current renter overdue" : "Current renter assigned"}</p>
          <p className="mt-1 text-xs leading-relaxed">
            Renter ID: {relevantLease.renter_id.slice(0, 8)}… | {formatDate(relevantLease.check_in_date)} to {formatDate(relevantLease.check_out_date)}
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "ACCEPTED" || relevantReceivedRequest?.request_state === "PAYMENT_PENDING") {
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          <p className="font-semibold">Awaiting renter payment</p>
          <p className="mt-1 text-xs leading-relaxed">
            You approved a rent request for this property. The renter still needs to finish payment.
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "PAID" && !hasDatePassed(relevantReceivedRequest.check_out_date)) {
      return (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <p className="font-semibold">Payment received</p>
          <p className="mt-1 text-xs leading-relaxed">
            A renter has paid for this booking. Lease details should already be visible or will appear shortly.
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "PENDING") {
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <p className="font-semibold">Pending rent request</p>
          <p className="mt-1 text-xs leading-relaxed">
            A renter is waiting for your approval on this property.
          </p>
        </div>
      );
    }

    return (
      <div className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold ${
        property.isVerified
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-amber-50 text-amber-700 border border-amber-200"
      }`}>
        <span className="text-base">{property.isVerified ? "✅" : "⏳"}</span>
        {property.isVerified
          ? property.isAvailable
            ? "Available for new rent requests"
            : "Currently unavailable for new renters"
          : "Pending verification"}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-[768px]:max-[1049px]:flex-row gap-5 items-start">
      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 w-full min-[768px]:max-[1049px]:flex-3 min-[768px]:max-[1049px]:min-w-0">
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
            Your Property
          </p>
          <p className="text-xl font-bold text-gray-900 leading-tight">{property.propertyName}</p>
        </div>

        {renderPropertyStatusCard()}

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Price</p>
            <p className="font-bold text-gray-900">
              EGP {property.priceValue.toLocaleString()}
              {!isSale && (
                <span className="font-normal text-gray-500 text-xs ml-1">
                  / {property.pricingUnit === "MONTH" ? "mo" : "day"}
                </span>
              )}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Availability</p>
            <p className={`font-bold ${
              isSale
                ? saleSubscriptionState === "active" || saleSubscriptionState === "paid_awaiting_verification"
                  ? "text-green-600"
                  : saleSubscriptionState === "expired"
                    ? "text-red-600"
                    : "text-amber-600"
                : property.isAvailable
                  ? "text-green-600"
                  : "text-red-500"
            }`}>
              {isSale
                ? saleSubscriptionState === "ready_to_pay"
                  ? "Ready to Pay"
                  : saleSubscriptionState === "awaiting_verification"
                    ? "Pending Review"
                    : saleSubscriptionState === "payment_pending"
                      ? "Payment Pending"
                      : hasExpiredSaleListing(property)
                        ? "Expired"
                        : getSaleListingLabel(property.listingStatus)
                : property.isAvailable
                  ? "Available"
                  : "Unavailable"}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {isSale && (
            <>
              <button
                type="button"
                onClick={() => navigate(`/property/${property.propertyId}/subscription`)}
                className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
              >
                Manage Selling Plan
              </button>
              {property.listingStatus === "active" && (
                <button
                  type="button"
                  onClick={handleMarkAsSold}
                  disabled={markingSold}
                  className="w-full border border-slate-300 py-3 rounded-full font-semibold text-sm hover:bg-slate-50 transition cursor-pointer disabled:opacity-50"
                >
                  {markingSold ? "Marking…" : "Mark as Sold"}
                </button>
              )}
            </>
          )}
          {!isSale && (
            <button
              type="button"
              onClick={() => navigate("/rent-requests")}
              className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
            >
              Review Rent Requests
            </button>
          )}
          {property.isVerified && !isSale && !property.isSponsored && (
            <button
              type="button"
              onClick={() => setShowSponsorshipModal(true)}
              className="w-full border border-amber-300 bg-amber-50 py-3 rounded-full font-bold text-amber-800 hover:bg-amber-100 transition cursor-pointer"
            >
              Boost Rental
            </button>
          )}
          {!isSale && currentRenterId && (
            <>
              <button
                type="button"
                onClick={() => navigate("/leases")}
                className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                View Current Lease
              </button>
              <button
                type="button"
                onClick={openRenterChat}
                className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                Message Current Renter
              </button>
            </>
          )}
          <button
            type="button"
            onClick={() => navigate(`/property/${property.propertyId}/edit`)}
            className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
          >
            Edit Property
          </button>
          <button
            type="button"
            onClick={() => navigate("/my-properties")}
            className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
          >
            My Properties
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="w-full border border-red-200 text-red-500 py-3 rounded-full font-semibold text-sm hover:bg-red-50 transition cursor-pointer disabled:opacity-50"
          >
            {deleting ? "Deleting…" : "Delete Property"}
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md w-full min-[768px]:max-[1049px]:flex-2 min-[768px]:max-[1049px]:min-w-0">
        <h3 className="font-semibold text-base mb-3">Property Info</h3>
        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Type</span>
            <span className="font-semibold text-gray-900">
              {isSale ? "For Sale" : "For Rent"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Furnished</span>
            <span className="font-semibold text-gray-900">{property.is_furnished ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-gray-900">
              {isSale
                ? saleSubscriptionState === "ready_to_pay"
                  ? "Verified · Unpaid"
                  : saleSubscriptionState === "awaiting_verification"
                    ? "Pending Review"
                    : saleSubscriptionState === "payment_pending"
                      ? "Payment Pending"
                      : hasExpiredSaleListing(property)
                        ? "Expired"
                        : getSaleListingLabel(property.listingStatus)
                : property.isVerified
                  ? "Verified"
                  : "Pending"}
            </span>
          </div>
          {!isSale && (
            <div className="flex justify-between">
              <span className="text-gray-500">Pricing</span>
              <span className="font-semibold text-gray-900">
                {property.pricingUnit === "MONTH" ? "Monthly" : "Daily"}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-500">Bedrooms</span>
            <span className="font-semibold text-gray-900">{property.bedroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bathrooms</span>
            <span className="font-semibold text-gray-900">{property.bathroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Size</span>
            <span className="font-semibold text-gray-900">{property.size} m²</span>
          </div>
          {property.is_furnished && property.bedsNumber > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Beds</span>
              <span className="font-semibold text-gray-900">{property.bedsNumber}</span>
            </div>
          )}
        </div>
      </div>
      {showSponsorshipModal && (
        <SponsorshipModal
          property={property}
          onClose={() => setShowSponsorshipModal(false)}
        />
      )}
    </div>
  );
}
