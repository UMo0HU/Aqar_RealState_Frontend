import type { FC } from "react"
import { type StepProps } from "@/types/index"
import LocationPickerField from "./LocationPickerField"

const LocationStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 relative z-50">
      <h2 className="text-base font-semibold text-gray-700">Property Location</h2>

      <LocationPickerField
        value={formData.location}
        latitude={formData.latitude}
        longitude={formData.longitude}
        error={errors.location}
        inputClassName={`w-full border bg-gray-50 rounded-xl px-4 py-3 pr-28 text-sm outline-none transition
          ${errors.location ? "border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        onChange={(patch) =>
          setFormData((prev) => ({
            ...prev,
            ...patch,
          }))
        }
      />
    </div>
  )
}

export default LocationStep
