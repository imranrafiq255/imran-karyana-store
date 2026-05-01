"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Products" },
  { href: "#digital", label: "Digital Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#owner", label: "Owner" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-display font-black text-base sm:text-lg transition-all duration-300 flex-shrink-0 ${
              scrolled
                ? "bg-[#0f5c2e] text-[#f0c040]"
                : "bg-[#f0c040] text-[#083d1e]"
            } shadow-lg group-hover:scale-110`}
          >
            IK
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-bold text-sm sm:text-base transition-colors duration-300 ${scrolled ? "text-[#0f5c2e]" : "text-white"}`}
            >
              Imran Karyana Store
            </span>
            <span
              className={`text-xs transition-colors duration-300 ${scrolled ? "text-[#c8920a]" : "text-[#f0c040]"}`}
            >
              Channi Goth
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === link.href
                    ? "bg-[#0f5c2e] text-white shadow-md"
                    : scrolled
                      ? "text-[#1a1a1a] hover:bg-[#0f5c2e]/10 hover:text-[#0f5c2e]"
                      : "text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop CTA — hidden on mobile */}
          <button
            onClick={() => handleNav("#contact")}
            className={`hidden lg:block text-sm font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
              scrolled
                ? "bg-[#0f5c2e] text-white hover:bg-[#1a8a47]"
                : "bg-white/20 border border-white/40 text-white hover:bg-white/30"
            }`}
          >
            Contact Us
          </button>

          {/* Mobile: small icon-only contact link */}
          <a
            href="tel:+923000000000"
            className={`lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-300 ${
              scrolled
                ? "bg-[#0f5c2e] text-white"
                : "bg-white/20 text-white border border-white/30"
            }`}
            aria-label="Call us"
          >
            📞
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-full transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-[#0f5c2e]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-[#0f5c2e]" : "bg-white"} ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-[#0f5c2e]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-3 mb-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === link.href
                    ? "bg-[#0f5c2e] text-white"
                    : "text-[#1a1a1a] hover:bg-[#0f5c2e]/8 hover:text-[#0f5c2e]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-1 w-full bg-gradient-to-r from-[#0f5c2e] to-[#1a8a47] text-white text-sm font-bold py-3 rounded-xl shadow-md"
            >
              📬 Send Message
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
