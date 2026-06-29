import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavBar          from "@/features/properties/components/NavBar";
import PropertyCard    from "@/features/properties/components/PropertyCard";
import LoadingSkeleton from "@/features/properties/components/LoadingSkeleton";
import SearchBar       from "@/features/properties/components/SearchBar";
import SearchFilterPanel, { type FilterValues } from "@/features/properties/components/SearchFilterPanel";

import { mapProperty }   from "@/utils/mapProperty";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { useFavIds }     from "@/hooks/useFavIds";
import type { Property } from "@/types";
import { searchAiProperties } from "@/services/aiService";
import { getProperties } from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { getApiErrorMessage } from "@/utils/apiError";
import { useToast } from "@/context/ToastContext";

type SearchMode = "smart" | "filter";

function readMode(sp: URLSearchParams): SearchMode {
  const m = sp.get("mode");
  if (m === "smart" || m === "filter") return m;
  return sp.has("q") ? "smart" : "filter";
}

export default function SearchPropertiesPage() {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();
  const toast          = useToast();
  const toastRef       = useRef(toast);

  const mode  = readMode(searchParams);
  const query = searchParams.get("q") ?? "";

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

  // ── Smart search (AI) ─────────────────────────────────────────────────────
  useEffect(() => {
    if (mode !== "smart" || !query.trim()) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperties([]);

    const run = async () => {
      try {
        const aiResults = await searchAiProperties(query);
        if (cancelled) return;
        setProperties(sortPropertiesWithLocalSponsorship(aiResults.filter(isPubliclyVisibleProperty)));
      } catch (aiError) {
        if (cancelled) return;

        toastRef.current.error(getApiErrorMessage(aiError, "AI search is unavailable. Showing matching listings instead."));

        try {
          const fallback = await getProperties({ location: query });
          if (cancelled) return;
          setProperties(sortPropertiesWithLocalSponsorship(
            (fallback.data as unknown[])
              .map(mapProperty)
              .filter(isPubliclyVisibleProperty),
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

    run();
    return () => { cancelled = true; };
  }, [mode, query]);

  // ── Filter search (normal) ────────────────────────────────────────────────
  const hasActiveFilters = mode === "filter" && (
    searchParams.has("q") ||
    searchParams.has("bedrooms") || searchParams.has("bathrooms") ||
    searchParams.has("minSize") || searchParams.has("maxSize")
  );

  useEffect(() => {
    if (mode !== "filter" || !hasActiveFilters) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperties([]);

    const run = async () => {
      try {
        const filters: Record<string, string | number> = {};
        const q    = searchParams.get("q");
        const br   = searchParams.get("bedrooms");
        const ba   = searchParams.get("bathrooms");
        const minS = searchParams.get("minSize");
        const maxS = searchParams.get("maxSize");

        if (q)    filters.location  = q;
        if (br)   filters.bedrooms  = Number(br);
        if (ba)   filters.bathrooms = Number(ba);
        if (minS) filters.minSize   = Number(minS);
        if (maxS) filters.maxSize   = Number(maxS);

        const res = await getProperties(filters);
        if (cancelled) return;

        let filtered = (res.data as unknown[])
          .map(mapProperty)
          .filter(isPubliclyVisibleProperty);

        if (q) {
          const lower = q.toLowerCase();
          filtered = filtered.filter((p) =>
            p.propertyName.toLowerCase().includes(lower) ||
            p.propertyDesc.toLowerCase().includes(lower) ||
            p.location.toLowerCase().includes(lower),
          );
        }

        setProperties(sortPropertiesWithLocalSponsorship(filtered));
      } catch (err) {
        if (cancelled) return;
        setError(
          axios.isAxiosError(err)
            ? getApiErrorMessage(err, "Search failed. Please try again.")
            : "Search failed. Please check your connection and try again.",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [mode, searchParams, hasActiveFilters]);

  // ── Mode switching ────────────────────────────────────────────────────────
  const setMode = (next: SearchMode) => {
    const params = new URLSearchParams();
    params.set("mode", next);
    if (next === "smart" && query.trim()) {
      params.set("q", query);
    }
    navigate(`/search?${params.toString()}`, { replace: true });
  };

  // ── Smart search handler ──────────────────────────────────────────────────
  const handleSmartSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    const params = new URLSearchParams();
    params.set("mode", "smart");
    if (trimmed) params.set("q", trimmed);
    navigate(`/search?${params.toString()}`, { replace: true });
  }, [navigate]);

  // ── Filter apply / clear ──────────────────────────────────────────────────
  const handleFilterApply = useCallback((filters: FilterValues) => {
    const params = new URLSearchParams();
    params.set("mode", "filter");

    if (filters.search)    params.set("q", filters.search);
    if (filters.bedrooms)  params.set("bedrooms", String(filters.bedrooms));
    if (filters.bathrooms) params.set("bathrooms", String(filters.bathrooms));
    if (filters.minSize)   params.set("minSize", String(filters.minSize));
    if (filters.maxSize)   params.set("maxSize", String(filters.maxSize));

    const qs = params.toString();
    navigate(`/search?${qs}`, { replace: true });
  }, [navigate]);

  const handleFilterClear = useCallback(() => {
    navigate("/search?mode=filter", { replace: true });
  }, [navigate]);

  // ── Favourite toggle ──────────────────────────────────────────────────────
  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  // ── Initial values for the filter panel ───────────────────────────────────
  const initialFilters: FilterValues = {
    search:    searchParams.get("q") ?? undefined,
    bedrooms:  searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
    bathrooms: searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
    minSize:   searchParams.get("minSize") ? Number(searchParams.get("minSize")) : undefined,
    maxSize:   searchParams.get("maxSize") ? Number(searchParams.get("maxSize")) : undefined,
  };

  const showNoResults = !loading && !error && properties.length === 0 && (
    (mode === "smart" && !!query.trim()) ||
    (mode === "filter" && hasActiveFilters)
  );

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-8 space-y-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 font-medium transition inline-flex items-center gap-1">
              ← Back to Home
            </Link>

            <div className="flex gap-2">
              <button
                onClick={() => setMode("smart")}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition cursor-pointer ${
                  mode === "smart"
                    ? "bg-dark-knight text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                }`}
              >
                Smart Search
              </button>
              <button
                onClick={() => setMode("filter")}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition cursor-pointer ${
                  mode === "filter"
                    ? "bg-dark-knight text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                }`}
              >
                Filter Search
              </button>
            </div>

            {mode === "smart" && (
              <>
                <h1 className="text-2xl font-bold text-gray-900">
                  {query
                    ? <>Results for: <span className="text-amber-500">"{query}"</span></>
                    : "Smart Search"}
                </h1>
                <div className="flex justify-start">
                  <SearchBar
                    value={draftQuery}
                    onQueryChange={setDraftQuery}
                    onSearch={handleSmartSearch}
                    placeholder="Describe what you want…"
                  />
                </div>
              </>
            )}

            {mode === "filter" && (
              <>
                <h1 className="text-2xl font-bold text-gray-900">Filter Search</h1>
                <p className="text-sm text-gray-500">Refine results by keyword, price, size, and more.</p>
                  <SearchFilterPanel
                    initial={initialFilters}
                    onApply={handleFilterApply}
                    onClear={handleFilterClear}
                  />
              </>
            )}
          </div>

          {loading && <LoadingSkeleton />}

          {!loading && error && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">⚠️</p>
              <p className="text-xl font-bold text-gray-700">{error}</p>
              <button
                onClick={() => mode === "smart" ? handleSmartSearch(query) : handleFilterApply(initialFilters)}
                className="mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {showNoResults && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">🔍</p>
              <p className="text-xl font-bold text-gray-700">
                {mode === "smart"
                  ? `No properties found for "${query}"`
                  : "No properties match your filters"}
              </p>
              <p className="text-gray-400 text-sm">Try different keywords or adjust your filters.</p>
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
