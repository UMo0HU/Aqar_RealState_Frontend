import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { eachDayOfInterval, isSameDay } from "date-fns";

import DatePicker, { type DateSelection } from "@/features/properties/components/PropertyComponents/DataPicker";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { findRememberedChatContext } from "@/services/chatService";
import {
  cancelRentRequest,
  createRentRequest,
} from "@/services/rentRequestService";
import {
  getSaleListingLabel,
  getSaleListingTone,
} from "@/utils/propertyListing";
import type { Lease, Property, RentRequest } from "@/types";

import { usePropertyRentalContext } from "./usePropertyRentalContext";

interface Props { property: Property }

const ACTIVE_LEASE_STATUSES: Lease["status"][] = ["UPCOMING", "IN_PROGRESS", "OVERDUE"];
const PENDING_RENT_STATES: RentRequest["request_state"][] = ["PENDING", "ACCEPTED", "PAYMENT_PENDING", "PAID"];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const hasDatePassed = (value: string) =>
  new Date(`${value}T23:59:59`).getTime() < Date.now();

const formatLeaseStatus = (status: Lease["status"]) => {
  switch (status) {
    case "UPCOMING":
      return "Upcoming lease";
    case "IN_PROGRESS":
      return "Active lease";
    case "OVERDUE":
      return "Payment overdue";
    case "COMPLETED":
      return "Completed lease";
    case "CANCELLED":
    default:
      return "Cancelled lease";
  }
};

