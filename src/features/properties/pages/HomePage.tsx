import { useEffect, useState, useMemo } from "react";
import { useNavigate }                  from "react-router-dom";

import HomeCard          from "@/features/properties/components/HomeCard";
import NavBar            from "@/features/properties/components/NavBar";
import PropertiesSection from "@/features/properties/components/PropertiesSection";
import PropertyCard      from "@/features/properties/components/PropertyCard";
import SearchBar         from "@/features/properties/components/SearchBar";
import LoadingSkeleton   from "@/features/properties/components/LoadingSkeleton";
import RecommendedPropertiesRow from "@/features/properties/components/RecommendedPropertiesRow";

import { HOME_CARDS, PROPERTIES_SECTIONS } from "@/features/properties/data";
import { getProperties }  from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { useFavIds }      from "@/hooks/useFavIds";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { mapProperty }    from "@/utils/mapProperty";
import type { Property }  from "@/types/index";

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

const HomePage = () => {
  const navigate = useNavigate();
  const [favIds, setFavIds] = useFavIds();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    getProperties()
      .then((res) => {
        const mapped = (res.data as unknown[])
          .map(mapProperty)
          .filter((p: Property) => isPubliclyVisibleProperty(p));
        setProperties(mapped);
        console.log(res);
      })
      .catch(() => setProperties([]))
      .finally(() => setLoading(false));
  }, []);

  // Shuffled slices are computed ONCE when properties loads, then frozen.
  // favIds changes (from heart toggles) will NOT trigger a re-shuffle because
  // favIds is not listed as a dependency here.
  const forSale     = useMemo(() => sortPropertiesWithLocalSponsorship(shuffle(properties.filter((p) => p.property_type === "for_sale")), "general").slice(0, 4), [properties]);
  const forRent     = useMemo(() => sortPropertiesWithLocalSponsorship(shuffle(properties.filter((p) => p.property_type === "for_rent")), "rental").slice(0, 4), [properties]);
  const featuredMix = useMemo(() => sortPropertiesWithLocalSponsorship(shuffle(properties)).slice(0, 4), [properties]);
  const recommendationSeed = featuredMix[0]?.propertyId ?? properties[0]?.propertyId ?? null;

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(251,251,251,0.2)_0%,rgba(15,23,42,0.2)_89.9%),linear-gradient(#0F172A,#0F172A)]">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-[450px] gap-y-5 text-center px-4">
          <h1 className="text-white md:text-7xl text-5xl font-extrabold leading-tight">
            Find your <span className="text-amber-300">dream home</span>
          </h1>
          <p className="text-xl text-white/80">
            Explore properties for sale and rent across Egypt.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* ── Feature cards ───────────────────────────────────────────────── */}
      <ul className="relative -mt-24 w-full max-w-6xl mx-auto px-4 grid gap-5 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {HOME_CARDS.map((c) => (
          <HomeCard key={c.title} {...c} />
        ))}
      </ul>

      {/* ── Property sections ───────────────────────────────────────────── */}
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <RecommendedPropertiesRow
            seedPropertyId={recommendationSeed}
            title="Recommended for You"
            description="AI-picked listings based on similar available properties."
          />

          {PROPERTIES_SECTIONS.map((sec) => {
            const t    = sec.sectionTitle.toLowerCase();
            const data = t.includes("sale") || t.includes("sell")
              ? forSale
              : t.includes("rent")
                ? forRent
                : featuredMix;

            return (
              <div key={sec.sectionTitle}>
                <PropertiesSection {...sec} />
                <div className="w-10/12 max-w-[1250px] mx-auto my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                  {data.length > 0 ? (
                    data.map((p) => (
                      <PropertyCard
                        key={p.propertyId}
                        property={p}
                        isFav={favIds.has(p.propertyId)}
                        onFavChange={handleFavChange}
                      />
                    ))
                  ) : (
                    <p className="col-span-4 text-center text-gray-400 py-10">
                      No properties available at the moment.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default HomePage;
