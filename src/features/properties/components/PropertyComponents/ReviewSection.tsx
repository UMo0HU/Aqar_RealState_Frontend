import { useState } from "react";
import type { Property } from "@/types/index";

interface Props {
  property: Property;
}

export default function ReviewsSection({ property }: Props) {
  // Stars helper
  const fullStars  = Math.floor(property.rate ?? 0);
  const hasHalf    = (property.rate ?? 0) - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const [stars] = useState(() => [
    ...Array(fullStars).fill("full"),
    ...(hasHalf ? ["half"] : []),
    ...Array(emptyStars).fill("empty"),
  ]);

  const renderStar = (type: string, i: number) => {
    if (type === "full")  return <span key={i} className="text-yellow-400 text-2xl">★</span>;
    if (type === "half")  return <span key={i} className="text-yellow-300 text-2xl">★</span>;
    return                       <span key={i} className="text-gray-300 text-2xl">★</span>;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Ratings &amp; Reviews</h2>

      {property.rate != null ? (
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">
            {Number(property.rate).toFixed(1)}
          </span>
          <div className="flex">{stars.map(renderStar)}</div>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No ratings yet.</p>
      )}
    </div>
  );
}
