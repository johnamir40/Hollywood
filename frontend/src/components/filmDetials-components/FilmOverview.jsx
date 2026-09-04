import { FiFilm } from "react-icons/fi";

export default function FilmOverview({ movie }) {
  return (
    <section
      id="overview"
      className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-12 scroll-mt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[1fr_300px]">
        <div id="overview" className="scroll-mt-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
            The story
          </p>

          <h2 className="mt-2 font-Merr text-2xl font-bold text-[#0b2345]">
            Overview
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            {movie.description}
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 shadow-[0_12px_35px_rgba(15,35,69,0.06)]">
          <div className="flex items-center gap-2.5 text-blue-600">
            <FiFilm className="text-lg" />

            <h2 className="font-Merr text-lg font-bold text-[#0b2345]">
              Production
            </h2>
          </div>

          <dl className="mt-5 space-y-4">
            <div className="border-b border-blue-100 pb-4">
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Director
              </dt>

              <dd className="mt-1.5 text-sm leading-5 text-slate-700">
                {movie.director}
              </dd>
            </div>

            <div className="border-b border-blue-100 pb-4">
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Writers
              </dt>

              <dd className="mt-1.5 text-sm leading-5 text-slate-700">
                {movie.writers}
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Production
              </dt>

              <dd className="mt-1.5 text-sm leading-5 text-slate-700">
                {movie.producers}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
