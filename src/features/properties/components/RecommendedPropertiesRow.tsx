import { useEffect, useRef, useState } from "react";

import PropertyCard from "@/features/properties/components/PropertyCard";
import { useToast } from "@/context/ToastContext";
import { useFavIds } from "@/hooks/useFavIds";
import { recommendSimilarProperties, getAiSessionId } from "@/services/aiService";
import type { Property } from "@/types";
import type { AIChatProperty } from "@/types/ai";
import { getApiErrorMessage } from "@/utils/apiError";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { resolveImageUrl } from "@/services/propertyService";

interface Props {
  seedPropertyId: number | string | null;
  title: string;
  description?: string;
  excludePropertyId?: number;
}

export default function RecommendedPropertiesRow({
  seedPropertyId,
  title,
  description,
  excludePropertyId,
}: Props) {
  const toast = useToast();
  const toastRef = useRef(toast);
  const [favIds, setFavIds] = useFavIds();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toastRef.current = toast;
  }, [toast]);

  useEffect(() => {
    if (!seedPropertyId) return;

    let cancelled = false;
    setLoading(true);

    const loadRecommendations = async () => {
      try {
        const results = await recommendSimilarProperties({
          property_description: description || `Context recommendations for seed item ${seedPropertyId}`,
          session_id: getAiSessionId(),
          property_ids: [Number(seedPropertyId)],
          limit: 8,
        });

        if (cancelled) return;

        const propertiesArray = results?.properties || [];

        const standardizedProperties: Property[] = propertiesArray.map((prop: AIChatProperty) => ({
          propertyId: prop.id || prop.property_id,
          ownerId: prop.owner_id || "",
          propertyName: prop.title || prop.property_name,
          propertyDesc: prop.description || prop.property_desc,
          location: prop.location,
          pricePerDay: prop.price_per_day || (prop.price ? prop.price / 30 : 0),
          priceValue: prop.price_value || prop.price,
          pricingUnit: prop.pricing_unit || "MONTH",
          size: String(prop.size),
          bedroomsNumber: prop.bedrooms || prop.bedrooms_no,
          bedsNumber: prop.beds_no || prop.bedrooms || 1,
          bathroomsNumber: prop.bathrooms || prop.bathrooms_no,
          images: Array.isArray(prop.images) ? prop.images.map(resolveImageUrl) : prop.image_url ? [resolveImageUrl(prop.image_url)] : [],
          ownershipProof: [],
          isAvailable: prop.is_available ?? true,
          isVerified: prop.is_verified ?? true,
          isVisible: prop.is_visible ?? true,
          is_furnished: prop.is_furnished ?? false,
          isSponsored: prop.is_sponsored ?? false,
          property_type: prop.property_type || "for_rent",
          listingStatus: prop.listing_status || "active",
          listingExpiry: prop.listing_expiry || null,
          rate: prop.rate || null,
          latitude: prop.latitude,
          longitude: prop.longitude,
          owner_first_name: prop.owner_first_name,
          owner_second_name: prop.owner_second_name,
          owner_email: prop.owner_email,
        }));

        setProperties(
          standardizedProperties
            .filter((property) => property.propertyId !== excludePropertyId)
            .filter(isPubliclyVisibleProperty)
            .slice(0, 8),
        );
      } catch (error) {
        if (!cancelled) {
          setProperties([]);
          toastRef.current.info(getApiErrorMessage(error, "AI recommendations are unavailable right now."));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadRecommendations();

    return () => {
      cancelled = true;
    };
  }, [excludePropertyId, seedPropertyId, description]);

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else updated.delete(propertyId);
      return updated;
    });
  };

  if (!seedPropertyId || (!loading && properties.length === 0)) return null;

  return (
    <section className="w-10/12 max-w-[1250px] mx-auto my-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-5 text-sm font-semibold text-gray-500">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
          Finding matches...
        </div>
      ) : (
        <div className="flex gap-5 overflow-x-auto pb-4">
          {properties.map((property) => (
            <div key={property.propertyId} className="w-[280px] shrink-0">
              <PropertyCard
                property={property}
                isFav={favIds.has(property.propertyId)}
                onFavChange={handleFavChange}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}