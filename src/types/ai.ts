export interface AIChatResponse {
  answer?: string;
  reply?: string;
  properties?: AIChatProperty[];
}

export interface AIChatProperty {
  property_id?: number;
  id?: number;
  title?: string;
  property_name?: string;
  description?: string;
  property_desc?: string;
  location?: string;
  price?: number;
  price_value?: number;
  price_per_day?: number;
  size?: number;
  bedrooms?: number;
  bedrooms_no?: number;
  bathrooms?: number;
  bathrooms_no?: number;
  beds_no?: number;
  image_url?: string;
  images?: string[];
  url?: string;
  property_type?: string;
  recommendation_score?: number;
  is_available?: boolean;
  is_verified?: boolean;
  is_visible?: boolean;
  is_furnished?: boolean;
  is_sponsored?: boolean;
  rate?: number;
  latitude?: number;
  longitude?: number;
  pricing_unit?: string;
  listing_status?: string;
  listing_expiry?: string | null;
  owner_id?: string;
  owner_first_name?: string;
  owner_second_name?: string;
  owner_email?: string;
  ownership_proofs?: string[];
  nearby_services?: string[];
}
