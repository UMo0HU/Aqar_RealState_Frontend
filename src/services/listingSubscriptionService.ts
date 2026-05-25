import type { Property, SellingPlanMonths } from "@/types";

export type ListingSubscriptionPaymentState = "UNPAID" | "PENDING" | "PAID";

export interface ListingSubscriptionRecord {
  propertyId: number;
  subscriptionId: string;
  propertyName: string;
  planMonths: SellingPlanMonths;
  amount: number;
  paymentState: ListingSubscriptionPaymentState;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = "aqar_listing_subscriptions";

export const SELLING_PLAN_OPTIONS: Array<{
  months: SellingPlanMonths;
  label: string;
  amount: number;
  description: string;
}> = [
  { months: 1, label: "1 Month", amount: 120, description: "Short launch for testing buyer interest." },
  { months: 3, label: "3 Months", amount: 360, description: "Balanced visibility for active selling." },
  { months: 6, label: "6 Months", amount: 600, description: "Longest campaign for maximum exposure." },
];

const isValidPlanMonths = (value: number): value is SellingPlanMonths =>
  SELLING_PLAN_OPTIONS.some((plan) => plan.months === value);

export const getSellingPlanPrice = (months: SellingPlanMonths) =>
  SELLING_PLAN_OPTIONS.find((plan) => plan.months === months)?.amount ?? 0;

export const formatSellingPlanLabel = (months: SellingPlanMonths) =>
  SELLING_PLAN_OPTIONS.find((plan) => plan.months === months)?.label ?? `${months} Months`;

const readStoredSubscriptions = (): Record<string, ListingSubscriptionRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, ListingSubscriptionRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeStoredSubscriptions = (records: Record<string, ListingSubscriptionRecord>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};

export const saveListingSubscription = (
  record: Omit<ListingSubscriptionRecord, "createdAt" | "updatedAt">,
) => {
  const existing = readStoredSubscriptions();
  const previous = existing[String(record.propertyId)];

  existing[String(record.propertyId)] = {
    ...record,
    createdAt: previous?.createdAt ?? Date.now(),
    updatedAt: Date.now(),
  };

  writeStoredSubscriptions(existing);
};

export const getStoredListingSubscription = (propertyId: number) =>
  readStoredSubscriptions()[String(propertyId)] ?? null;

export const updateStoredListingSubscriptionState = (
  propertyId: number,
  paymentState: ListingSubscriptionPaymentState,
) => {
  const existing = readStoredSubscriptions();
  const current = existing[String(propertyId)];
  if (!current) return;

  existing[String(propertyId)] = {
    ...current,
    paymentState,
    updatedAt: Date.now(),
  };

  writeStoredSubscriptions(existing);
};

export const syncStoredListingSubscriptionWithProperty = (property: Property) => {
  if (property.property_type !== "for_sale") return null;

  const current = getStoredListingSubscription(property.propertyId);
  if (!current) return null;

  const hasActiveListing =
    property.listingStatus === "active"
    || property.listingStatus === "under_negotiation"
    || property.listingStatus === "sold"
    || property.listingStatus === "expired";

  if (hasActiveListing && current.paymentState !== "PAID") {
    updateStoredListingSubscriptionState(property.propertyId, "PAID");
    return getStoredListingSubscription(property.propertyId);
  }

  return current;
};

export const getStoredSellingPlanMonths = (propertyId: number) =>
  getStoredListingSubscription(propertyId)?.planMonths ?? null;

export const normalizeStoredSellingPlan = (
  value: number | string | null | undefined,
): SellingPlanMonths | null => {
  const asNumber = Number(value);
  return isValidPlanMonths(asNumber) ? asNumber : null;
};
