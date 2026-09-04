import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function WhyHollywood() {
  const benefits = [
    "Prime billboard locations",
    "Indoor and outdoor media",
    "Trusted by major brands",
    "Proposal within one business day",
  ];
  return (
    <section className="relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden bg-[#f1f6ff] px-6 py-16 lg:px-10 lg:py-10">
      <div className="absolute -left-40 top-1/3 h-125 w-125 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Why Choose Us
          </p>

          <h2 className="font-Merr text-4xl font-bold leading-tight text-[#0b1f3c] md:text-5xl">
            Advertising Solutions
            <span className="block text-blue-600">Built for Impact</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
            We combine strategic advertising locations, extensive market
            experience, and professional execution to help brands build
            campaigns that stand out.
          </p>

          <Link
            to="/about"
            className="group mt-7 inline-flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Learn More About Us
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`rounded-2xl border border-blue-100 bg-[#f8fbff] p-6 shadow-sm transition  duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg ${
                index === 1 || index === 3 ? "sm:translate-y-6" : ""
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                <FiCheckCircle />
              </div>

              <p className="text-lg font-semibold leading-7 text-[#0b1f3c]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
