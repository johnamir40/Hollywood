import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BillboardGallery({ location, onSelect }) {
  const carouselRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  const images = location.images?.length ? location.images : [];

  const scrollToImage = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const safeIndex = Math.max(0, Math.min(index, images.length - 1));

    carousel.scrollTo({
      left: safeIndex * carousel.clientWidth,
      behavior: "smooth",
    });

    setActiveImage(safeIndex);
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel || !carousel.clientWidth) return;

    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);

    if (nextIndex !== activeImage) {
      setActiveImage(nextIndex);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#eef3f8]">
      {images.length > 0 ? (
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={`${location.id}-${index}`}
              type="button"
              onClick={onSelect}
              className="relative w-full shrink-0 snap-center bg-[#eef3f8] text-left"
              aria-label={`Select ${location.title}, image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={`${location.title} — ${image.label}`}
                className="block h-auto w-full"
                loading="lazy"
              />

              {images.length > 1 && (
                <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/25 bg-[#06152b]/80 px-2.5 py-1 text-[9px] font-bold text-white shadow-sm backdrop-blur-md sm:bottom-3 sm:left-3 sm:text-[10px]">
                  {image.label}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center text-xs text-slate-500">
          No image available
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToImage(activeImage - 1)}
            disabled={activeImage === 0}
            aria-label="Previous billboard photo"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07162f]/80 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-[#07162f] disabled:cursor-default disabled:opacity-25 sm:h-9 sm:w-9"
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            onClick={() => scrollToImage(activeImage + 1)}
            disabled={activeImage === images.length - 1}
            aria-label="Next billboard photo"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07162f]/80 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-[#07162f] disabled:cursor-default disabled:opacity-25 sm:h-9 sm:w-9"
          >
            <FiChevronRight />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-[#06152b]/65 px-2 py-1.5 backdrop-blur-md sm:bottom-3">
            {images.map((_, index) => (
              <button
                key={`dot-${location.id}-${index}`}
                type="button"
                onClick={() => scrollToImage(index)}
                aria-label={`Show billboard photo ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeImage === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>

          <span className="absolute right-2.5 top-2.5 z-10 rounded-full border border-white/15 bg-[#06152b]/75 px-2 py-1 text-[9px] font-bold text-white shadow-sm backdrop-blur-md sm:right-3 sm:top-3 sm:text-[10px]">
            {activeImage + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
