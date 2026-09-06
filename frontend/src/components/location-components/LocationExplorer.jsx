import { useMemo, useState } from "react";
import {
  FiFilter,
  FiGrid,
  FiList,
  FiMap,
  FiMapPin,
  FiNavigation,
  FiX,
} from "react-icons/fi";

import BillboardCard from "./BillboardCard";

const statusFilters = [
  { id: "all", label: "All" },
  { id: "available", label: "Available" },
  { id: "reserved", label: "Reserved" },
  { id: "on-hold", label: "On Hold" },
];

const getMapTarget = (location) => {
  if (!location) return "Cairo Egypt";

  return location.coordinates
    ? `${location.coordinates.lat},${location.coordinates.lng}`
    : location.mapQuery || location.location || "Cairo Egypt";
};

const getMapSrc = (location) => {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    getMapTarget(location),
  )}&output=embed`;
};

const getGoogleMapsUrl = (location) => {
  if (!location) return "#";

  // Use the actual Google Maps link from Strapi
  if (location.googleMapsUrl) {
    return location.googleMapsUrl;
  }

  // Fallback if no link was added in Strapi
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    getMapTarget(location),
  )}`;
};

export default function LocationExplorer({
  zones,
  billboardLocations,
  activeZone,
  onSelectZone,
}) {
  const [mobileColumns, setMobileColumns] = useState(2);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [mobileMapOpen, setMobileMapOpen] = useState(false);

  // Filter by Zone + Status
  const filteredLocations = useMemo(() => {
    return billboardLocations.filter((location) => {
      const zoneMatches = activeZone === "all" || location.zone === activeZone;

      const statusMatches =
        statusFilter === "all" || location.status === statusFilter;

      return zoneMatches && statusMatches;
    });
  }, [billboardLocations, activeZone, statusFilter]);

  // Selected billboard
  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedId) ??
    filteredLocations[0] ??
    null;

  // Get current Zone information from Strapi zones
  const activeZoneData = zones.find((zone) => zone.id === activeZone);

  const zoneLabel =
    activeZone === "all" ? "All zones" : activeZoneData?.name || "All zones";

  const mapSrc = getMapSrc(selectedLocation);

  const googleMapsUrl = getGoogleMapsUrl(selectedLocation);

  const handleShowMap = (location) => {
    setSelectedId(location.id);
    setMobileMapOpen(true);
  };

  return (
    <section
      id="location-explorer"
      className="scroll-mt-20 bg-linear-to-br from-white via-[#f8faff] to-[#edf4ff] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading + Filters */}
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              <FiMap />
              Location explorer
            </p>

            <h2 className="mt-2 font-Merr text-2xl font-bold text-[#0b1f3c] sm:text-3xl lg:text-4xl">
              {zoneLabel}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Each separately rentable billboard has its own card. Swipe the
              card image to see every supplied photo angle, including
              other-direction views of that same billboard.
            </p>
          </div>

          {/* Status Filters */}
          <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2 px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              <FiFilter />
              Status
            </div>

            <div className="flex flex-wrap gap-2">
              {statusFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setStatusFilter(filter.id)}
                  className={`rounded-xl px-3 py-2 text-xs font-bold transition sm:px-4 ${
                    statusFilter === filter.id
                      ? "bg-[#0b2d5c] text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] lg:items-start">
          {/* Billboard Cards */}
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-600">
                <span className="font-bold text-[#0b1f3c]">
                  {filteredLocations.length}
                </span>{" "}
                billboard
                {filteredLocations.length === 1 ? "" : "s"}
              </p>

              <div className="flex items-center gap-2">
                {/* Mobile view selector */}
                <div className="flex rounded-lg border border-blue-100 bg-white p-1 md:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileColumns(1)}
                    aria-label="Show one card per row"
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                      mobileColumns === 1
                        ? "bg-[#0b2d5c] text-white"
                        : "text-slate-500 hover:bg-blue-50"
                    }`}
                  >
                    <FiList />
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileColumns(2)}
                    aria-label="Show two cards per row"
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                      mobileColumns === 2
                        ? "bg-[#0b2d5c] text-white"
                        : "text-slate-500 hover:bg-blue-50"
                    }`}
                  >
                    <FiGrid />
                  </button>
                </div>

                {activeZone !== "all" && (
                  <button
                    type="button"
                    onClick={() => onSelectZone("all")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    Clear zone
                  </button>
                )}
              </div>
            </div>
            {filteredLocations.length > 0 ? (
              <div
                className={`grid gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-2 ${
                  mobileColumns === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {filteredLocations.map((location) => (
                  <BillboardCard
                    key={location.id}
                    location={location}
                    selected={selectedLocation?.id === location.id}
                    onSelect={() => setSelectedId(location.id)}
                    onShowMap={() => handleShowMap(location)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-center shadow-sm">
                <h3 className="font-bold text-[#0b1f3c]">
                  No matching billboards
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  No billboard is currently available with this selected status.
                </p>

                <button
                  type="button"
                  onClick={() => setStatusFilter("all")}
                  className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500"
                >
                  Show all statuses
                </button>
              </div>
            )}
          </div>

          {/* Desktop Map */}
          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_20px_55px_rgba(15,49,93,0.12)]">
              <div className="relative h-107.5 bg-slate-100 xl:h-117.5">
                {selectedLocation ? (
                  <iframe
                    key={mapSrc}
                    title={`${selectedLocation.title} map`}
                    src={mapSrc}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-slate-500">
                    Select a billboard to view the map.
                  </div>
                )}
              </div>

              <div className="border-t border-blue-100 p-5">
                {selectedLocation ? (
                  <>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                      <FiMapPin />
                      Selected billboard
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#0b1f3c]">
                      {selectedLocation.title}
                    </h3>

                    {selectedLocation.images?.length > 1 && (
                      <p className="mt-1 text-xs font-bold text-blue-600">
                        {selectedLocation.images.length} supplied photo views
                      </p>
                    )}

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedLocation.location}
                    </p>

                    {selectedLocation.googleMapsUrl && (
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
                      >
                        <FiNavigation />
                        Open in Google Maps
                      </a>
                    )}
                  </>
                ) : (
                  <div className="py-2 text-sm text-slate-600">
                    Choose a billboard to see it on the map.
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Map Popup */}
      {mobileMapOpen && selectedLocation && (
        <div
          className="fixed inset-0 z-100 flex items-end bg-slate-950/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedLocation.title} map`}
          onClick={() => setMobileMapOpen(false)}
        >
          <div
            className="flex max-h-[88dvh] w-full max-w-lg flex-col overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-blue-100 px-4 py-4">
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-xs">
                  <FiMapPin />
                  Billboard location
                </p>

                <div className="mt-1 flex min-w-0 items-center gap-2">
                  <h3 className="truncate text-base font-bold text-[#0b1f3c] sm:text-lg">
                    {selectedLocation.location}
                  </h3>
                </div>

                <p className="mt-1 line-clamp-1 text-xs text-slate-500 sm:text-sm">
                  {selectedLocation.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMobileMapOpen(false)}
                aria-label="Close map"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200"
              >
                <FiX />
              </button>
            </div>

            <div className="relative min-h-90 flex-1 bg-slate-100 sm:min-h-107.5">
              <iframe
                key={`mobile-${mapSrc}`}
                title={`${selectedLocation.title} mobile map`}
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {selectedLocation.googleMapsUrl && (
              <div className="border-t border-blue-100 bg-white p-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  <FiNavigation />
                  Open in Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
