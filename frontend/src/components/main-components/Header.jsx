import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations", isLocationsLink: true },

    { name: "Films", path: "/films" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isLinkActive = (link) => {
    if (link.isLocationsLink) {
      return location.pathname.startsWith("/locations");
    }

    if (link.path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === link.path;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-300/15 bg-linear-to-r from-[#07162f] via-[#123766] to-[#0b2d5c] text-white shadow-[0_8px_35px_rgba(2,12,35,0.32)]">
      {/* Top light effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-300/70 to-transparent" />

      <div className="mx-auto flex h-19 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo and company name */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white p-1.5 shadow-[0_7px_20px_rgba(0,0,0,0.2)] transition duration-300 group-hover:scale-105 sm:h-13 sm:w-13">
            <img
              src={logo}
              alt="Hollywood Advertising"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <h2 className="max-w-45 font-Slab text-[11px] font-bold uppercase leading-[1.3] tracking-[0.04em] text-white sm:max-w-none sm:text-sm md:text-[15px]">
              Hollywood Advertising
            </h2>

            <p className="mt-0.5 max-w-45 truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-blue-200 sm:max-w-none sm:text-[10px] md:text-[11px]">
              Art Production
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 font-Merr xl:flex xl:gap-7  ">
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link)}
                className={`group relative py-2 text-sm font-semibold transition duration-300 ${
                  active ? "text-blue-300" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-400 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 xl:flex">
          {/* <Link
            to="/login"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Login
          </Link> */}

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Start Campaign
            <FiArrowUpRight className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previousValue) => !previousValue)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-2xl text-white shadow-sm backdrop-blur-md transition duration-300 hover:border-blue-300/50 hover:bg-white/15 xl:hidden"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-white/10 bg-[#081b39]/98 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "max-h-150 border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link)}
                className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            {/* <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm font-semibold text-white"
            >
              Login
            </Link> */}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center rounded-xl bg-blue-600 px-3 py-3 text-sm font-bold text-white"
            >
              Start Campaign
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
