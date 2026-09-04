import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import MovieHeader from "../components/filmDetials-components/MovieHeader";
import FilmOverview from "../components/filmDetials-components/FilmOverview";
import Cast from "../components/filmDetials-components/Cast";
import MoreMovies from "../components/filmDetials-components/MoreMovies";

import { useMovies } from "../store";

export default function FilmDetails() {
  const { movieSlug } = useParams();

  const { movies, getMovies, loading, error, hasFetched } = useMovies();

  useEffect(() => {
    if (!hasFetched && !loading) {
      getMovies();
    }
  }, [hasFetched, loading, getMovies]);

  if (!hasFetched || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading movie...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Failed to load movie.
      </div>
    );
  }

  const movie = movies.find((item) => item.slug === movieSlug);

  if (!movie) {
    return <Navigate to="/films" replace />;
  }

  return (
    <main className="min-h-screen bg-white text-[#0b2345]">
      <MovieHeader movie={movie} />

      <FilmOverview movie={movie} />

      <Cast movie={movie} />

      <MoreMovies movie={movie} />
    </main>
  );
}
