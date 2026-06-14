import { useCallback, useEffect, useState } from "react";
import { useParams }           from "react-router-dom";

import NavBar              from "@/features/properties/components/NavBar";
import PropertyGallery     from "@/features/properties/components/PropertyComponents/PropertyGallery";
import PropertyFeatures    from "@/features/properties/components/PropertyComponents/PropertyFeatures";
import PropertyDescription from "@/features/properties/components/PropertyComponents/PropertyDescription";
import ReviewsSection      from "@/features/properties/components/PropertyComponents/ReviewSection";
import MortgageCalculator  from "@/features/properties/components/PropertyComponents/MortgageCalculator";
import BookingSidebar      from "@/features/properties/components/PropertyComponents/BookingSidebar";
import OwnerPanel          from "@/features/properties/components/PropertyComponents/OwnerPanel";
import PropertyLocationMap from "@/features/properties/components/PropertyComponents/PropertyLocationMap";
import RecommendedPropertiesRow from "@/features/properties/components/RecommendedPropertiesRow";

import { getPropertyById } from "@/services/propertyService";
import { mapProperty }     from "@/utils/mapProperty";
import { useAuth }         from "@/context/AuthContext";
import type { Property }   from "@/types/index";

const PropertyPage = () => {
  const { id }                   = useParams<{ id: string }>();
  const { userInfo }             = useAuth();
  const [property, setProperty]  = useState<Property | null>(null);
  const [loading,  setLoading]   = useState(true);
  const [error,    setError]     = useState<string | null>(null);

  const loadProperty = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getPropertyById(id);
      setProperty(mapProperty(res.data));
    } catch {
      setError("Property not found or failed to load.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  if (loading) return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  if (error || !property) return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <p className="text-2xl font-semibold text-gray-700">{error ?? "Property not found."}</p>
        <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to listings</a>
      </div>
    </>
  );

  // Owner sees management panel; anyone else sees the booking sidebar
  const isOwner = !!userInfo && userInfo.id === property.ownerId;

  return (
    <>
      <NavBar />
      <div className="pb-16">

        <PropertyGallery imagesList={property.images} />

        <div className="w-[90%] max-w-7xl mx-auto mt-8 flex flex-col min-[1050px]:flex-row gap-8 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-8">
            <PropertyFeatures    property={property} />
            <PropertyDescription property={property} />
            <PropertyLocationMap
              latitude={property.latitude}
              longitude={property.longitude}
              location={property.location}
            />
            <ReviewsSection
              property={property}
              onReviewSubmitted={loadProperty}
            />
            <RecommendedPropertiesRow
              seedPropertyId={property.propertyId}
              excludePropertyId={property.propertyId}
              title="Similar Properties"
              description="AI matches with nearby fit and listing details."
            />
            <MortgageCalculator property={property} />
          </div>

          {/* Sidebar — owner gets management panel, visitors get booking sidebar */}
          <div className="w-full min-[1050px]:w-[360px] min-[1050px]:shrink-0">
            {isOwner
              ? <OwnerPanel   property={property} />
              : <BookingSidebar property={property} />
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default PropertyPage;
