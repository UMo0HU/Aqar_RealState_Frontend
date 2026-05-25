import type { FC } from "react";
import { type StepProps } from "@/types/index";
import NumberInput from "./NumberInput";
import PriceInput from "./PriceInput";
import SellingPlanSelector from "./SellingPlanSelector";

const BasicInfoStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const update = <K extends keyof typeof formData>(field: K, value: (typeof formData)[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isRent = formData.property_type === "for_rent";
  const isSell = formData.property_type === "for_sale";

  return (
    <div className="space-y-6">

      {/* Property Title */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-700">Property Title</h2>
        <input
          type="text"
          placeholder="e.g., Luxury Penthouse in Downtown District"
          value={formData.propertyName}
          onChange={(e) => update("propertyName", e.target.value)}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition
            ${errors.propertyName ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        />
        {errors.propertyName && <p className="text-red-500 text-xs">{errors.propertyName}</p>}

        {/* Asking Price */}
        {isSell && (
          <div className="space-y-4 pt-2">
            <label className="text-sm font-semibold text-gray-700">Asking Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">EGP</span>
              <input
                type="number"
                min={0}
                placeholder="0.00"
                value={formData.price ?? ""}
                onChange={(e) => update("price", Number(e.target.value))}
                className={`w-full border bg-gray-50 rounded-xl pl-14 pr-4 py-3 text-sm outline-none transition
                  ${errors.price ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
              />
            </div>
            {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}

            <SellingPlanSelector
              value={formData.sellingPlan}
              onChange={(value) => update("sellingPlan", value)}
              error={errors.sellingPlan}
              helperText="Your selling plan is saved during property creation, then becomes payable after the property passes admin verification."
            />
          </div>
        )}

        {/* Rent Configuration */}
        {isRent && (
          <div className="space-y-4 pt-2">
            <label className="text-sm font-semibold text-gray-700">Rent Configuration</label>
            {errors.pricingUnit && <p className="text-red-500 text-xs">{errors.pricingUnit}</p>}

            <div className="grid min-[480px]:grid-cols-2 gap-4">
              {(["DAY", "MONTH"] as const).map((unit) => (
                <label
                  key={unit}
                  className={`flex flex-col gap-3 border rounded-xl p-4 cursor-pointer transition
                    ${formData.pricingUnit === unit
                      ? "border-dark-knight bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pricingUnit"
                      value={unit}
                      checked={formData.pricingUnit === unit}
                      onChange={() => {
                        update("pricingUnit", unit);
                        update(unit === "DAY" ? "priceMonthly" : "pricePerDay", undefined);
                      }}
                      className="accent-gray-800"
                    />
                    <span className="text-sm font-semibold">
                      {unit === "DAY" ? "Daily" : "Monthly"}
                    </span>
                  </div>

                  {formData.pricingUnit === unit && (
                    <PriceInput
                      placeholder={unit === "DAY" ? "Price /day" : "Price /month"}
                      value={unit === "DAY" ? formData.pricePerDay : formData.priceMonthly}
                      onChange={(val) =>
                        update(unit === "DAY" ? "pricePerDay" : "priceMonthly", val)
                      }
                      error={unit === "DAY" ? errors.pricePerDay : errors.priceMonthly}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Furnished Checkbox */}
        <label className="flex items-center my-5 gap-3 cursor-pointer w-fit">
          <input
            type="checkbox"
            className="sr-only"
            checked={formData.is_furnished}
            onChange={() => update("is_furnished", !formData.is_furnished)}
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition
              ${formData.is_furnished
                ? "bg-dark-knight border-dark-knight"
                : "border-gray-300 bg-white"
              }`}
          >
            {formData.is_furnished && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-sm font-semibold text-gray-700">Furnished</span>
        </label>

        {/* Number Inputs Grid */}
        <div className={`grid gap-4 ${formData.is_furnished ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
          <NumberInput
            label="Bedrooms"
            value={formData.bedroomsNumber}
            onChange={(val) => update("bedroomsNumber", val)}
            error={errors.bedroomsNumber}
          />
          <NumberInput
            label="Bathrooms"
            value={formData.bathroomsNumber}
            onChange={(val) => update("bathroomsNumber", val)}
            error={errors.bathroomsNumber}
          />
          {formData.is_furnished && (
            <NumberInput
              label="Beds"
              value={formData.bedsNumber}
              onChange={(val) => update("bedsNumber", val)}
              error={errors.bedsNumber}
            />
          )}
          <NumberInput
            label="Size (m²)"
            value={formData.size}
            onChange={(val) => update("size", val)}
            error={errors.size}
          />
        </div>
      </div>

      {/* Property Description */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-2">
        <label className="text-sm font-semibold text-gray-700">Property Description</label>
        <textarea
          placeholder="Describe your property: location highlights, nearby amenities, special features..."
          value={formData.propertyDesc}
          onChange={(e) => update("propertyDesc", e.target.value)}
          rows={5}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition resize-none
            ${errors.propertyDesc ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        />
        {errors.propertyDesc && <p className="text-red-500 text-xs">{errors.propertyDesc}</p>}
      </div>

    </div>
  );
};

export default BasicInfoStep;
