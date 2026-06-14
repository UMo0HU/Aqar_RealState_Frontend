import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import { getPendingSponsorship } from "@/services/sponsorshipService";

export default function SponsorshipPaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const propertyId = Number(searchParams.get("property_id"));
  const sponsorship = Number.isFinite(propertyId)
    ? getPendingSponsorship(propertyId)
    : null;

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-4xl font-bold text-amber-700">
          B
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Boost Payment Submitted</h1>
          <p className="max-w-md leading-relaxed text-gray-500">
            The payment provider redirected you back to AQAR. Promotion activation is confirmed by the backend webhook and may take a moment to appear.
          </p>
        </div>

        {sponsorship && (
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left text-sm shadow-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Property</span>
              <span className="font-semibold text-gray-900">#{sponsorship.propertyId}</span>
            </div>
            <div className="mt-2 flex justify-between gap-4">
              <span className="text-gray-500">Duration</span>
              <span className="font-semibold text-gray-900">{sponsorship.duration} month{sponsorship.duration > 1 ? "s" : ""}</span>
            </div>
            <div className="mt-2 flex justify-between gap-4">
              <span className="text-gray-500">Tier</span>
              <span className="font-semibold text-gray-900">{sponsorship.tier}</span>
            </div>
          </div>
        )}

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/my-properties"
            className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
          >
            My Properties
          </Link>
          {Number.isFinite(propertyId) && (
            <Link
              to={`/rent/property/${propertyId}`}
              className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
            >
              View Property
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
