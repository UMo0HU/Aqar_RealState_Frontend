import { useState, useRef, type FC } from "react";

type Props = {
  images:     string[];
  startIndex: number;
  onClose:    () => void;
};

const Swiper: FC<Props> = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  // ── Touch swipe ───────────────────────────────────────────────────────────
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {        // 40px threshold
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-2 sm:p-4">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-6 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-red-500 font-black text-lg shadow cursor-pointer transition"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={images[index]}
          alt={`Property image ${index + 1}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="w-full rounded-xl object-cover
            h-[55vw]          
            min-h-[200px]     
            max-h-[75vh]      
            sm:h-[420px]      
            md:h-[520px]      
          "
        />

        {/* Prev arrow */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2
            bg-white/80 hover:bg-white shadow rounded-full cursor-pointer transition
            p-1.5 sm:p-3"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2
            bg-white/80 hover:bg-white shadow rounded-full cursor-pointer transition
            p-1.5 sm:p-3"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Counter + dot indicators */}
        <div className="mt-2 flex flex-col items-center gap-1.5">
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            {index + 1} / {images.length}
          </p>
          {images.length > 1 && images.length <= 12 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all cursor-pointer
                    ${i === index
                      ? "w-4 h-1.5 bg-dark-knight"
                      : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Swiper;