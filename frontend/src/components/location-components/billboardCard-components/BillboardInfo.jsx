import { FiCheckCircle, FiClock, FiImage, FiMapPin } from "react-icons/fi";

const statusStyles = {
  available: {
    label: "Available",
    className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: FiCheckCircle,
  },

  reserved: {
    label: "Reserved",
    className: "bg-rose-50 text-rose-700 ring-rose-200",
    icon: FiClock,
  },

  "on-hold": {
    label: "On Hold",
    className: "bg-amber-50 text-amber-700 ring-amber-200",
    icon: FiClock,
  },
};

const formatAvailableDate = (date) => {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function BillboardInfo({ location, onSelect }) {
  const status = statusStyles[location.status];
  const StatusIcon = status?.icon;

  const imageCount = location.images?.length || 0;

  const availableDate = formatAvailableDate(location.availableDate);

  return (
    <button type="button" onClick={onSelect} className="relative text-left">
      {/* Card Number */}
      {location.number != null && (
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 flex h-16 w-18.5 items-start justify-end bg-[#0a2d5d] pr-4 pt-3 text-white sm:h-18 sm:w-22 sm:pr-5 sm:pt-4"
          style={{
            clipPath: "polygon(34% 0, 100% 0, 100% 100%, 68% 100%)",
          }}
        >
          <span className="text-base font-black leading-none sm:text-xl">
            {location.number}
          </span>
        </div>
      )}

      <div className="p-3.5 sm:p-5">
        {/* Title */}
        <h3 className="line-clamp-2 pr-14 text-[15px] font-black leading-snug tracking-[-0.015em] text-[#0b1f3c] sm:pr-20 sm:text-lg lg:text-xl">
          {location.title}
        </h3>

        {/* Location */}
        <div className="mt-3 flex items-start gap-1.5 pr-1 text-[10px] font-medium leading-4 text-slate-600 sm:text-xs sm:leading-5">
          <FiMapPin className="mt-0.5 shrink-0 text-blue-600" />

          <span className="line-clamp-3">{location.location}</span>
        </div>

        {/* Description / Size */}
        {location.size && (
          <p className="mt-2.5 line-clamp-2 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
            {location.size}
          </p>
        )}

        {/* Status + Photos */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4">
          {status && StatusIcon && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${status.className}`}
            >
              <StatusIcon className="shrink-0" />
              {status.label}
            </span>
          )}

          {imageCount > 1 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-700 ring-1 ring-inset ring-blue-100 sm:px-2.5 sm:text-[10px]">
              <FiImage />
              {imageCount} photos
            </span>
          )}
        </div>

        {/* Available From */}
        {availableDate && (
          <p className="mt-2.5 text-[9px] font-semibold text-emerald-700 sm:text-[10px]">
            Available from {availableDate}
          </p>
        )}
      </div>
    </button>
  );
}
