import Cocacolalogo from "../../assets/partners/cocacolalogo.png";
import chev from "../../assets/partners/chev.png";
import oppo from "../../assets/partners/oppo.png";
import orange from "../../assets/partners/orange.png";
import ahli from "../../assets/partners/alahli.png";
import pepsi from "../../assets/partners/pepsi.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function PartnersHome() {
  const partners = [
    {
      image: Cocacolalogo,
      name: "Coca-Cola",
    },
    {
      image: chev,
      name: "Chevrolet",
    },
    {
      image: oppo,
      name: "OPPO",
    },
    {
      image: orange,
      name: "Orange",
    },
    {
      image: ahli,
      name: "National Bank of Egypt",
    },
    {
      image: pepsi,
      name: "Pepsi",
    },
  ];
  return (
    <section className="relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden bg-[#f1f6ff] px-6 py-16 lg:px-10 lg:py-10">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Trusted By Leading Brands
          </p>

          <h2 className="font-Merr text-4xl font-bold text-[#0b1f3c] md:text-5xl">
            Our Partners
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            Building successful advertising campaigns with major local and
            international brands.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-28 items-center justify-center rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_30px_rgba(37,99,235,0.07)] transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.15)] lg:h-32"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 font-bold text-blue-600 transition hover:text-blue-800"
          >
            View All Partners
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
