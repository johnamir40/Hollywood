import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";

export default function BillboardGallery({ location, onSelect }) {
  const sliderRef = useRef(null);
  const dotsTimerRef = useRef(null);

  const images = location.images || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(true);

  // Hide dots automatically after 1.5 seconds
  const showDotsTemporarily = () => {
    setShowDots(true);

    if (dotsTimerRef.current) {
      clearTimeout(dotsTimerRef.current);
    }

    dotsTimerRef.current = setTimeout(() => {
      setShowDots(false);
    }, 1500);
  };

  // Hide dots after first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDots(false);
    }, 1500);

    return () => {
      clearTimeout(timer);

      if (dotsTimerRef.current) {
        clearTimeout(dotsTimerRef.current);
      }
    };
  }, []);

  const scrollToImage = (index) => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.clientWidth;

    sliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
    showDotsTemporarily();
    onSelect?.();
  };

  const handlePrevious = (event) => {
    event.stopPropagation();

    if (images.length <= 1) return;

    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    scrollToImage(newIndex);
  };

  const handleNext = (event) => {
    event.stopPropagation();

    if (images.length <= 1) return;

    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    scrollToImage(newIndex);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.clientWidth;

    if (!width) return;

    const index = Math.round(sliderRef.current.scrollLeft / width);

    if (index !== activeIndex) {
      setActiveIndex(index);
      showDotsTemporarily();
    }
  };

  return (
    <div
      className="relative overflow-hidden bg-slate-100"
      onMouseEnter={showDotsTemporarily}
      onTouchStart={showDotsTemporarily}
    >
      {/* Images */}
      {images.length > 0 ? (
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex aspect-16/10 w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={onSelect}
              className="relative h-full min-w-full snap-center overflow-hidden"
            >
              <img
                src={image.src}
                alt={`${location.title} - ${
                  image.label || `View ${index + 1}`
                }`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex aspect-16/10 items-center justify-center bg-slate-100">
          <div className="text-center text-slate-400">
            <FiImage className="mx-auto text-3xl" />

            <p className="mt-2 text-xs font-semibold">No image available</p>
          </div>
        </div>
      )}

      {/* Image Counter */}
      {images.length > 0 && (
        <div className="absolute right-3 top-3 z-20 rounded-full bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold text-white shadow backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* Previous Arrow */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous billboard image"
          className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b2d5c]/90 text-white shadow-lg transition hover:bg-blue-600"
        >
          <FiChevronLeft />
        </button>
      )}

      {/* Next Arrow */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next billboard image"
          className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b2d5c]/90 text-white shadow-lg transition hover:bg-blue-600"
        >
          <FiChevronRight />
        </button>
      )}

      {/* Bottom Label */}
      {images.length > 0 && (
        <div className="absolute bottom-2 left-1/2 z-20 flex max-w-[88%] -translate-x-1/2 items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-[9px] font-bold text-white shadow-lg backdrop-blur-sm">
          {/* الكلام يفضل ظاهر */}
          <span className="max-w-32.5 truncate">
            {images[activeIndex]?.label || location.location || "Billboard"}
          </span>

          {/* الـ slider dots فقط تختفي */}
          {images.length > 1 && (
            <div
              className={`flex items-center gap-1 overflow-hidden transition-all duration-300 ${
                showDots
                  ? "max-w-24 opacity-100"
                  : "pointer-events-none max-w-0 opacity-0"
              }`}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    scrollToImage(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
