import type { FC } from "react";

import {
  SELLING_PLAN_OPTIONS,
  formatSellingPlanLabel,
} from "@/services/listingSubscriptionService";
import type { SellingPlanMonths } from "@/types";

interface Props {
  value?: SellingPlanMonths;
  onChange?: (value: SellingPlanMonths) => void;
  error?: string;
  disabled?: boolean;
  helperText?: string;
  title?: string;
}

const SellingPlanSelector: FC<Props> = ({
  value,
  onChange,
  error,
  disabled = false,
  helperText,
  title = "Selling Plan",
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm font-semibold text-gray-700">{title}</label>
      {value && (
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
          {formatSellingPlanLabel(value)}
        </span>
      )}
    </div>

    <div className="grid gap-3 min-[560px]:grid-cols-3">
      {SELLING_PLAN_OPTIONS.map((plan) => {
        const active = value === plan.months;

        return (
          <button
            key={plan.months}
            type="button"
            disabled={disabled}
            onClick={() => onChange?.(plan.months)}
            className={`rounded-2xl border p-4 text-left transition ${
              active
                ? "border-dark-knight bg-gray-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-gray-900">{plan.label}</span>
              <span className="text-xs font-semibold text-amber-600">
                EGP {plan.amount.toLocaleString()}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">{plan.description}</p>
          </button>
        );
      })}
    </div>

    {helperText && <p className="text-xs leading-relaxed text-gray-500">{helperText}</p>}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default SellingPlanSelector;
