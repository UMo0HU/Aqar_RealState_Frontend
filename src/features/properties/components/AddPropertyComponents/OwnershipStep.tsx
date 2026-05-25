import { useRef, type FC } from "react";
import { type StepProps } from "@/types/index";

const MIN_DOCS = 3;

const OwnershipStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, ownershipProof: [...prev.ownershipProof, ...newFiles] }));
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ownershipProof: prev.ownershipProof.filter((_, i) => i !== index),
    }));
  };

  const count     = formData.ownershipProof.length;
  const remaining = Math.max(0, MIN_DOCS - count);
  const met       = count >= MIN_DOCS;

  // Labels assigned to uploaded files in order
  const FILE_LABELS = [
    "National ID / Passport",
    "Ownership Proof",
    "Additional Document",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-800">Ownership Documents</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Reviewed privately by our compliance team — never shown publicly.
          </p>
        </div>
        <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {met ? `✓ ${count} docs` : `${count} / ${MIN_DOCS} min`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300
              ${met ? "bg-green-500" : "bg-amber-400"}`}
            style={{ width: `${Math.min(100, (count / MIN_DOCS) * 100)}%` }}
          />
        </div>
        <p className="text-[11px] text-gray-400">
          {met
            ? "Requirements met. You may add more documents if needed."
            : `${remaining} more document${remaining !== 1 ? "s" : ""} needed to continue.`}
        </p>
      </div>

      {/* What to upload */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          What to upload
        </p>

        {/* Required: ID */}
        <div className={`rounded-xl border p-3.5 space-y-1 transition
          ${count >= 1 ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪪</span>
              <span className="text-xs font-bold text-gray-700">National ID or Passport</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
              {count >= 1 ? "✓ Uploaded" : "Required"}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed pl-7">
            A clear photo of your government-issued ID (front + back) or passport bio page.
          </p>
        </div>

        {/* Required: Ownership proof — contract OR utility bill, user's choice */}
        <div className={`rounded-xl border p-3.5 space-y-2 transition
          ${count >= 2 ? "border-green-200 bg-green-50" : "border-blue-100 bg-blue-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">📋</span>
              <span className="text-xs font-bold text-gray-700">Ownership Proof</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 2 ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
              {count >= 2 ? "✓ Uploaded" : "Required — pick one"}
            </span>
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed pl-7">
            Upload <strong>one</strong> of the following — whichever you have available:
          </p>
          <div className="pl-7 grid sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-2 bg-white rounded-lg border border-blue-100 p-2.5">
              <span className="text-base">📄</span>
              <div>
                <p className="text-[11px] font-semibold text-gray-700">Property Contract</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Sale/purchase contract or title deed</p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-white rounded-lg border border-blue-100 p-2.5">
              <span className="text-base">🧾</span>
              <div>
                <p className="text-[11px] font-semibold text-gray-700">Utility Bill</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Water, electricity, or gas bill showing this address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third doc — any additional */}
        <div className={`rounded-xl border p-3.5 space-y-1 transition
          ${count >= 3 ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">📎</span>
              <span className="text-xs font-bold text-gray-700">Supporting Document</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 3 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {count >= 3 ? "✓ Uploaded" : "Required"}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed pl-7">
            Any additional document that further supports your ownership claim — another utility bill, bank statement showing the address, etc.
          </p>
        </div>
      </div>

      {/* Privacy notice */}
      <div className="flex items-start gap-2.5 bg-gray-50 border border-gray-200 rounded-xl p-3.5">
        <span className="text-lg shrink-0">🔒</span>
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Your documents are secure.</strong> They are encrypted,
          reviewed only by our verification team, and permanently deleted after approval.
          We never share them with renters or third parties.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-7 cursor-pointer transition
          ${errors.ownershipProof
            ? "border-red-300 bg-red-50 hover:border-red-400"
            : "border-gray-200 hover:border-amber-400 hover:bg-amber-50"}`}
      >
        <svg className={`w-9 h-9 ${errors.ownershipProof ? "text-red-300" : "text-gray-300"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
          <path d="M14 2v6h6M12 12v6M9 15l3-3 3 3" strokeLinecap="round"/>
        </svg>
        <p className="text-sm font-semibold text-gray-600">Click to upload documents</p>
        <p className="text-xs text-gray-400">JPG, PNG, PDF — up to 5 MB each</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {errors.ownershipProof && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <span>⚠️</span> {errors.ownershipProof}
        </p>
      )}

      {/* Uploaded file list */}
      {count > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Uploaded Files ({count})
          </p>
          {formData.ownershipProof.map((file, index) => {
            const isImage = file.type.startsWith("image/");
            const label   = FILE_LABELS[index] ?? `Additional Document ${index - 1}`;

            return (
              <div
                key={index}
                className="relative flex items-center gap-3 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition"
              >
                {isImage ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-12 h-12 object-cover rounded-lg shrink-0 border border-gray-100"
                  />
                ) : (
                  <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
                      <path d="M14 2v6h6" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(0)} KB</p>
                </div>

                  <span className="w-6 h-6 bg-green-500 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">✓</span>

                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0"
                >
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default OwnershipStep;