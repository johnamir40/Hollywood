import film2 from "../../assets/FilmsImgs/films2.png";
import { FiArrowDown, FiFilm } from "react-icons/fi";

export default function FilmMain() {
  const scrollToMovies = () => {
    document.getElementById("all-movies")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="
    relative isolate flex min-h-140 w-full overflow-hidden
    bg-[#030812] bg-size-[auto_78%] bg-position-[50%_top] bg-no-repeat
    sm:min-h-160 sm:bg-cover sm:bg-center
    lg:min-h-[calc(100svh-76px)]
  "
      style={{
        backgroundImage: `url(${film2})`,
      }}
    >
      {/* Responsive dark overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(2,7,16,0.30)_0%,rgba(2,7,16,0.10)_30%,rgba(2,7,16,0.78)_68%,rgba(2,7,16,0.98)_100%)]
          sm:bg-[linear-gradient(to_bottom,rgba(2,7,16,0.28)_0%,rgba(2,7,16,0.06)_35%,rgba(2,7,16,0.72)_70%,rgba(2,7,16,0.97)_100%)]
          lg:bg-[linear-gradient(to_bottom,rgba(2,7,16,0.25)_0%,rgba(2,7,16,0.02)_42%,rgba(2,7,16,0.65)_70%,rgba(2,7,16,0.96)_100%)]
        "
      />

      {/* Hero content */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-7xl flex-1
          flex-col justify-between
          px-4 py-5
          sm:px-6 sm:py-7
          lg:px-8 lg:py-9
        "
      >
        {/* Badge */}
        <div>
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/20
              bg-black/45 px-3 py-2
              backdrop-blur-md
              sm:px-4 sm:py-2.5
              lg:gap-3 lg:px-5 lg:py-3
            "
          >
            <FiFilm className="text-sm text-sky-400 sm:text-base lg:text-lg" />

            <span
              className="
                text-[9px] font-bold uppercase
                tracking-[0.14em] text-white
                sm:text-[11px] sm:tracking-[0.18em]
                lg:text-xs lg:tracking-[0.22em]
              "
            >
              Hollywood Original Films
            </span>
          </div>
        </div>

        {/* Bottom content */}
        <div
          className="
            grid w-full items-end gap-4
            sm:gap-5
            lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.9fr)_auto]
            lg:gap-7
          "
        >
          <h1
            className="
              max-w-150
              font-bold leading-[0.95]
              tracking-[-0.04em] text-white
              text-[clamp(2.25rem,11vw,3rem)]
              sm:text-[3.5rem]
              lg:text-6xl
            "
          >
            <span className="block">Stories made for</span>
            <span className="mt-1.5 block text-sky-400 sm:mt-2">
              the big screen.
            </span>
          </h1>

          <p
            className="
              max-w-130
              text-sm leading-6 text-slate-300
              sm:text-base sm:leading-7
              lg:max-w-107.5
            "
          >
            Discover Hollywood&apos;s upcoming original films, stories in
            development, and future releases in one cinematic catalogue.
          </p>

          <button
            type="button"
            onClick={scrollToMovies}
            className="
              group inline-flex w-full items-center justify-center
              gap-2.5 rounded-xl bg-blue-600
              px-5 py-3 text-sm font-bold text-white
              shadow-[0_14px_35px_rgba(37,99,235,0.30)]
              transition duration-300
              hover:-translate-y-1 hover:bg-blue-500
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-blue-400
              sm:w-fit sm:px-6 sm:py-3.5 sm:text-base
              lg:justify-self-end lg:px-7
            "
          >
            Explore all movies
            <FiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
