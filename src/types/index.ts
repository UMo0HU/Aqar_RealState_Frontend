// ─── Property ─────────────────────────────────────────────────────────────────
export type PricingUnit   = "DAY" | "MONTH";
export type property_type = "for_sale" | "for_rent";
export type SellingPlanMonths = 1 | 3 | 6;
export type PropertyListingStatus =
  | "inactive"
  | "active"
  | "under_negotiation"
  | "sold"
  | "expired";

export interface Property {
  propertyId:       number;
  ownerId:          string;
  propertyName:     string;
  propertyDesc:     string;
  location:         string;
  latitude?:        number;
  longitude?:       number;
  pricingUnit:      PricingUnit;
  priceValue:       number;   // sale price OR monthly rent
  pricePerDay:      number;   // daily rent
  size:             string;   // normalized to plain number string (e.g. "120")
  bedroomsNumber:   number;
  bedsNumber:       number;
  bathroomsNumber:  number;
  images:           string[];
  ownershipProof:   string[];
  isAvailable:      boolean;
  isVerified:       boolean;
  is_furnished:     boolean;
  property_type:    property_type;
  listingStatus:    PropertyListingStatus;
  listingExpiry?:   string | null;
  rate:             number;
  owner_first_name?:  string;
  owner_second_name?: string;
  owner_email?:       string;
}

export interface PropertyFormData {
  property_type:    "for_sale" | "for_rent";
  sellingPlan?:     SellingPlanMonths;
  pricingUnit?:     "DAY" | "MONTH";
  propertyName:     string;
  propertyDesc:     string;
  location:         string;
  latitude?:        number;
  longitude?:       number;
  is_furnished:     boolean;
  bedroomsNumber:   number;
  bathroomsNumber:  number;
  bedsNumber:       number;
  size:             number;
  price?:           number;
  pricePerDay?:     number;
  priceMonthly?:    number;
  images:           File[];
  ownershipProof:   File[];
}

export interface StepProps {
  formData:    PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
  errors:      Record<string, string>;
}

// ─── Rent Request ─────────────────────────────────────────────────────────────
export type RentRequestState =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELLED"
  | "PAYMENT_PENDING"
  | "PAID"
  | "REFUNDED";

export interface RentRequest {
  request_id:     string;
  property_id:    number;
  renter_id:      string;
  renting_type:   "DAY" | "MONTH";
  request_state:  RentRequestState;
  total_price:    number;
  check_in_date:  string;
  check_out_date: string;
  created_at:     string;
  property_name?: string;
  owner_id?:      string;
  perspective?:   "SENT" | "RECEIVED";
}

// ─── Lease ────────────────────────────────────────────────────────────────────
export interface Lease {
  lease_id:          string;
  request_id:        string;
  property_id:       number;
  renter_id:         string;
  owner_id:          string;
  renting_type:      "DAY" | "MONTH";
  status:            "UPCOMING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED" | "OVERDUE";
  check_in_date:     string;
  check_out_date:    string;
  next_billing_date: string | null;
}

// ─── Notification ─────────────────────────────────────────────────────────────
export interface Notification {
  notification_id:   string;
  sender:            string;
  receiver:          string;
  event_type:        string;   
  notification_title: string;  
  notification_body:  string;  
  metadata:          Record<string, any>;
  viewed:            boolean;
  created_at:        string;
}

// ─── User Profile ─────────────────────────────────────────────────────────────
export interface UserProfile {
  first_name:  string;
  second_name: string;
  email:       string;
  is_online:   boolean;
  is_verified: boolean;
}
