import type { FC } from "react";

interface Props {
  label: string;
  value: number;
  onChange: (val: number) => void;
  error?: string;
}

const NumberInput: FC<Props> = ({ label, value, onChange, error }) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {label}
    </label>
    <input
      type="number"
      min={0}
      placeholder="0"
      value={value || ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition
        ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default NumberInput;