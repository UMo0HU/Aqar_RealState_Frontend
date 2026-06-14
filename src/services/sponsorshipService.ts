import axios from "@/api/axiosInstance";
import type { Property } from "@/types";

export type SponsorshipDuration = 1 | 3 | 6;
export type SponsorshipTier = "general" | "rental";

export interface SponsorshipRecord {
  propertyId: number;
  duration: SponsorshipDuration;
  tier: SponsorshipTier;
  createdAt: number;
  paymentState: "PENDING";
}

const STORAGE_KEY = "aqar_pending_sponsorships";

export const SPONSORSHIP_PLANS: Array<{
  duration: SponsorshipDuration;
  label: string;
  amount: number;
}> = [
  { duration: 1, label: "1 Month", amount: 250 },
  { duration: 3, label: "3 Months", amount: 700 },
  { duration: 6, label: "6 Months", amount: 1000 },
];

const readRecords = (): Record<string, SponsorshipRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, SponsorshipRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeRecords = (records: Record<string, SponsorshipRecord>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};

export const savePendingSponsorship = (record: Omit<SponsorshipRecord, "createdAt" | "paymentState">) => {
  const records = readRecords();
  records[String(record.propertyId)] = {
    ...record,
    createdAt: Date.now(),
    paymentState: "PENDING",
  };
  writeRecords(records);
};

export const getPendingSponsorship = (propertyId: number) =>
  readRecords()[String(propertyId)] ?? null;

export const getPendingSponsorshipPropertyIds = () =>
  new Set(Object.keys(readRecords()).map(Number).filter(Number.isFinite));

export const isLocallySponsoredProperty = (propertyId: number) =>
  Boolean(getPendingSponsorship(propertyId));

export const sortPropertiesWithLocalSponsorship = (
  properties: Property[],
  tier?: SponsorshipTier,
) => {
  const records = readRecords();
  const sponsored: Property[] = [];
  const standard: Property[] = [];

  properties.forEach((property) => {
    const record = records[String(property.propertyId)];
    if (record && (!tier || record.tier === tier)) {
      sponsored.push(property);
      return;
    }

    standard.push(property);
  });

  return [
    ...sponsored.sort(() => Math.random() - 0.5),
    ...standard,
  ];
};

export const buildSponsorshipPaymentSuccessUrl = (propertyId: number | string) => {
  const successUrl = new URL("/payment/sponsor/success", window.location.origin);
  successUrl.searchParams.set("property_id", String(propertyId));
  successUrl.searchParams.set("source", "sponsorship");
  return successUrl.toString();
};

export const createSponsorshipCheckout = (
  propertyId: number,
  duration: SponsorshipDuration,
  redirectUrl: string,
) =>
  axios.post<{ url: string }>("/api/sponser", {
    property_id: propertyId,
    duration,
    redirect: redirectUrl,
  });
