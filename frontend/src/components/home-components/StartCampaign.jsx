import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function StartCampaign() {
  return (
    <section className="flex min-h-[calc(100dvh-76px)] items-center bg-white px-6 py-16 lg:px-10 lg:py-10">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-4xl bg-linear-to-br from-[#07162f] via-[#0b3b82] to-blue-500 px-6 py-14 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] md:px-12 md:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            Start Your Campaign
          </p>

          <h2 className="font-Merr text-4xl font-bold md:text-6xl">
            Ready to Promote Your Brand?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 lg:text-lg lg:leading-8">
            Contact our team and receive a professional advertising proposal
            designed around your campaign goals.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#0b2f6b] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Contact Us
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
