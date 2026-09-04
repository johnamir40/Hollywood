import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Holy2 from "../../assets/hero/Holy2.png";

export default function HeroSection() {
  return (
    <section
      className="
        relative isolate flex min-h-160 w-full overflow-hidden
        bg-[#030812] bg-size-[auto_78%]
        bg-position-[79%_top] bg-no-repeat
        sm:min-h-170 sm:bg-cover sm:bg-position-[74%_center]
        lg:min-h-[calc(100svh-76px)] lg:bg-position-[82%_center]
      "
      style={{
        backgroundImage: `url(${Holy2})`,
      }}
    >
      {/* Responsive dark overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(2,7,16,0.12)_0%,rgba(2,7,16,0.08)_30%,rgba(2,7,16,0.78)_66%,rgba(2,7,16,0.98)_100%)]
          sm:bg-[linear-gradient(to_bottom,rgba(2,7,16,0.20)_0%,rgba(2,7,16,0.08)_35%,rgba(2,7,16,0.70)_68%,rgba(2,7,16,0.97)_100%)]
          lg:bg-[linear-gradient(to_right,rgba(2,7,16,0.88)_0%,rgba(2,7,16,0.55)_45%,rgba(2,7,16,0.12)_100%)]
        "
      />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-24 bottom-20 h-60 w-60 rounded-full bg-blue-600/20 blur-[100px] sm:-left-40 sm:h-96 sm:w-96 sm:blur-[130px]" />

      {/* Hero content */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-7xl flex-1
          flex-col justify-between
          px-4 py-5
          sm:px-6 sm:py-7
          lg:px-10 lg:py-9
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
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] sm:h-2 sm:w-2" />

            <span
              className="
                text-[9px] font-bold uppercase
                tracking-[0.14em] text-white
                sm:text-[11px] sm:tracking-[0.18em]
                lg:text-xs lg:tracking-[0.22em]
              "
            >
              Hollywood Advertising
            </span>
          </div>
        </div>

        {/* Bottom content */}
        <div
          className="
            grid w-full items-end gap-4
            sm:gap-5
            lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.85fr)_auto]
            lg:gap-7
          "
        >
          {/* Heading */}
          <h1
            className="
              max-w-150 font-Merr
              text-[clamp(2.25rem,10vw,3rem)]
              font-bold leading-[0.95]
              tracking-[-0.04em] text-white
              sm:text-[3.5rem]
              lg:text-6xl
            "
          >
            <span className="block">Promote Your Brand</span>

            <span className="mt-1.5 block text-blue-400 sm:mt-2">
              Across Egypt
            </span>
          </h1>

          {/* Description and desktop statistics */}
          <div>
            <p className="max-w-130 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Reach your target audience through premium billboard locations,
              indoor media, and outdoor advertising solutions across Egypt.
            </p>

            <div className="mt-5 hidden grid-cols-3 gap-4 border-t border-white/20 pt-4 md:grid lg:hidden">
              <div>
                <h3 className="text-xl font-bold text-white">30+</h3>
                <p className="mt-1 text-xs text-slate-300">Years Experience</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">50+</h3>
                <p className="mt-1 text-xs text-slate-300">Prime Locations</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">100+</h3>
                <p className="mt-1 text-xs text-slate-300">Campaigns</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-2.5 sm:w-fit sm:flex-row lg:flex-col lg:justify-self-end">
            <Link
              to="/locations"
              className="
                group inline-flex w-full items-center justify-center
                gap-2.5 rounded-xl border border-blue-600
                bg-blue-600 px-5 py-3
                text-sm font-bold text-white
                shadow-[0_14px_35px_rgba(37,99,235,0.3)]
                transition duration-300
                hover:-translate-y-1 hover:bg-blue-500
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-blue-400
                sm:w-auto sm:px-6 sm:py-3.5 sm:text-base
                lg:px-7
              "
            >
              View Available Locations
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex w-full items-center justify-center
                rounded-xl border border-white/35
                bg-black/25 px-5 py-3
                text-sm font-bold text-white
                backdrop-blur-md transition duration-300
                hover:-translate-y-1 hover:border-white
                hover:bg-white hover:text-[#0b2f6b]
                sm:w-auto sm:px-6 sm:py-3.5 sm:text-base
              "
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
