import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavBar          from "@/features/properties/components/NavBar";
import PropertyCard    from "@/features/properties/components/PropertyCard";
import LoadingSkeleton from "@/features/properties/components/LoadingSkeleton";
import SearchBar       from "@/features/properties/components/SearchBar";

import { mapProperty }   from "@/utils/mapProperty";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { useFavIds }     from "@/hooks/useFavIds";
import type { Property } from "@/types";
import { searchAiProperties } from "@/services/aiService";
import { getProperties } from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { getApiErrorMessage } from "@/utils/apiError";
import { useToast } from "@/context/ToastContext";

export default function SearchPropertiesPage() {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();
  const toast          = useToast();
  const toastRef       = useRef(toast);
  const query          = searchParams.get("q") ?? "";

  const [favIds, setFavIds] = useFavIds();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState<string | null>(null);
  const [draftQuery, setDraftQuery] = useState(query);

  useEffect(() => {
    toastRef.current = toast;
  }, [toast]);

  useEffect(() => {
    setDraftQuery(query);
  }, [query]);

  useEffect(() => {
    if (!query.trim()) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperties([]);

    const runSearch = async () => {
      try {
        const aiResults = await searchAiProperties(query);
        if (cancelled) return;

        setProperties(sortPropertiesWithLocalSponsorship(aiResults.filter((p) => isPubliclyVisibleProperty(p))));
      } catch (aiError) {
        if (cancelled) return;

        toastRef.current.error(getApiErrorMessage(aiError, "AI search is unavailable. Showing matching listings instead."));

        try {
          const fallback = await getProperties({ location: query });
          if (cancelled) return;

          setProperties(sortPropertiesWithLocalSponsorship(
            (fallback.data as unknown[])
              .map(mapProperty)
              .filter((p: Property) => isPubliclyVisibleProperty(p)),
          ));
        } catch (fallbackError) {
          if (cancelled) return;
          setError(
            axios.isAxiosError(fallbackError)
              ? getApiErrorMessage(fallbackError, "Search failed. Please try again.")
              : "Search failed. Please check your connection and try again.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    runSearch();

    return () => {
      cancelled = true;
    };
  }, [query]);

  const handleSearch = useCallback((q: string) => {
    const nextQuery = q.trim();
    if (!nextQuery) {
      navigate("/search");
      return;
    }
    if (nextQuery === query) return;
    navigate(`/search?q=${encodeURIComponent(nextQuery)}`);
  }, [navigate, query]);

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
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-8 space-y-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 font-medium transition inline-flex items-center gap-1">
              ← Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Results for: <span className="text-amber-500">"{query}"</span>
            </h1>
            <div className="flex justify-start">
              <SearchBar
                value={draftQuery}
                onQueryChange={setDraftQuery}
                onSearch={handleSearch}
                onDebouncedSearch={handleSearch}
                debounceMs={400}
                placeholder="Describe what you want…"
              />
            </div>
          </div>

          {loading && <LoadingSkeleton />}

          {!loading && error && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">⚠️</p>
              <p className="text-xl font-bold text-gray-700">{error}</p>
              <button onClick={() => handleSearch(query)} className="mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && properties.length === 0 && query && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">🔍</p>
              <p className="text-xl font-bold text-gray-700">No properties found for "{query}"</p>
              <p className="text-gray-400 text-sm">Try different keywords or browse all listings.</p>
              <Link to="/" className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
                Browse All Properties
              </Link>
            </div>
          )}

          {!loading && !error && properties.length > 0 && (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Found <strong className="text-gray-900">{properties.length}</strong> propert{properties.length !== 1 ? "ies" : "y"}
              </p>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                {properties.map((p) => (
                  <PropertyCard
                    key={p.propertyId}
                    property={p}
                    isFav={favIds.has(p.propertyId)}
                    onFavChange={handleFavChange}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}
