import type { ListingSubscriptionRecord } from "@/services/listingSubscriptionService";
import type { Property } from "@/types";

export type SaleSubscriptionUiState =
  | "awaiting_verification"
  | "paid_awaiting_verification"
  | "ready_to_pay"
  | "payment_pending"
  | "active"
  | "expired"
  | "missing_subscription";

export const hasExpiredSaleListing = (property: Property) => {
  if (property.property_type !== "for_sale") return false;
  if (property.listingStatus === "expired") return true;

  if (!property.listingExpiry) return false;
  return new Date(property.listingExpiry).getTime() < Date.now();
};

export const getSaleSubscriptionUiState = (
  property: Property,
  subscription: ListingSubscriptionRecord | null,
): SaleSubscriptionUiState => {
  if (hasExpiredSaleListing(property)) {
    return "expired";
  }

  if (["active", "under_negotiation", "sold"].includes(property.listingStatus)) {
    return property.isVerified ? "active" : "paid_awaiting_verification";
  }

  if (!property.isVerified) {
    return subscription?.paymentState === "PAID"
      ? "paid_awaiting_verification"
      : "awaiting_verification";
  }

  if (subscription?.paymentState === "PENDING") {
    return "payment_pending";
  }

  if (subscription?.paymentState === "UNPAID") {
    return "ready_to_pay";
  }

  if (subscription?.paymentState === "PAID") {
    return property.isVerified ? "active" : "paid_awaiting_verification";
  }

  return "missing_subscription";
};
