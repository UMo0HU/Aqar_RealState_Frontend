import { useState } from "react";

import { useToast } from "@/context/ToastContext";
import {
  buildSponsorshipPaymentSuccessUrl,
  createSponsorshipCheckout,
  SPONSORSHIP_PLANS,
  type SponsorshipDuration,
} from "@/services/sponsorshipService";
import type { Property } from "@/types";
import { getApiErrorMessage } from "@/utils/apiError";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function SponsorshipModal({ property, onClose }: Props) {
  const toast = useToast();
  const [duration, setDuration] = useState<SponsorshipDuration>(1);
  const [starting, setStarting] = useState(false);

  const selectedPlan = SPONSORSHIP_PLANS.find((plan) => plan.duration === duration);

  const handleCheckout = async () => {
    if (!property.isVerified) {
      toast.error("Only verified properties can be boosted.");
      return;
    }

    try {
      setStarting(true);
      const res = await createSponsorshipCheckout(
        property.propertyId,
        duration,
        buildSponsorshipPaymentSuccessUrl(property.propertyId),
      );

      const checkoutUrl = res.data?.url;
      if (typeof checkoutUrl !== "string" || !checkoutUrl) {
        throw new Error("Missing sponsorship checkout URL");
      }

      window.location.assign(checkoutUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start sponsorship payment."));
      setStarting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
              Rental Boost
            </p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Boost Rental Visibility
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {property.propertyName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            aria-label="Close sponsorship modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {SPONSORSHIP_PLANS.map((plan) => (
            <button
              key={plan.duration}
              type="button"
              onClick={() => setDuration(plan.duration)}
              className={`rounded-2xl border p-4 text-left transition cursor-pointer ${
                duration === plan.duration
                  ? "border-dark-knight bg-dark-knight text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <p className="text-sm font-bold">{plan.label}</p>
              <p className={`mt-1 text-xl font-bold ${duration === plan.duration ? "text-amber-300" : "text-gray-900"}`}>
                EGP {plan.amount.toLocaleString()}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          Rental boosts are prioritized for home-page rental visibility.
          The backend updates sponsorship status automatically via webhook.
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Selected: <strong className="text-gray-900">{selectedPlan?.label}</strong>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={starting || !property.isVerified}
              className="rounded-xl bg-dark-knight px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              {starting ? "Preparing..." : "Continue to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
