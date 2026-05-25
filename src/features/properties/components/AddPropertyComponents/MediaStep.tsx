import { useRef, type FC } from "react";
import { type StepProps } from "@/types/index";

const MIN_IMAGES = 5;

const MediaStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...newFiles] }));
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const count     = formData.images.length;
  const remaining = Math.max(0, MIN_IMAGES - count);
  const met       = count >= MIN_IMAGES;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-800">Property Photos</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Upload high-quality photos that showcase your property at its best.
          </p>
        </div>
        {/* Requirement badge */}
        <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {met ? `✓ ${count} photos` : `${count} / ${MIN_IMAGES} min`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300
              ${met ? "bg-green-500" : "bg-amber-400"}`}
            style={{ width: `${Math.min(100, (count / MIN_IMAGES) * 100)}%` }}
          />
        </div>
        <p className="text-[11px] text-gray-400">
          {met
            ? `Great! You can add more photos to better showcase your property.`
            : `${remaining} more photo${remaining !== 1 ? "s" : ""} needed to continue.`}
        </p>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-2">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">📸 Photo Tips</p>
        <ul className="text-xs text-blue-600 space-y-1">
          <li>• Include every room — living room, bedroom(s), kitchen, bathroom(s)</li>
          <li>• Shoot during the day with natural light for best results</li>
          <li>• Add outdoor / building entrance shots</li>
          <li>• More photos = more trust from potential renters</li>
        </ul>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-8 cursor-pointer transition
          ${errors.images
            ? "border-red-300 bg-red-50 hover:border-red-400"
            : "border-gray-200 hover:border-amber-400 hover:bg-amber-50"}`}
      >
        <svg className={`w-10 h-10 ${errors.images ? "text-red-300" : "text-gray-300"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 16l4-4 4 4 4-6 4 6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
        <p className="text-sm font-semibold text-gray-600">Click to upload photos</p>
        <p className="text-xs text-gray-400">JPG, PNG, WEBP — up to 5 MB each</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {errors.images && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <span>⚠️</span> {errors.images}
        </p>
      )}

      {/* Preview grid */}
      {count > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {formData.images.map((file, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden border border-gray-200 aspect-square bg-gray-50"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover"
              />
              
              <span className="absolute top-1 left-1 w-4 h-4 bg-green-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                ✓
              </span>
    
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1 right-1 w-6 h-6 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition cursor-pointer opacity-0 group-hover:opacity-100"
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}

          {/* Empty slots to visualize how many are still needed */}
          {Array.from({ length: Math.max(0, MIN_IMAGES - count) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              onClick={() => inputRef.current?.click()}
              className="rounded-xl border-2 border-dashed border-gray-200 aspect-square flex items-center justify-center cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition"
            >
              <span className="text-gray-300 text-xl">+</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default MediaStep;