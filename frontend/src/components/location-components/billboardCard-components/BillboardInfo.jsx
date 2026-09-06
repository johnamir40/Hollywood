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
    <button
      type="button"
      onClick={onSelect}
      className="relative flex w-full flex-1 flex-col bg-white p-3 text-left sm:p-4"
    >
      {/* Billboard Number */}
      {location.number != null && (
        <div className="absolute right-0 top-0 z-10">
          <div className="flex h-16 w-14 items-start justify-end bg-[#0b2d5c] px-3 pt-2 text-base font-bold text-white [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] sm:h-20 sm:w-16 sm:text-lg">
            {location.number}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="pr-10 text-sm font-bold leading-5 text-[#0b1f3c] whitespace-normal wrap-break-word sm:pr-12 sm:text-base sm:leading-6">
        {location.title}
      </h3>

      {/* Location */}
      {location.location && (
        <div className="mt-3 flex items-start gap-1.5 text-[10px] leading-4 text-slate-600 sm:text-xs sm:leading-5">
          <FiMapPin className="mt-0.5 shrink-0 text-blue-600" />

          <span className="whitespace-normal wrap-break-word">
            {location.location}
          </span>
        </div>
      )}

      {/* Size */}
      {location.size && (
        <p className="mt-3 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
          {location.size}
        </p>
      )}

      {/* Status + Photos */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {status && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${status.className}`}
          >
            {StatusIcon && <StatusIcon className="shrink-0" />}

            {status.label}
          </span>
        )}

        {imageCount > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-600 ring-1 ring-inset ring-blue-100 sm:px-2.5 sm:text-[10px]">
            <FiImage />
            {imageCount} photo
            {imageCount === 1 ? "" : "s"}
          </span>
        )}
      </div>

      {/* Available From */}
      {availableDate && (
        <p className="mt-3 text-[10px] font-semibold text-slate-500 sm:text-xs">
          Available from{" "}
          <span className="font-bold text-[#0b1f3c]">{availableDate}</span>
        </p>
      )}
    </button>
  );
}
