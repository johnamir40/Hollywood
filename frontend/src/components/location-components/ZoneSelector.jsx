import { FiArrowRight, FiMapPin } from "react-icons/fi";

export default function ZoneSelector({
  zones,
  activeZone,
  onSelectZone,
  counts,
}) {
  return (
    <section className="border-b border-blue-100 bg-white px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              Choose a zone
            </p>

            <h2 className="mt-2 font-Merr text-2xl font-bold text-[#0b1f3c] sm:text-3xl">
              Explore the network by area
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onSelectZone("all")}
            className={`w-fit rounded-xl px-4 py-2.5 text-sm font-bold transition ${
              activeZone === "all"
                ? "bg-[#0b2d5c] text-white"
                : "border border-blue-100 bg-blue-50 text-[#0b2d5c] hover:border-blue-300"
            }`}
          >
            Show all zones
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {zones.map((zone) => {
            const active = activeZone === zone.id;

            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => onSelectZone(zone.id)}
                className={`group relative min-h-36 overflow-hidden rounded-2xl text-left shadow-[0_12px_32px_rgba(15,49,93,0.12)] transition duration-300 hover:-translate-y-1 sm:min-h-42 lg:min-h-52 ${
                  active ? "ring-2 ring-blue-500 ring-offset-2" : ""
                }`}
              >
                {zone.image ? (
                  <img
                    src={zone.image}
                    alt={zone.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0b2d5c]" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#06152f]/95 via-[#06152f]/35 to-transparent" />

                <div className="relative flex h-full min-h-36 flex-col justify-end p-3.5 sm:min-h-42 sm:p-4 lg:min-h-52 lg:p-5">
                  <div className="mb-auto flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm sm:text-xs">
                      <FiMapPin />

                      {counts[zone.id] || 0}
                    </span>

                    <FiArrowRight className="text-lg text-white transition group-hover:translate-x-1" />
                  </div>

                  <h3 className="text-sm font-bold leading-tight text-white sm:text-base lg:text-xl">
                    {zone.name}
                  </h3>

                  {zone.subtitle && (
                    <p className="mt-1 hidden text-xs text-slate-200 sm:block lg:text-sm">
                      {zone.subtitle}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
