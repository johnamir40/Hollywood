import { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useMovies } from "../../store";
export default function AllMovies() {
  const { movies, getMovies, loading, error } = useMovies();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (loading) {
    return <div className="py-20 text-center">Loading movies...</div>;
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load movies.
      </div>
    );
  }
  return (
    <section
      id="all-movies"
      className="relative scroll-mt-20 overflow-hidden bg-linear-to-br from-white via-[#f8faff] to-[#eef5ff] px-4 py-10 text-[#0b1b3a] sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl sm:-right-32 sm:-top-32 sm:h-72 sm:w-72" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-[11px] sm:tracking-[0.18em]">
              Our Productions
            </p>

            <h2 className="mt-1.5 font-Merr text-2xl font-bold leading-tight text-[#0b1b3a] sm:mt-2 sm:text-3xl lg:text-4xl">
              All Movies
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
            Select a movie to view its story, production status, cast, crew,
            trailer and gallery.
          </p>
        </div>

        {/* Responsive movies grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-7 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.slug} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
