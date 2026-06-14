import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import ReviewsSection from "@/features/properties/components/PropertyComponents/ReviewSection";
import { getPropertyById } from "@/services/propertyService";
import type { Property } from "@/types";
import { getApiErrorMessage } from "@/utils/apiError";
import { mapProperty } from "@/utils/mapProperty";

export default function ReviewPage() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProperty = useCallback(async () => {
    if (!propertyId) {
      setError("Missing property id.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await getPropertyById(propertyId);
      setProperty(mapProperty(res.data));
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Could not load this property."));
    } finally {
      setLoading(false);
    }
  }, [propertyId]);

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

          {!loading && property && (
            <ReviewsSection
              property={property}
              autoFocusForm
              onReviewSubmitted={loadProperty}
            />
          )}
        </div>
      </div>
    </>
  );
}
