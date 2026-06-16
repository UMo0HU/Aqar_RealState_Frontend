import { resolveImageUrl } from "@/services/propertyService";
import type { Property } from "@/types";

/**
 * Maps a raw API response → typed Property.
 * Single source of truth — import this everywhere, never define it locally.
 */
export const mapProperty = (prop: any): Property => ({
  propertyId:        prop.property_id,
  ownerId:           prop.owner_id,
  propertyName:      prop.property_name,
  propertyDesc:      prop.property_desc,
  location:          prop.location,
  latitude:          prop.latitude  ? Number(prop.latitude)  : undefined,
  longitude:         prop.longitude ? Number(prop.longitude) : undefined,
  pricingUnit:       prop.pricing_unit,
  priceValue:        Number(prop.price_value)   || 0,
  pricePerDay:       Number(prop.price_per_day) || Number(prop.price_value) || 0,
  size:              String(prop.size ?? ""),
  bedroomsNumber:    Number(prop.bedrooms_no)   || 0,
  bedsNumber:        Number(prop.beds_no)        || 0,
  bathroomsNumber:   Number(prop.bathrooms_no)  || 0,
  images:            (prop.images          ?? []).map(resolveImageUrl),
  ownershipProof:    (prop.ownership_proofs ?? []).map(resolveImageUrl),
  isAvailable:       !!prop.is_available,
  isVerified:        !!prop.is_verified,
  is_furnished:      !!prop.is_furnished,
  isSponsored:       !!prop.is_sponsored,
  property_type:     prop.property_type,
  listingStatus:     prop.listing_status ?? "inactive",
  listingExpiry:     prop.listing_expiry ?? null,
  rate:              Number(prop.rate) || 0,
  owner_first_name:  prop.owner_first_name,
  owner_second_name: prop.owner_second_name,
  owner_email:       prop.owner_email,
});
