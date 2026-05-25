import { useRef, type FC } from "react";

interface Props {
  /** Label shown at the top e.g. "Property Photos" */
  title:       string;
  /** Minimum count required */
  minCount:    number;
  /** URLs already on the server that are still kept */
  keptUrls:    string[];
  /** New File objects the user picked */
  newFiles:    File[];
  /** Accept string for file input e.g. "image/*" or "image/*,.pdf" */
  accept:      string;
  /** Upload zone hint e.g. "JPG, PNG, WEBP" */
  hint:        string;
  /** Icon SVG path(s) for the drop zone icon */
  iconType:    "photo" | "document";
  onRemoveUrl: (url: string)   => void;
  onAddFiles:  (files: File[]) => void;
  onRemoveNew: (index: number) => void;
}

const PhotoIcon = () => (
  <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 16l4-4 4 4 4-6 4 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocIcon = () => (
  <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
    <path d="M14 2v6h6M12 12v6M9 15l3-3 3 3" strokeLinecap="round"/>
  </svg>
);

const ImageGalleryEditor: FC<Props> = ({
  title, minCount,
  keptUrls, newFiles, accept, hint, iconType,
  onRemoveUrl, onAddFiles, onRemoveNew,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const total    = keptUrls.length + newFiles.length;
  const met      = total >= minCount;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-700">{title}</h3>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {total} / {minCount} min
        </span>
      </div>

      {/* Current files */}
      {keptUrls.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">Current — hover to remove</p>
          {iconType === "photo" ? (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {keptUrls.map((url, i) => (
                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200">
                  <img src={url} alt={`current-${i}`} className="w-full h-full object-cover" />
                  <button type="button"
                    onClick={() => onRemoveUrl(url)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer">
                    <span className="w-7 h-7 bg-red-500 rounded-full text-white text-sm font-bold flex items-center justify-center">✕</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {keptUrls.map((url, i) => (
                <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-xl p-3">
                  <img src={url} alt={`doc-${i}`} className="w-10 h-10 object-cover rounded-lg shrink-0 border border-gray-100" />
                  <p className="flex-1 text-xs font-medium text-gray-600 truncate">Document {i + 1}</p>
                  <button type="button"
                    onClick={() => onRemoveUrl(url)}
                    className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Drop zone */}
      <div onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center gap-2 border-2 border-dashed border-gray-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl p-5 cursor-pointer transition">
        {iconType === "photo" ? <PhotoIcon /> : <DocIcon />}
        <p className="text-sm font-semibold text-gray-600">Add new files</p>
        <p className="text-xs text-gray-400">{hint}</p>
        <input ref={inputRef} type="file" multiple accept={accept}
          onChange={(e) => {
            if (!e.target.files) return;
            onAddFiles(Array.from(e.target.files));
            e.target.value = "";
          }}
          className="hidden" />
      </div>

      {/* New files preview */}
      {newFiles.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">New — to be uploaded</p>
          {iconType === "photo" ? (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {newFiles.map((file, i) => (
                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border-2 border-green-300">
                  <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                  <button type="button" onClick={() => onRemoveNew(i)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer">
                    <span className="w-7 h-7 bg-red-500 rounded-full text-white text-sm font-bold flex items-center justify-center">✕</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {newFiles.map((file, i) => (
                <div key={i} className="flex items-center gap-3 border-2 border-green-200 rounded-xl p-3">
                  {file.type.startsWith("image/") ? (
                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-10 h-10 object-cover rounded-lg shrink-0 border border-gray-100"/>
                  ) : (
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0 border border-red-100">
                      <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                  <p className="flex-1 text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <button type="button" onClick={() => onRemoveNew(i)}
                    className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryEditor;