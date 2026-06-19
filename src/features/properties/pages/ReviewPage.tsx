import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import ReviewsSection from "@/features/properties/components/PropertyComponents/ReviewSection";
import { getPropertyById } from "@/services/propertyService";
import { getLeasesAsRenter } from "@/services/leaseService";
import type { Lease, Property } from "@/types";
import { getApiErrorMessage } from "@/utils/apiError";
import { mapProperty } from "@/utils/mapProperty";

export default function ReviewPage() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canReview, setCanReview] = useState(false);

  const loadProperty = useCallback(async () => {
    if (!propertyId) {
      setError("Missing property id.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const propRes = await getPropertyById(propertyId);
      const prop = mapProperty(propRes.data);
      setProperty(prop);

      const leasesRes = await getLeasesAsRenter();
      const leases: Lease[] = leasesRes.data.data ?? [];
      const hasCompleted = leases.some(
        (l) => Number(l.property_id) === Number(propertyId) && l.status === "COMPLETED"
      );

      if (!hasCompleted) {
        navigate("/", { replace: true });
        return;
      }

      setCanReview(true);
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Could not load this property."));
    } finally {
      setLoading(false);
    }
  }, [propertyId, navigate]);

  useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link to={property ? `/rent/property/${property.propertyId}` : "/"} className="text-sm font-semibold text-gray-500 transition hover:text-gray-900">
            Back to property
          </Link>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={loadProperty}
                className="mt-3 rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && property && canReview && (
            <ReviewsSection
              property={property}
              autoFocusForm
              hideForm={false}
              onReviewSubmitted={loadProperty}
            />
          )}
        </div>
      </div>
    </>
  );
}
