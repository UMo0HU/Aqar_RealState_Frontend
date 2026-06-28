import { useState } from "react";

export interface FilterValues {
  location?: string;
  propertyType?: "for_rent" | "for_sale";
  minPrice?: number;
  maxPrice?: number;
  pricingUnit?: "DAY" | "MONTH";
  bedrooms?: number;
  bathrooms?: number;
  minSize?: number;
  maxSize?: number;
  furnished?: boolean;
}

interface Props {
  initial: FilterValues;
  onApply: (filters: FilterValues) => void;
  onClear: () => void;
}

const BEDROOM_OPTIONS = [
  { label: "Any", value: undefined },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5+", value: 5 },
] as const;

const BATHROOM_OPTIONS = [
  { label: "Any", value: undefined },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
] as const;

const btnBase =
  "rounded-lg px-3 py-2 text-sm font-semibold transition cursor-pointer";
const btnActive   = "bg-dark-knight text-white";
const btnInactive = "bg-gray-100 text-gray-600 hover:bg-gray-200";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-dark-knight transition";

const labelClass = "mb-1 block text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap";

export default function SearchFilterPanel({ initial, onApply, onClear }: Props) {
  const [location, setLocation] = useState(initial.location ?? "");
  const [propertyType, setPropertyType] = useState<"for_rent" | "for_sale">(
    initial.propertyType ?? "for_rent",
  );
  const [pricingUnit, setPricingUnit] = useState<"DAY" | "MONTH">(
    initial.pricingUnit ?? "MONTH",
  );
  const [minPrice, setMinPrice] = useState(initial.minPrice ?? "");
  const [maxPrice, setMaxPrice] = useState(initial.maxPrice ?? "");
  const [bedrooms, setBedrooms] = useState<number | undefined>(initial.bedrooms);
  const [bathrooms, setBathrooms] = useState<number | undefined>(initial.bathrooms);
  const [minSize, setMinSize] = useState(initial.minSize ?? "");
  const [maxSize, setMaxSize] = useState(initial.maxSize ?? "");
  const [furnished, setFurnished] = useState(initial.furnished ?? false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filters: FilterValues = {
      propertyType,
      pricingUnit,
      furnished: furnished || undefined,
    };

    if (location.trim()) filters.location = location.trim();
    if (minPrice !== "") filters.minPrice = Number(minPrice);
    if (maxPrice !== "") filters.maxPrice = Number(maxPrice);
    if (bedrooms !== undefined) filters.bedrooms = bedrooms;
    if (bathrooms !== undefined) filters.bathrooms = bathrooms;
    if (minSize !== "") filters.minSize = Number(minSize);
    if (maxSize !== "") filters.maxSize = Number(maxSize);

    onApply(filters);
  };

  const handleClear = () => {
    setLocation("");
    setPropertyType("for_rent");
    setPricingUnit("MONTH");
    setMinPrice("");
    setMaxPrice("");
    setBedrooms(undefined);
    setBathrooms(undefined);
    setMinSize("");
    setMaxSize("");
    setFurnished(false);
    onClear();
  };

  const isSale = propertyType === "for_sale";
  const priceLabel = isSale ? "Price (EGP)" : `Price Range (${pricingUnit === "MONTH" ? "monthly" : "per day"})`;

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Filters</h3>
        <button type="button" onClick={handleClear} className="text-xs text-gray-400 hover:text-red-500 transition cursor-pointer">
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap items-end gap-x-5 gap-y-4">
        {/* Property Type */}
        <div>
          <label className={labelClass}>Type</label>
          <div className="flex gap-1">
            <button type="button" onClick={() => setPropertyType("for_rent")}
              className={`${btnBase} ${propertyType === "for_rent" ? btnActive : btnInactive}`}>
              For Rent
            </button>
            <button type="button" onClick={() => setPropertyType("for_sale")}
              className={`${btnBase} ${propertyType === "for_sale" ? btnActive : btnInactive}`}>
              For Sale
            </button>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className={labelClass}>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
            placeholder="City or area…" className={`${inputClass} min-w-40`} />
        </div>

        {/* Price Range */}
        <div>
          <label className={labelClass}>{priceLabel}</label>
          <div className="flex items-center gap-2">
            <input type="number" min={0} value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)} placeholder="Min"
              className={`${inputClass} w-24`} />
            <span className="text-gray-400">—</span>
            <input type="number" min={0} value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max"
              className={`${inputClass} w-24`} />
          </div>
          {!isSale && (
            <div className="mt-1 flex gap-2">
              <button type="button" onClick={() => setPricingUnit("MONTH")}
                className={`rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer ${
                  pricingUnit === "MONTH"
                    ? "bg-dark-knight text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                /month
              </button>
              <button type="button" onClick={() => setPricingUnit("DAY")}
                className={`rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer ${
                  pricingUnit === "DAY"
                    ? "bg-dark-knight text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                /day
              </button>
            </div>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label className={labelClass}>Bedrooms</label>
          <select value={bedrooms ?? ""}
            onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : undefined)}
            className={`${inputClass} min-w-[90px]`}>
            {BEDROOM_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className={labelClass}>Bathrooms</label>
          <select value={bathrooms ?? ""}
            onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : undefined)}
            className={`${inputClass} min-w-[90px]`}>
            {BATHROOM_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Size */}
        <div>
          <label className={labelClass}>Size (m&sup2;)</label>
          <div className="flex items-center gap-2">
            <input type="number" min={0} value={minSize}
              onChange={(e) => setMinSize(e.target.value)} placeholder="Min"
              className={`${inputClass} w-20`} />
            <span className="text-gray-400">—</span>
            <input type="number" min={0} value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)} placeholder="Max"
              className={`${inputClass} w-20`} />
          </div>
        </div>

        {/* Furnished */}
        <div>
          <label className={labelClass}>&nbsp;</label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={furnished}
              onChange={(e) => setFurnished(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-dark-knight accent-dark-knight" />
            <span className="text-sm text-gray-700 font-medium whitespace-nowrap">Furnished only</span>
          </label>
        </div>

        {/* Apply button */}
        <div>
          <label className={labelClass}>&nbsp;</label>
          <button type="submit"
            className="rounded-lg bg-dark-knight px-5 py-2 text-sm font-bold text-white hover:opacity-90 transition cursor-pointer whitespace-nowrap">
            Apply Filters
          </button>
        </div>
      </div>
    </form>
  );
}
