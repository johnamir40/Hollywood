import { FiImage, FiUsers } from "react-icons/fi";

export default function Cast({ movie }) {
  const actors = movie?.actors || [];
  const gallery = movie?.gallery || [];

  return (
    <section className="border-y border-blue-100 bg-[#edf4ff] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* CAST */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_12px_35px_rgba(15,35,69,0.06)]">
          <div className="flex items-center gap-2">
            <FiUsers className="text-xl text-blue-600" />

            <h2 className="font-Merr text-xl font-bold text-[#0b2345]">Cast</h2>
          </div>

          {actors.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {actors.map((actor) => (
                <span
                  key={actor}
                  className="rounded-full border border-blue-100 bg-[#f8fbff] px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {actor}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-600">
              Cast information coming soon.
            </p>
          )}
        </div>

        {/* PHOTOS */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_12px_35px_rgba(15,35,69,0.06)]">
          <div className="flex items-center gap-2">
            <FiImage className="text-xl text-blue-600" />

            <h2 className="font-Merr text-xl font-bold text-[#0b2345]">
              Photos
            </h2>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-xl bg-slate-100"
                >
                  <img
                    src={image}
                    alt={`${movie.title} gallery ${index + 1}`}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-600">Photos coming soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
