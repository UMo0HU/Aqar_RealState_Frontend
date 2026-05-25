import { useState } from "react";
import type { Property } from "@/types/index";

interface Props {
  property: Property;
}

const LIMIT = 300;

export default function PropertyDescription({ property }: Props) {
  const [readMore, setReadMore] = useState(false);

  const description = property.propertyDesc ?? "";
  const isTruncatable = description.length > LIMIT;
  const displayedText = !readMore && isTruncatable
    ? description.slice(0, LIMIT) + "..."
    : description;

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-3">
      <h2 className="text-xl font-semibold">About this property</h2>

      <p className="text-gray-600 whitespace-pre-wrap">{displayedText}</p>

      {isTruncatable && (
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="text-blue-600 font-medium hover:underline transition cursor-pointer"
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
