import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import {
  createReview,
  getReviews,
  type ReviewRecord,
} from "@/services/reviewService";
import type { Property } from "@/types/index";
import { getApiErrorMessage } from "@/utils/apiError";
import StarRating from "./StarRating";

interface Props {
  property: Property;
  autoFocusForm?: boolean;
  onReviewSubmitted?: () => Promise<void> | void;
}

const reviewerName = (review: ReviewRecord) =>
  [review.first_name, review.second_name].filter(Boolean).join(" ")
  || review.email
  || "AQAR Guest";

export default function ReviewsSection({
  property,
  autoFocusForm = false,
  onReviewSubmitted,
}: Props) {
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      setReviews(await getReviews(property.propertyId));
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Could not load reviews."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property.propertyId]);

  const averageRating = useMemo(() => {
    if (reviews.length > 0) {
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      return total / reviews.length;
    }

    return property.rate ?? 0;
  }, [property.rate, reviews]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAuthenticated) {
      toast.error("Please sign in before leaving a review.");
      return;
    }

    if (rating < 1 || rating > 5) {
      toast.error("Choose a rating between 1 and 5 stars.");
      return;
    }

    try {
      setSubmitting(true);
      await createReview({
        property_id: property.propertyId,
        rating,
        phrase: phrase.trim(),
      });
      toast.success("Review submitted.");
      setPhrase("");
      setRating(5);
      await loadReviews();
      await onReviewSubmitted?.();
    } catch (submitError) {
      toast.error(
        axios.isAxiosError(submitError)
          ? getApiErrorMessage(submitError, "Could not submit your review.")
          : "Could not submit your review.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Ratings &amp; Reviews</h2>
          <p className="mt-1 text-sm text-gray-500">
            {reviews.length > 0
              ? `${reviews.length} review${reviews.length !== 1 ? "s" : ""} from AQAR guests`
              : "No written reviews yet."}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
          <span className="text-3xl font-bold text-gray-900">
            {Number(averageRating || 0).toFixed(1)}
          </span>
          <StarRating value={averageRating} readOnly />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-gray-900">Leave a Review</p>
            <p className="mt-0.5 text-xs text-gray-500">Share your experience with this property.</p>
          </div>
          <StarRating value={rating} onChange={setRating} />
        </div>

        <textarea
          value={phrase}
          onChange={(event) => setPhrase(event.target.value)}
          autoFocus={autoFocusForm}
          placeholder="What should future guests know?"
          rows={3}
          className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-dark-knight focus:ring-1 focus:ring-dark-knight"
        />

        <div className="mt-3 flex items-center justify-between gap-3">
          {!isAuthenticated ? (
            <p className="text-xs text-amber-700">Sign in to submit a review.</p>
          ) : (
            <p className="text-xs text-gray-400">Reviews are visible on the property page.</p>
          )}
          <button
            type="submit"
            disabled={submitting || !isAuthenticated}
            className="rounded-xl bg-dark-knight px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-semibold">{error}</p>
          <button
            type="button"
            onClick={loadReviews}
            className="mt-3 rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && reviews.length === 0 && (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-500">
          This property has not received written reviews yet.
        </p>
      )}

      {!loading && !error && reviews.length > 0 && (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review.review_id} className="rounded-2xl border border-gray-100 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-900">{reviewerName(review)}</p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {new Date(review.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <StarRating value={review.rating} readOnly sizeClass="text-lg" />
              </div>
              {review.phrase && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{review.phrase}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