export default function BookingSidebar({ property }: Props) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const isSale = property.property_type === "for_sale";
  const isMonthly = property.pricingUnit === "MONTH";

  const [showPicker, setShowPicker] = useState(false);
  const [selection, setSelection] = useState<DateSelection | null>(null);
  const [busyAction, setBusyAction] = useState<"create" | "cancel" | null>(null);

  const {
    loading: rentalStatusLoading,
    error: rentalStatusError,
    reload: reloadRentalContext,
    relevantSentRequest,
    relevantLease,
    disabledDates,
  } = usePropertyRentalContext({
    propertyId: property.propertyId,
    enabled: isAuthenticated && !isSale,
    role: "viewer",
  });

  const ownerName =
    [property.owner_first_name, property.owner_second_name].filter(Boolean).join(" ")
    || "Property Owner";

  const openPropertyChat = useCallback((partnerId: string, partnerName: string) => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const existingChat = findRememberedChatContext(property.propertyId, partnerId);
    const chatState = {
      partnerName,
      partnerId,
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
        receiverId: partnerId,
        ...chatState,
      },
    });
  }, [isAuthenticated, navigate, property.images, property.propertyId, property.propertyName]);

  const priceLabel = isSale
    ? `EGP ${property.priceValue.toLocaleString()}`
    : isMonthly
      ? `EGP ${property.priceValue.toLocaleString()} / mo`
      : `EGP ${property.pricePerDay.toLocaleString()} / day`;

  const total = () => {
    if (!selection) return 0;
    if (selection.rentingType === "DAY") {
      return (selection.days ?? 0) * property.pricePerDay;
    }
    if (selection.rentingType === "MONTH") {
      return (selection.numMonths ?? 0) * property.priceValue;
    }
    return 0;
  };

  const hasCurrentLease = Boolean(
    relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status),
  );

  const paidRequestStillActive = Boolean(
    relevantSentRequest?.request_state === "PAID"
    && !hasDatePassed(relevantSentRequest.check_out_date),
  );
  const currentRequestState = relevantSentRequest?.request_state === "PAID" && !paidRequestStillActive
    ? null
    : relevantSentRequest?.request_state ?? null;
  const hasBlockingRequest = currentRequestState
    ? PENDING_RENT_STATES.includes(currentRequestState)
    : false;

  const canStartNewRentRequest = useMemo(() => (
    !isSale
    && property.isVerified
    && property.isAvailable
    && !hasCurrentLease
    && !hasBlockingRequest
  ), [
    hasBlockingRequest,
    hasCurrentLease,
    isSale,
    property.isAvailable,
    property.isVerified,
  ]);

  const handleBook = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }
    if (!selection) {
      toast.error("Please select your dates first.");
      return;
    }

    try {
      setBusyAction("create");

      await reloadRentalContext();

      const freshFrom = new Date(selection.checkIn + "T00:00:00");
      const freshTo   = new Date(selection.checkOut + "T00:00:00");
      const freshRange = eachDayOfInterval({ start: freshFrom, end: freshTo });
      const hasOverlap = freshRange.some((day) =>
        disabledDates.some((d) => isSameDay(day, d)),
      );

      if (hasOverlap) {
        toast.error("These dates were just booked by someone else. Please select new dates.");
        setSelection(null);
        setShowPicker(false);
        setBusyAction(null);
        return;
      }

      await createRentRequest({
        property_id: property.propertyId,
        check_in_date: selection.checkIn,
        check_out_date: selection.checkOut,
        renting_type: selection.rentingType,
      });
      toast.success("Rent request sent! The owner will review it shortly.");
      setSelection(null);
      setShowPicker(false);
      await reloadRentalContext();
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Request failed.")
          : "Unexpected error.",
      );
    } finally {
      setBusyAction(null);
    }
  };

  const handleCancelRequest = async () => {
    if (!relevantSentRequest) return;
    if (!window.confirm("Cancel this rent request?")) return;

    try {
      setBusyAction("cancel");
      await cancelRentRequest(relevantSentRequest.request_id);
      toast.success("Rent request cancelled.");
      await reloadRentalContext();
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Cancel failed.")
          : "Cancel failed.",
      );
    } finally {
      setBusyAction(null);
    }
  };

  const renderSaleStatus = () => {
    const tone = getSaleListingTone(property.listingStatus);
    const label = getSaleListingLabel(property.listingStatus);

    let description =
      "AQAR connects buyers and sellers through property chat only. Start a conversation with the seller to continue.";

    if (property.listingStatus === "under_negotiation") {
      description =
        "The seller is already discussing this listing with another buyer. You can still message them in case availability changes.";
    } else if (property.listingStatus === "sold") {
      description = "This listing has been marked as sold and is no longer open for new buyer conversations.";
    } else if (property.listingStatus === "expired") {
      description = "This sale listing has expired. The seller needs to renew it before new buyer conversations can start.";
    } else if (property.listingStatus === "inactive") {
      description = "This sale listing is not active yet. It may still be awaiting verification or listing payment.";
    }

    const canMessageSeller = ["active", "under_negotiation"].includes(property.listingStatus);

    return (
      <>
        <div className={`rounded-2xl border px-4 py-3 text-sm ${tone}`}>
          <p className="font-bold">{label}</p>
          <p className="mt-1 leading-relaxed">{description}</p>
        </div>

        <button
          type="button"
          disabled={!canMessageSeller}
          onClick={() => openPropertyChat(property.ownerId, ownerName)}
          className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          {canMessageSeller ? "Message Seller" : "Sale Chat Unavailable"}
        </button>

      </>
    );
  };

  const renderRentalStatus = () => {
    if (!isAuthenticated) {
      return (
        <>
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            Sign In to Book
          </button>
          <p className="text-center text-xs text-gray-400">
            Sign in to request dates or message the owner.
          </p>
        </>
      );
    }

    if (rentalStatusLoading) {
      return (
        <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 py-5">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
        </div>
      );
    }

    if (rentalStatusError) {
      return (
        <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-semibold">{rentalStatusError}</p>
          <button
            type="button"
            onClick={() => reloadRentalContext()}
            className="rounded-xl bg-white px-4 py-2 font-semibold text-red-700 transition hover:bg-red-100 cursor-pointer"
          >
            Retry
          </button>
        </div>
      );
    }

    if (hasCurrentLease && relevantLease) {
      const isOverdue = relevantLease.status === "OVERDUE";

      return (
        <>
          <div className={`rounded-2xl border px-4 py-3 text-sm ${
            isOverdue
              ? "border-orange-200 bg-orange-50 text-orange-800"
              : "border-green-200 bg-green-50 text-green-800"
          }`}>
            <p className="font-bold">{formatLeaseStatus(relevantLease.status)}</p>
            <p className="mt-1 leading-relaxed">
              {isOverdue
                ? "Your lease is active but there is an overdue payment on it. Check your leases and notifications for the next step."
                : `Your stay is confirmed from ${formatDate(relevantLease.check_in_date)} to ${formatDate(relevantLease.check_out_date)}.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/leases")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View My Lease
          </button>
        </>
      );
    }

    if (currentRequestState === "PAID") {
      return (
        <>
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            <p className="font-bold">Booking confirmed</p>
            <p className="mt-1 leading-relaxed">
              Your payment was accepted and the booking is now waiting for its lease details to appear.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/payment/success?request_id=" + relevantSentRequest?.request_id)}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View Confirmation
          </button>
        </>
      );
    }

    if (currentRequestState === "ACCEPTED" || currentRequestState === "PAYMENT_PENDING") {
      return (
        <>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
            <p className="font-bold">Approved and awaiting payment</p>
            <p className="mt-1 leading-relaxed">
              The owner approved your request. Complete payment to confirm the booking for these dates.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/payment/${relevantSentRequest?.request_id}`)}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            Complete Payment
          </button>
          <button
            type="button"
            disabled={busyAction === "cancel"}
            onClick={handleCancelRequest}
            className="w-full rounded-full border border-gray-300 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {busyAction === "cancel" ? "Cancelling…" : "Cancel Request"}
          </button>
        </>
      );
    }

    if (currentRequestState === "PENDING") {
      return (
        <>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <p className="font-bold">Request pending</p>
            <p className="mt-1 leading-relaxed">
              The owner still needs to review your booking request. You can track it from your requests page or message the owner.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/rent-requests")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View My Request
          </button>
          <button
            type="button"
            disabled={busyAction === "cancel"}
            onClick={handleCancelRequest}
            className="w-full rounded-full border border-gray-300 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {busyAction === "cancel" ? "Cancelling…" : "Cancel Request"}
          </button>
        </>
      );
    }

    if (currentRequestState === "REJECTED" || currentRequestState === "CANCELLED" || currentRequestState === "REFUNDED" || currentRequestState === "REFUND_DENIED") {
      const statusLabel = currentRequestState === "REJECTED"
        ? "Previous request declined"
        : currentRequestState === "REFUNDED"
          ? "Previous booking refunded"
          : currentRequestState === "REFUND_DENIED"
            ? "Refund request denied"
            : "Previous request cancelled";

      return (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <p className="font-bold">{statusLabel}</p>
          <p className="mt-1 leading-relaxed">
            {canStartNewRentRequest
              ? "You can choose a new date range and submit another request."
              : "This property is not currently available for another booking request."}
          </p>
        </div>
      );
    }

    if (!property.isVerified) {
      return (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <p className="font-bold">Pending verification</p>
          <p className="mt-1 leading-relaxed">
            This property has not been verified yet, so booking requests are temporarily disabled.
          </p>
        </div>
      );
    }

    if (!property.isAvailable) {
      return (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <p className="font-bold">Unavailable for new bookings</p>
          <p className="mt-1 leading-relaxed">
            Another renter currently has this property booked, or the owner has taken it offline for now.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 w-full">
        <div className="flex justify-between items-end gap-3">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
              {isSale ? "Sale Price" : "Rent Price"}
            </p>
            <p className="text-3xl font-bold text-gray-900">{priceLabel}</p>
          </div>
          {isSale ? (
            <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${getSaleListingTone(property.listingStatus)}`}>
              {getSaleListingLabel(property.listingStatus)}
            </span>
          ) : !property.isAvailable ? (
            <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-full">
              Unavailable
            </span>
          ) : null}
        </div>

        {!isSale && canStartNewRentRequest && (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/auth/login");
                  return;
                }
                setShowPicker((value) => !value);
              }}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-400 transition cursor-pointer"
            >
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {isMonthly ? "Select months" : "Select dates"}
                </p>
                <p className="font-semibold text-sm mt-0.5 text-gray-800">
                  {selection
                    ? isMonthly
                      ? `${selection.numMonths} month${(selection.numMonths ?? 0) > 1 ? "s" : ""}`
                      : `${selection.days} day${(selection.days ?? 0) > 1 ? "s" : ""}`
                    : "Add dates"}
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${showPicker ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {showPicker && (
              <div className="pt-2 border-t border-gray-100">
                <DatePicker
                  mode={isMonthly ? "MONTH" : "DAY"}
                  onChange={setSelection}
                  disabledDates={disabledDates}
                  onRangeError={(msg) => toast.error(msg)}
                />
              </div>
            )}

            {selection && total() > 0 && (
              <div className="bg-gray-50 rounded-xl px-4 py-3 space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>
                    {selection.rentingType === "DAY"
                      ? `EGP ${property.pricePerDay.toLocaleString()} × ${selection.days} day${(selection.days ?? 0) > 1 ? "s" : ""}`
                      : `EGP ${property.priceValue.toLocaleString()} × ${selection.numMonths} month${(selection.numMonths ?? 0) > 1 ? "s" : ""}`}
                  </span>
                  <span>EGP {total().toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 pt-1.5 border-t border-gray-200">
                  <span>Total</span>
                  <span>EGP {total().toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-2.5">
          {isSale ? (
            renderSaleStatus()
          ) : (
            <>
              {renderRentalStatus()}

              {canStartNewRentRequest && (
                <button
                  type="button"
                  disabled={busyAction === "create" || !selection}
                  onClick={handleBook}
                  className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                >
                  {busyAction === "create" ? "Sending…" : selection ? "Send Rent Request" : "Choose Dates to Request"}
                </button>
              )}
            </>
          )}

          {!isSale && (
            <button
              type="button"
              onClick={() => openPropertyChat(property.ownerId, ownerName)}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Message Owner
            </button>
          )}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center font-bold text-lg shrink-0">
            {(property.owner_first_name?.[0] ?? "?").toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate">{ownerName}</p>
            <p className="text-xs text-gray-400">{isSale ? "Property Seller" : "Property Owner"}</p>
            {property.owner_email && (
              <p className="text-xs text-gray-400 truncate">{property.owner_email}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md w-full">
        <h3 className="font-semibold text-base mb-3">Property Info</h3>
        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Type</span>
            <span className="font-semibold text-gray-900">{isSale ? "For Sale" : "For Rent"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Furnished</span>
            <span className="font-semibold text-gray-900">{property.is_furnished ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className={`font-semibold ${
              isSale
                ? property.listingStatus === "active"
                  ? "text-green-600"
                  : property.listingStatus === "under_negotiation"
                    ? "text-amber-600"
                    : "text-red-600"
                : property.isVerified
                  ? "text-green-600"
                  : "text-yellow-600"
            }`}>
              {isSale ? getSaleListingLabel(property.listingStatus) : property.isVerified ? "Verified ✓" : "Pending"}
            </span>
          </div>
          {!isSale && (
            <div className="flex justify-between">
              <span className="text-gray-500">Pricing</span>
              <span className="font-semibold text-gray-900">{isMonthly ? "Monthly" : "Daily"}</span>
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

    </div>
  );
}
