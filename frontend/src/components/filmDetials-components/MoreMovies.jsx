import { Link } from "react-router-dom";
import MovieCard from "../films-components/MovieCard";
import { useMovies } from "../../store";

export default function MoreMovies({ movie }) {
  const movies = useMovies((state) => state.movies);

  const otherMovies = movies.filter((item) => item.slug !== movie.slug);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              Keep exploring
            </p>

            <h2 className="mt-2 font-Merr text-2xl font-bold text-[#0b2345]">
              More from Hollywood
            </h2>
          </div>

          <Link
            to="/films#all-movies"
            className="hidden text-xs font-bold text-blue-600 transition hover:text-[#0b2345] sm:block"
          >
            View all movies
          </Link>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherMovies.map((item) => (
            <MovieCard key={item.slug} movie={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
