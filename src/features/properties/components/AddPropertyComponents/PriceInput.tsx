import type { FC } from "react";

interface Props {
  placeholder: string;
  value: number | undefined;
  onChange: (val: number) => void;
  error?: string;
}

const PriceInput: FC<Props> = ({ placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
        EGP
      </span>
      <input
        type="number"
        min={0}
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full border bg-white rounded-lg pl-11 pr-3 py-2 text-sm outline-none transition
          ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
      />
    </div>
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default PriceInput;