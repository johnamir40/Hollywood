import { FiArrowDown, FiMapPin } from "react-icons/fi";

export default function LocationHero({ zones, billboardLocations }) {
  const billboardCount = billboardLocations.length;
  const desktopGrid =
    zones.length === 1
      ? "lg:grid-cols-1"
      : zones.length === 2
        ? "lg:grid-cols-2"
        : zones.length === 3
          ? "lg:grid-cols-3"
          : "lg:grid-cols-4";

  const scrollToExplorer = () => {
    document.getElementById("location-explorer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate flex h-105 w-full overflow-hidden bg-[#030812] sm:h-97.5 lg:h-90">
      {/* Zone images from Strapi */}
      <div className={`absolute inset-0 grid grid-cols-2 ${desktopGrid}`}>
        {zones.map((zone) => (
          <div key={zone.id} className="relative overflow-hidden">
            {zone.image ? (
              <img
                src={zone.image}
                alt={zone.name}
                className="h-full w-full object-cover opacity-85"
              />
            ) : (
              <div className="h-full w-full bg-[#0b2d5c]" />
            )}

            <div className="absolute inset-0 bg-[#07162f]/25" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,7,16,0.18)_0%,rgba(2,7,16,0.55)_55%,rgba(2,7,16,0.94)_100%)] lg:bg-[linear-gradient(to_right,rgba(2,7,16,0.93)_0%,rgba(2,7,16,0.62)_45%,rgba(2,7,16,0.3)_100%)]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-blue-600/25 blur-[120px]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2 backdrop-blur-md">
          <FiMapPin className="text-blue-400" />

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs sm:tracking-[0.22em]">
            Hollywood Outdoor Network
          </span>
        </div>

        <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.8fr)_auto] lg:gap-7">
          <h1 className="max-w-2xl font-Merr text-[2.5rem] font-bold leading-[0.92] tracking-[-0.045em] text-white sm:text-[3rem] lg:text-[3.4rem]">
            Find your next
            <span className="mt-1 block text-blue-400">
              billboard location.
            </span>
          </h1>

          <div>
            <p className="max-w-lg text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
              Explore every billboard by zone, swipe through its supplied photo
              angles, and open the location directly in Google Maps.
            </p>

            <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/20 pt-3 text-white">
              {/* Dynamic zones */}
              <div>
                <div className="text-lg font-bold">{zones.length}</div>

                <div className="text-[10px] text-slate-300">Zones</div>
              </div>

              {/* Dynamic billboards */}
              <div>
                <div className="text-lg font-bold">{billboardCount}</div>

                <div className="text-[10px] text-slate-300">Billboards</div>
              </div>

              <div>
                <div className="text-lg font-bold">Maps</div>

                <div className="text-[10px] text-slate-300">Google Maps</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToExplorer}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:w-fit lg:justify-self-end"
          >
            Explore locations
            <FiArrowDown className="transition group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
