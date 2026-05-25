import { useState, type FC } from "react";
import Swiper from "@/features/properties/components/PropertyComponents/Swiper";

const PropertyGallery: FC<{ imagesList: string[] }> = ({ imagesList }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const imgs = imagesList.length > 0
    ? imagesList
    : ["https://placehold.co/900x420?text=No+Images"];

  const count = imgs.length;

  return (
    <>
      <div className="w-[90%] mx-auto my-10 rounded-2xl overflow-hidden">

        {/* ── 1 image ─────────────────────────────────────────────────── */}
        {count === 1 && (
          <img
            src={imgs[0]}
            onClick={() => setOpenIndex(0)}
            className="w-full h-[420px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
            alt="property"
          />
        )}

        {/* ── 2 images: side by side ──────────────────────────────────── */}
        {count === 2 && (
          <div className="grid grid-cols-2 gap-1.5 h-[420px]">
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setOpenIndex(i)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt={`property-${i}`}
              />
            ))}
          </div>
        )}

        {/* ── 3 images: 1 large left + 2 stacked right ───────────────── */}
        {count === 3 && (
          <div className="grid grid-cols-3 gap-1.5 h-[420px]">
            {/* Main image — spans 2 cols, needs a wrapper to contain properly */}
            <div className="col-span-2 overflow-hidden">
              <img
                src={imgs[0]}
                onClick={() => setOpenIndex(0)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt="property-0"
              />
            </div>

            {/* Right column — each thumbnail in its own flex-1 wrapper */}
            <div className="flex flex-col gap-1.5 min-h-0">
              {imgs.slice(1, 3).map((img, i) => (
                <div key={i} className="flex-1 min-h-0 overflow-hidden">
                  <img
                    src={img}
                    onClick={() => setOpenIndex(i + 1)}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                    alt={`property-${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 4+ images: 1 large left + up to 3 stacked right ────────── */}
        {count >= 4 && (
          <div className="grid grid-cols-3 gap-1.5 h-[420px]">
            <div className="col-span-2 overflow-hidden">
              <img
                src={imgs[0]}
                onClick={() => setOpenIndex(0)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt="property-main"
              />
            </div>

            <div className="flex flex-col gap-1.5 min-h-0">
              {imgs.slice(1, 4).map((img, i) => {
                const isLast = i === 2 && count > 4;
                return (
                  <div
                    key={i}
                    className="relative flex-1 min-h-0 overflow-hidden cursor-pointer"
                    onClick={() => setOpenIndex(i + 1)}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:opacity-95 transition-opacity"
                      alt={`property-${i + 1}`}
                    />
                    {isLast && (
                      <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          +{count - 4} more
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Swiper
          images={imgs}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default PropertyGallery;