import hero from "../../assets/hero/hero.png";
import Suez from "../../assets/hero/suez.jpg";
import mehwar from "../../assets/hero/mehwar.jpg";
import October from "../../assets/hero/6october.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

export default function FeaturedLocations() {
  const featuredLocations = [
    {
      id: "october",
      name: "6 October Bridge",
      type: "Premium Outdoor Billboard",
      image: October,
    },
    {
      id: "mehwar",
      name: "Mehwar 26 July",
      type: "High-Traffic Billboard",
      image: mehwar,
    },
    {
      id: "suez",
      name: "Suez Road",
      type: "Large Format Billboard",
      image: Suez,
    },
    {
      id: "other",
      name: "Other",
      type: "Outdoor Advertising",
      image: hero,
    },
  ];
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredLocations.map((location) => (
            <article
              key={location.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]"
            >
              <div className="relative h-44 overflow-hidden xl:h-52">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

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
                  {location.type}
                </p>

                <Link
                  to={`/locations?zone=${location.id}`}
                  className="group/link mt-auto flex items-center justify-between border-t border-blue-100 pt-4 font-semibold text-[#0b1f3c] transition hover:text-blue-600"
                >
                  View Details
                  <FiArrowRight className="transition group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
