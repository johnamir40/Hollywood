import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import MoviePoster from "./MoviePoster";

export default function MovieCard({ movie }) {
  return (
    <article className="group min-w-0">
      <Link
        to={`/films/${movie.slug}`}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        aria-label={`View ${movie.title}`}
      >
        <div className="transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(37,99,235,0.16)]">
          <MoviePoster movie={movie} compact />
        </div>

        <div className="px-1 pb-2 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-Merr text-xl font-bold text-black transition group-hover:text-blue-500">
                {movie.title}
              </h3>
              <p className="mt-2 text-sm text-blue-500">
                {movie.year} · {movie.genres.join(" · ")}
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-white transition group-hover:border-blue-400 group-hover:bg-blue-600">
              <FiArrowUpRight />
            </span>
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
            {movie.logline}
          </p>
        </div>
      </Link>
    </article>
  );
}
