
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Scents", href: "#scents" },
    { label: "Stories", href: "#stories" },
    { label: "Craft", href: "#craft" },
    { label: "About", href: "#about" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative flex h-[76px] items-center justify-between border-b border-white/[0.09] bg-black/15 px-5 backdrop-blur-[5px] sm:h-[84px] sm:px-8 lg:h-[92px] lg:px-[5.8vw]">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group relative z-50 font-[var(--font-display)] text-[22px] font-normal tracking-[0.18em] text-[#f3eee5] sm:text-[25px]"
        >
          AFTER
          <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#c89455] transition-all duration-500 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <div className="flex items-center gap-6 lg:gap-10 xl:gap-[46px]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/65 transition-colors duration-300 hover:text-[#f3eee5] lg:text-[10px] lg:tracking-[0.3em]"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c89455] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Cart */}
        <button
          type="button"
          aria-label="Shopping cart"
          className="group hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-[#f3eee5] md:flex lg:gap-4 lg:text-[10px] lg:tracking-[0.28em]"
        >
          <span>Cart</span>
          <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full border border-white/30 text-[8px] text-white/70 transition-all duration-300 group-hover:border-[#c89455] group-hover:text-[#c89455]">
            0
          </span>
        </button>

        {/* Mobile Cart + Menu Button */}
        <div className="relative z-50 flex items-center gap-4 md:hidden">
          <button
            type="button"
            aria-label="Shopping cart"
            className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/75 sm:gap-3"
          >
            <span>Cart</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-[8px]">
              0
            </span>
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-white/15 transition-colors hover:border-[#c89455]"
          >
            <span
              className={`h-px w-4 bg-[#f3eee5] transition-all duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-[#f3eee5] transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-[#090807]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible max-h-[360px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 sm:px-8">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/[0.08] py-4 text-sm text-[#f3eee5]/80 transition-colors hover:text-[#c89455]"
            >
              <span className="font-[var(--font-body)]">
                {link.label}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/35">
                0{index + 1}
              </span>
            </a>
          ))}

          <p className="pt-5 font-mono text-[8px] uppercase tracking-[0.25em] text-white/35">
            Scents made from memories
          </p>
        </div>
      </div>
    </header>
  );
}
