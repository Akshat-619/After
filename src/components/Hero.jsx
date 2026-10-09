
import heroBg from "../assets/hero_bg.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#090807] text-[#f3eee5]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-[center_45%] lg:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Image Overlays */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:via-black/35" />

      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#050403]/80 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/35 to-transparent" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[35%] top-[20%] h-[250px] w-[250px] rounded-full bg-[#c89455]/[0.06] blur-[100px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] lg:blur-[130px]" />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 pb-24 pt-[145px] sm:px-10 sm:pb-28 sm:pt-[160px] md:px-12 lg:px-[5.8vw] lg:pb-32 lg:pt-[150px]">
        <div className="w-full max-w-[700px]">

          {/* Brand Introduction */}
          <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-[#d6a15f] sm:mb-8 sm:text-[10px] sm:tracking-[0.4em]">
            The art of remembering
          </p>

          {/* Main Heading */}
          <h1 className="font-[var(--font-display)] text-[clamp(3.4rem,11.5vw,7.8rem)] font-normal leading-[0.88] tracking-[-0.065em] text-[#fffaf2] drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] sm:text-[clamp(5rem,9vw,7.5rem)] lg:text-[clamp(6rem,7.25vw,8rem)]">
            <span className="block">Scents</span>
            <span className="block font-light italic">
              made from
            </span>
            <span className="block">memories.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-7 max-w-[350px] font-[var(--font-body)] text-[13px] font-light leading-[1.9] tracking-[0.01em] text-[#e4ddd3] drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:mt-9 sm:text-[14px] lg:mt-10">
            The warmth of a familiar embrace.
            <br className="hidden sm:block" />
            The quiet of a place you once called home.
            <br />
            Captured in a fragrance. Kept forever.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-7">
            <a
              href="#scents"
              className="group flex h-[54px] w-full max-w-[300px] items-center justify-between border border-white/45 bg-black/10 px-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#fffaf2] backdrop-blur-[2px] transition-all duration-500 hover:border-[#d6a15f] hover:bg-[#c89455] hover:text-[#090807] sm:h-[60px] sm:px-6 sm:text-[10px] sm:tracking-[0.3em]"
            >
              <span>Discover your scent</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

            <a
              href="#about"
              className="group flex items-center gap-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:text-[#d6a15f] sm:text-[10px] sm:tracking-[0.25em]"
            >
              <span className="h-px w-6 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-[#c89455]" />
              Our philosophy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#scents"
        aria-label="Scroll to explore scents"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center sm:bottom-8 lg:bottom-7"
      >
        <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.25em] text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[9px] sm:tracking-[0.34em]">
          Scroll to remember
        </span>

        <span className="mt-3 h-7 w-px bg-gradient-to-b from-[#d29a56] to-transparent shadow-[0_0_10px_rgba(210,154,86,0.35)] sm:mt-4 sm:h-10" />
      </a>
    </section>
  );
}
