export default function MoviePoster({ movie, compact = false, media = false }) {
  const hasPoster = Boolean(movie.poster);

  return (
    <div
      className={`relative isolate overflow-hidden bg-slate-950 shadow-2xl ${
        compact
          ? "aspect-2/3 rounded-2xl"
          : media
            ? "aspect-2/3 rounded-3xl lg:h-full lg:aspect-auto"
            : "aspect-2/3 rounded-3xl"
      }`}
      style={
        !hasPoster
          ? {
              backgroundImage: `linear-gradient(
                145deg,
                ${movie.palette.from},
                ${movie.palette.via} 50%,
                ${movie.palette.to}
              )`,
            }
          : undefined
      }
    >
      {/* Real poster from Strapi */}
      {hasPoster && (
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

      {/* Decoration only when there is no poster */}
      {!hasPoster && (
        <>
          <div className="absolute -right-16 top-14 h-44 w-44 rounded-full border border-white/15" />
          <div className="absolute -right-8 top-22 h-28 w-28 rounded-full border border-white/10" />
        </>
      )}

      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
        Hollywood Original
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color: movie.palette.accent }}
        >
          {/* {movie.status} */}
        </p>

        <h3
          className={`mt-3 font-Merr font-bold leading-tight text-white ${
            compact ? "text-2xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {/* {movie.title} */}
        </h3>

        {movie.posterLabel && (
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-white/50">
            {movie.posterLabel}
          </p>
        )}
      </div>
    </div>
  );
}
