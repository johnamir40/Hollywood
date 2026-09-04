import { FiArrowUpRight, FiNavigation } from "react-icons/fi";

export default function BillboardActions({ location, onSelect, onShowMap }) {
  const mapTarget = location.coordinates
    ? `${location.coordinates.lat},${location.coordinates.lng}`
    : location.mapQuery || location.location || "Cairo Egypt";

  const googleMapsUrl =
    location.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      mapTarget,
    )}`;

  return (
    <div className="mt-auto grid grid-cols-2 border-t border-[#e5edf7] bg-[#fbfdff]">
      <button
        type="button"
        onClick={onShowMap || onSelect}
        className="inline-flex min-h-12 items-center justify-center gap-1.5 px-2 py-3 text-[10px] font-bold text-[#0b2d5c] transition hover:bg-blue-50 sm:text-xs"
      >
        <FiNavigation />
        Show on map
      </button>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-1.5 border-l border-[#e5edf7] px-2 py-3 text-[10px] font-bold text-blue-600 transition hover:bg-blue-50 sm:text-xs"
      >
        Google Maps
        <FiArrowUpRight />
      </a>
    </div>
  );
}
