interface Props {
  value: number;
  onChange?: (value: number) => void;
  sizeClass?: string;
  readOnly?: boolean;
}

export default function StarRating({
  value,
  onChange,
  sizeClass = "text-2xl",
  readOnly = false,
}: Props) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(value);

        if (readOnly) {
          return (
            <span
              key={star}
              className={`${sizeClass} ${filled ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          );
        }

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(star)}
            className={`${sizeClass} leading-none transition hover:scale-110 cursor-pointer ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            aria-label={`Rate ${star} out of 5`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
