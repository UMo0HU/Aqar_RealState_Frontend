import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

import NavBar          from "@/features/properties/components/NavBar";
import PropertyCard    from "@/features/properties/components/PropertyCard";
import LoadingSkeleton from "@/features/properties/components/LoadingSkeleton";
import SearchBar       from "@/features/properties/components/SearchBar";

import { getProperties }  from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { useFavIds }      from "@/hooks/useFavIds";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { mapProperty }    from "@/utils/mapProperty";
import type { Property }  from "@/types";

export default function PropertiesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = (searchParams.get("type") ?? "for_rent") as "for_sale" | "for_rent";

  const [favIds, setFavIds] = useFavIds();

  const [all,     setAll]     = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProperties()
      .then((res) => {
        const mapped = (res.data as unknown[])
          .map(mapProperty)
          .filter((p: Property) => isPubliclyVisibleProperty(p));
        setAll(mapped);
      })
      .catch(() => setAll([]))
      .finally(() => setLoading(false));
  }, []);

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  const displayed = sortPropertiesWithLocalSponsorship(
    all.filter((p) => p.property_type === type),
  );

  const isRent = type === "for_rent";
  const title  = isRent ? "Rental Properties" : "Properties for Sale";

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-8 space-y-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 font-medium transition inline-flex items-center gap-1">
              ← Back to Home
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-500 text-sm mt-1">
                  {isRent
                    ? "Flexible stays for daily, monthly, and long-term rentals"
                    : "Discover homes and investments ready for ownership"}
                </p>
              </div>

              <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                {(["for_rent", "for_sale"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSearchParams({ type: t })}
                    className={`px-5 py-2 text-sm font-bold transition
                      ${type === t ? "bg-dark-knight text-white" : "text-gray-500 hover:bg-gray-50"}`}
                  >
                    {t === "for_rent" ? "For Rent" : "For Sale"}
                  </button>
                ))}
              </div>
            </div>

            <SearchBar
              onSearch={(q) => {
                if (!q.trim()) return;
                navigate(`/search?mode=smart&q=${encodeURIComponent(q.trim())}`);
              }}
              placeholder={`Search ${isRent ? "rentals" : "properties for sale"}…`}
            />
          </div>

          {loading && <LoadingSkeleton count={8} />}

          {!loading && (
            <p className="text-sm text-gray-500 mb-6">
              {displayed.length > 0 && (
                <>Found <strong className="text-gray-900">{displayed.length}</strong> propert{displayed.length !== 1 ? "ies" : "y"}</>
              )}
            </p>
          )}

          {!loading && displayed.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">{isRent ? "🏠" : "🏡"}</p>
              <p className="text-xl font-bold text-gray-700">
                No {isRent ? "rental" : "sale"} properties available right now.
              </p>
            </div>
          )}

          {!loading && displayed.length > 0 && (
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {displayed.map((p) => (
                <PropertyCard
                  key={p.propertyId}
                  property={p}
                  isFav={favIds.has(p.propertyId)}
                  onFavChange={handleFavChange}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
