import axios from "@/api/axiosInstance";
import type { Property } from "@/types";

export type SponsorshipDuration = 1 | 3 | 6;

export const SPONSORSHIP_PLANS: Array<{
  duration: SponsorshipDuration;
  label: string;
  amount: number;
}> = [
  { duration: 1, label: "1 Month", amount: 250 },
  { duration: 3, label: "3 Months", amount: 700 },
  { duration: 6, label: "6 Months", amount: 1000 },
];

export const sortPropertiesWithLocalSponsorship = (
  properties: Property[],
) => {
  const sponsored: Property[] = [];
  const standard: Property[] = [];

  properties.forEach((property) => {
    if (property.isSponsored === true) {
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
