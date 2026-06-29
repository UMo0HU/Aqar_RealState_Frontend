import { useState } from "react";

export interface FilterValues {
  search?: string;
  bedrooms?: number;
  bathrooms?: number;
  minSize?: number;
  maxSize?: number;
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

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-dark-knight transition";

const labelClass = "mb-1 block text-xs font-semibold text-gray-500 uppercase tracking-wide";

export default function SearchFilterPanel({ initial, onApply, onClear }: Props) {
  const [search, setSearch] = useState(initial.search ?? "");
  const [bedrooms, setBedrooms] = useState<number | undefined>(initial.bedrooms);
  const [bathrooms, setBathrooms] = useState<number | undefined>(initial.bathrooms);
  const [minSize, setMinSize] = useState(initial.minSize ?? "");
  const [maxSize, setMaxSize] = useState(initial.maxSize ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filters: FilterValues = {};

    if (search.trim()) filters.search = search.trim();
    if (bedrooms !== undefined) filters.bedrooms = bedrooms;
    if (bathrooms !== undefined) filters.bathrooms = bathrooms;
    if (minSize !== "") filters.minSize = Number(minSize);
    if (maxSize !== "") filters.maxSize = Number(maxSize);

    onApply(filters);
  };

  const handleClear = () => {
    setSearch("");
    setBedrooms(undefined);
    setBathrooms(undefined);
    setMinSize("");
    setMaxSize("");
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
      {/* Row 1: Search bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, description, or location…"
            className={`${inputClass} pl-9`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
        </div>
        <button type="button" onClick={handleClear}
          className="text-xs text-gray-400 hover:text-red-500 transition cursor-pointer whitespace-nowrap">
          Clear
        </button>
      </div>

      {/* Row 2: Filter controls */}
      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
        {/* Size Group */}
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

        {/* Bedrooms */}
        <div>
          <label className={labelClass}>Bedrooms</label>
          <select value={bedrooms ?? ""}
            onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : undefined)}
            className={`${inputClass} min-w-[88px]`}>
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
            className={`${inputClass} min-w-[88px]`}>
            {BATHROOM_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Apply */}
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
