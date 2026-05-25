import type { FC } from "react";
import NumberInput from "@/features/properties/components/AddPropertyComponents/NumberInput";
import PriceInput  from "@/features/properties/components/AddPropertyComponents/PriceInput";
import LocationPickerField from "@/features/properties/components/AddPropertyComponents/LocationPickerField";
import type { Property } from "@/types";

const textareaCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition resize-none";
const inputCls    = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition";
const labelCls    = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5";

export interface EditInfoFormValues {
  propertyName:    string;
  propertyDesc:    string;
  location:        string;
  latitude?:       number;
  longitude?:      number;
  priceValue:      string;
  size:            string;
  bedroomsNumber:  string;
  bedsNumber:      string;
  bathroomsNumber: string;
  is_furnished:    boolean;
}

interface Props {
  property: Property;
  form:     EditInfoFormValues;
  saving:   boolean;
  onChange:    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormChange: (patch: Partial<EditInfoFormValues>) => void;
  onSubmit:    (e: React.FormEvent) => void;
  onCancel:    () => void;
}

const EditInfoForm: FC<Props> = ({
  property, form, saving, onChange, onFormChange, onSubmit, onCancel,
}) => {
  const isRent = property.property_type === "for_rent";

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <form onSubmit={onSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className={labelCls}>Property Name</label>
          <input name="propertyName" value={form.propertyName} onChange={onChange} className={inputCls} />
        </div>

        {/* Description */}
        <div>
          <label className={labelCls}>Description</label>
          <textarea name="propertyDesc" value={form.propertyDesc} onChange={onChange} rows={4} className={textareaCls} />
        </div>

        {/* Price + Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              Price (EGP)
              {isRent && (
                <span className="normal-case font-normal ml-1 text-gray-400">
                  / {property.pricingUnit === "MONTH" ? "month" : "day"}
                </span>
              )}
            </label>
            {/* Reuse PriceInput from AddProperty */}
            <PriceInput
              placeholder="0"
              value={form.priceValue ? Number(form.priceValue) : undefined}
              onChange={(val) => onFormChange({ priceValue: String(val) })}
            />
          </div>
          <div>
            {/* Reuse NumberInput from AddProperty */}
            <NumberInput
              label="Size (m²)"
              value={form.size ? Number(form.size) : 0}
              onChange={(val) => onFormChange({ size: String(val) })}
            />
          </div>
        </div>

        {/* Furnished toggle — above room counts */}
        <div>
          <label className={labelCls}>Furnished</label>
          <label className="flex items-center gap-3 cursor-pointer w-fit mt-1">
            <input
              type="checkbox"
              className="sr-only"
              checked={form.is_furnished}
              // Only toggle boolean — bedsNumber is NOT reset here
              onChange={() => onFormChange({ is_furnished: !form.is_furnished })}
            />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition
              ${form.is_furnished ? "bg-dark-knight border-dark-knight" : "border-gray-300 bg-white"}`}>
              {form.is_furnished && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {form.is_furnished ? "Yes — furnished" : "No — not furnished"}
            </span>
          </label>
          {/* Warn only if the user is about to lose beds data on save */}
          {!form.is_furnished && Number(form.bedsNumber) > 0 && (
            <p className="text-xs text-amber-600 mt-1.5">
              ⚠️ Beds count will be set to 0 when you save.
            </p>
          )}
        </div>

        {/* Room counts — beds only when furnished */}
        <div className={`grid gap-4 ${form.is_furnished ? "grid-cols-3" : "grid-cols-2"}`}>
          <NumberInput
            label="Bedrooms"
            value={form.bedroomsNumber ? Number(form.bedroomsNumber) : 0}
            onChange={(val) => onFormChange({ bedroomsNumber: String(val) })}
          />
          {form.is_furnished && (
            <NumberInput
              label="Beds"
              value={form.bedsNumber ? Number(form.bedsNumber) : 0}
              onChange={(val) => onFormChange({ bedsNumber: String(val) })}
            />
          )}
          <NumberInput
            label="Bathrooms"
            value={form.bathroomsNumber ? Number(form.bathroomsNumber) : 0}
            onChange={(val) => onFormChange({ bathroomsNumber: String(val) })}
          />
        </div>

        {/* Location picker */}
        <div className="border-t border-gray-100 pt-5 space-y-4">
          <LocationPickerField
            label="Location"
            labelClassName={labelCls}
            value={form.location}
            latitude={form.latitude}
            longitude={form.longitude}
            inputClassName={`${inputCls} pr-28`}
            onChange={(patch) => onFormChange(patch)}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving}
            className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer">
            {saving ? "Saving…" : "Save Changes"}
          </button>
          <button type="button" onClick={onCancel}
            className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditInfoForm;
