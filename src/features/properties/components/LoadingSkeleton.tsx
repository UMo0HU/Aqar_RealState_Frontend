// Shimmer overlay — slides across each skeleton card
const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-white/50 to-transparent" />
);

// One skeleton card that mirrors the real PropertyCard structure
const SkeletonCard = () => (
  <div className="flex flex-col h-full bg-white shadow-xl rounded-xl overflow-hidden">

    {/* Image placeholder */}
    <div className="relative w-full h-52 bg-gray-200 overflow-hidden shrink-0">
      <Shimmer />
      {/* Badge placeholder */}
      <div className="absolute top-2.5 left-2.5 w-16 h-5 rounded-full bg-gray-300" />
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 gap-3 p-3">

      {/* Title — two lines */}
      <div className="space-y-1.5">
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden w-full">
          <Shimmer />
        </div>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden w-3/4">
          <Shimmer />
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <Shimmer />
        </div>
        <div className="relative h-3.5 bg-gray-200 rounded-full overflow-hidden w-2/3">
          <Shimmer />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`relative h-3.5 bg-gray-200 rounded-full overflow-hidden ${n === 3 ? "col-span-2 w-1/2" : ""}`}
          >
            <Shimmer />
          </div>
        ))}
      </div>

      {/* Price — pinned to bottom */}
      <div className="mt-auto pt-3 border-t border-gray-100 space-y-1.5">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden w-1/4">
          <Shimmer />
        </div>
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden w-2/3">
          <Shimmer />
        </div>
      </div>

    </div>
  </div>
);

// ─── Exported component ───────────────────────────────────────────────────────
// `count` lets callers control how many skeletons to show (default 8)
const LoadingSkeleton = ({ count = 8 }: { count?: number }) => (
  <>
    {/* Subtle label above the grid */}
    <div className="w-10/12 max-w-[1250px] mx-auto mt-16 mb-4 flex items-center gap-3">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-amber-300 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-400 font-medium">Loading properties…</p>
    </div>

    <div className="w-10/12 max-w-[1250px] mx-auto mb-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </>
);

export default LoadingSkeleton;