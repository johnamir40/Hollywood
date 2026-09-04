import { FiArrowDown, FiFilm } from "react-icons/fi";
import MovieCard from "../components/films-components/MovieCard";
// import film from "../assets/Films imgs/films.png";
import AllMovies from "../components/films-components/AllMovies";
import FilmMain from "../components/films-components/FilmMain";

export default function Films() {
  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      <FilmMain />
      <AllMovies />
    </main>
  );
}
