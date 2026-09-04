import { Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

import MoviePoster from "../films-components/MoviePoster";
import TrailerPanel from "../films-components/TrailerPanel";

export default function MovieHeader({ movie }) {
  const scrollToOverview = (e) => {
    e.preventDefault();

    document.getElementById("overview")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[#f8fbff]">
      <div
        className="absolute inset-0 opacity-40 blur-3xl"
        style={{
          backgroundImage: `radial-gradient(circle at 72% 30%, ${movie.palette.via}, transparent 35%), radial-gradient(circle at 15% 80%, ${movie.palette.from}, transparent 34%)`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/30 via-[#f8fbff]/80 to-[#f8fbff]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <Link
          to="/films#all-movies"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 transition hover:text-blue-600"
        >
          <FiArrowLeft />
          All Movies
        </Link>

        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              {movie.status}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="text-blue-600" />
              {movie.year}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FiClock className="text-blue-600" />
              {movie.duration}
            </span>

            <span>{movie.rating}</span>
          </div>

          <h1 className="mt-3 font-Merr text-4xl font-bold leading-none text-[#0b2345] sm:text-5xl lg:text-6xl">
            {movie.title}
          </h1>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs text-slate-700 shadow-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-2.5 lg:h-95 lg:grid-cols-[minmax(220px,0.28fr)_minmax(0,1fr)]">
          <MoviePoster movie={movie} media />
          <TrailerPanel movie={movie} />
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-blue-100 pt-5 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            {movie.logline}
          </p>

          <a
            href="#overview"
            onClick={scrollToOverview}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-[#0b2345]"
          >
            Read the story
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
