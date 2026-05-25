import type { Property, PropertyListingStatus } from "@/types";

export const isSaleListingActive = (property: Property) =>
  property.property_type !== "for_sale" || property.listingStatus === "active";

export const isPubliclyVisibleProperty = (property: Property) => {
  if (!property.isVerified || !property.isAvailable) return false;
  return isSaleListingActive(property);
};

export const getSaleListingLabel = (status: PropertyListingStatus) => {
  switch (status) {
    case "active":
      return "Active";
    case "under_negotiation":
      return "Under Negotiation";
    case "sold":
      return "Sold";
    case "expired":
      return "Expired";
    case "inactive":
    default:
      return "Inactive";
  }
};

export const getSaleListingTone = (status: PropertyListingStatus) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "under_negotiation":
      return "bg-amber-100 text-amber-800";
    case "sold":
      return "bg-slate-200 text-slate-700";
    case "expired":
      return "bg-red-100 text-red-700";
    case "inactive":
    default:
      return "bg-gray-100 text-gray-600";
  }
};
