import axios from "@/api/axiosInstance";

export interface ReviewRecord {
  review_id: string;
  property_id: number;
  rent_id?: string | null;
  rating: number;
  phrase: string;
  created_at: string;
  first_name?: string;
  second_name?: string;
  email?: string;
}

export interface CreateReviewPayload {
  property_id: number;
  rating: number;
  phrase?: string;
  rent_id?: string;
  lease_id?: string;
}

interface RawReviewRecord {
  review_id?: string | number;
  property_id?: string | number;
  rent_id?: string | null;
  rating?: string | number;
  phrase?: string | null;
  created_at?: string;
  first_name?: string;
  second_name?: string;
  email?: string;
}

const normalizeReview = (review: RawReviewRecord): ReviewRecord => ({
  review_id: String(review.review_id ?? `${review.property_id}-${review.created_at}`),
  property_id: Number(review.property_id) || 0,
  rent_id: review.rent_id ?? null,
  rating: Number(review.rating) || 0,
  phrase: review.phrase ?? "",
  created_at: review.created_at ?? new Date().toISOString(),
  first_name: review.first_name,
  second_name: review.second_name,
  email: review.email,
});

export const getReviews = async (propertyId: number | string) => {
  const res = await axios.get<{ success: boolean; data: RawReviewRecord[] }>("/reviews", {
    params: { property_id: propertyId },
  });

  return (res.data.data ?? []).map(normalizeReview);
};

export const createReview = (payload: CreateReviewPayload) =>
  axios.post<{ success: boolean; msg: string; review_id?: string }>("/review", payload);
