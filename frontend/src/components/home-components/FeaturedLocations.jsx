import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useLocations } from "../../store";

export default function FeaturedLocations() {
  const zones = useLocations((state) => state.zones);
  const loading = useLocations((state) => state.loading);
  const error = useLocations((state) => state.error);
  const getLocations = useLocations((state) => state.getLocations);

  useEffect(() => {
    if (zones.length === 0) {
      getLocations();
    }
  }, [zones.length, getLocations]);

  const featuredLocations = [...zones].sort(
    (a, b) => (a.sortOrder || 0) - (b.sortOrder || 0),
  );

  return (
    <section className="relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden bg-white px-6 py-16 lg:px-10 lg:py-10">
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Explore Our Network
            </p>

            <h2 className="font-Merr text-4xl font-bold text-[#0b1f3c] md:text-5xl">
              Featured Locations
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              Discover selected advertising locations that provide maximum
              visibility for your brand.
            </p>
          </div>

          <Link
            to="/locations"
            className="group inline-flex w-fit items-center gap-3 font-bold text-blue-600 transition hover:text-blue-800"
          >
            View All Locations
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        {loading && zones.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            Loading locations...
          </div>
        )}

        {error && zones.length === 0 && (
          <div className="py-16 text-center text-red-500">
            Failed to load locations.
          </div>
        )}

        {!loading && !error && featuredLocations.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No locations available.
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredLocations.map((location) => (
            <Link
              key={location.documentId || location.slug}
              to={`/locations?zone=${location.slug}`}
              className="group block h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition duration-500 group-hover:-translate-y-2 group-hover:border-blue-300 group-hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]">
                <div className="relative h-44 overflow-hidden xl:h-52">
                  {location.image ? (
                    <img
                      src={location.image}
                      alt={location.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200" />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-[#0b1f3c]/60 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0b2f6b] shadow-sm backdrop-blur-md">
                    Prime Location
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <FiMapPin />
                    Egypt
                  </div>

                  <h3 className="text-xl font-bold text-[#0b1f3c] xl:text-2xl">
                    {location.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {location.billboardType}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-blue-100 pt-4 font-semibold text-[#0b1f3c] transition group-hover:text-blue-600">
                    View Details
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
