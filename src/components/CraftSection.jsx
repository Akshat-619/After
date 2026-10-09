
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import rawIngredients from "../assets/craft/raw-ingredients.png";
import composition from "../assets/craft/composition.png";
import perfumeryProcess from "../assets/craft/perfumery-process.png";
import finalCreation from "../assets/craft/final-creation.png";

gsap.registerPlugin(ScrollTrigger);

const compositions = [
  {
    id: "01",
    name: "Rain at Six",
    family: "PETRICHOR / WOODY",
    opening: "Bergamot",
    heart: "Wet Earth",
    foundation: "Cedarwood",
    description:
      "The scent of rain settling over familiar streets. Earthy, green, and quietly grounding.",
    mood: "AFTER THE RAIN",
  },
  {
    id: "02",
    name: "Slow Sunday",
    family: "FLORAL / MUSK",
    opening: "Soft Iris",
    heart: "White Musk",
    foundation: "Soft Amber",
    description:
      "Clean linen, warm sunlight, and a morning that asks absolutely nothing of you.",
    mood: "SLOW LIVING",
  },
  {
    id: "03",
    name: "After Hours",
    family: "AMBER / SMOKY",
    opening: "Black Pepper",
    heart: "Incense",
    foundation: "Sandalwood",
    description:
      "A lingering warmth of dark woods, distant conversations, and nights without an ending.",
    mood: "AFTER DARK",
  },
];

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 19 19 5M7 5h12v12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children, number }) {
  return (
    <div className="flex items-center gap-3">
      {number && (
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#c89455]">
          {number}
        </span>
      )}

      <span className="h-px w-6 bg-[#c89455]" />

      <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#c89455] sm:text-[9px] sm:tracking-[0.3em]">
        {children}
      </span>
    </div>
  );
}

function IngredientFeature() {
  return (
    <article className="group relative min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#15110d] sm:aspect-[16/9] lg:aspect-[5/4]">
        <img
          src={rawIngredients}
          alt="Cedarwood, peppercorns and amber resin arranged on dark stone"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />

        <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-6 sm:top-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6a15f]" />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/80">
            Selected materials
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#e3b477]">
            Wood · Spice · Resin
          </p>

          <h3 className="mt-2 font-[var(--font-display)] text-3xl tracking-[-0.05em] text-[#fffaf2] sm:text-4xl lg:text-5xl">
            Nature, <span className="italic text-[#c5b29a]">distilled.</span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-b border-white/10 py-4 sm:flex-row sm:items-start sm:justify-between sm:py-5">
        <p className="max-w-md text-[11px] leading-[1.9] text-white/55 sm:text-xs">
          Every fragrance begins with a feeling. Raw textures, contrasting
          notes, and the quiet character of materials shape the world
          each scent belongs to.
        </p>

        <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
          FIG. 01 — MATERIALS
        </span>
      </div>
    </article>
  );
}

function CompositionPanel() {
  const [activeComposition, setActiveComposition] = useState("01");

  const active =
    compositions.find((item) => item.id === activeComposition) ??
    compositions[0];

  return (
    <article className="flex min-w-0 flex-col border border-white/10 bg-[#100e0b]">
      <div className="relative aspect-[16/8] overflow-hidden bg-[#15110d] sm:aspect-[16/7] lg:aspect-[16/8]">
        <img
          src={composition}
          alt="Golden fragrance oil dropping into an amber glass vial"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/80 via-transparent to-black/10" />

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#e3b477]">
              The art of composition
            </p>

            <h3 className="mt-2 font-[var(--font-display)] text-2xl tracking-[-0.045em] text-[#fffaf2] sm:text-3xl">
              Every note, considered.
            </h3>
          </div>

          <span className="shrink-0 font-mono text-[8px] text-white/60">
            03 SCENTS
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-wrap gap-2">
          {compositions.map((item) => {
            const selected = item.id === activeComposition;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveComposition(item.id)}
                aria-pressed={selected}
                className={`border px-3 py-2.5 text-left transition-colors duration-300 sm:px-4 ${
                  selected
                    ? "border-[#c89455]/60 bg-[#c89455]/10 text-[#e3b477]"
                    : "border-white/10 text-white/45 hover:border-white/30 hover:text-white/80"
                }`}
              >
                <span className="block font-mono text-[7px] tracking-[0.15em]">
                  {item.id}
                </span>

                <span className="mt-1 block text-[10px] sm:text-[11px]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="mt-5 border-t border-white/10 pt-5"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#c89455]">
                {active.mood}
              </p>

              <h4 className="mt-2 font-[var(--font-display)] text-2xl tracking-[-0.04em] text-[#f3eee5] sm:text-3xl">
                {active.name}
              </h4>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
              {active.family}
            </span>
          </div>

          <p className="mt-3 max-w-lg text-[11px] leading-[1.9] text-white/50 sm:text-xs">
            {active.description}
          </p>

          <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
            {[
              {
                label: "Opening",
                note: active.opening,
                description: "The first impression",
              },
              {
                label: "Heart",
                note: active.heart,
                description: "The character",
              },
              {
                label: "Foundation",
                note: active.foundation,
                description: "What lingers",
              },
            ].map((note, index) => (
              <div
                key={note.label}
                className={`min-w-0 pr-2 ${
                  index > 0 ? "border-l border-white/10 pl-3 sm:pl-4" : ""
                }`}
              >
                <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35 sm:text-[8px]">
                  {note.label}
                </p>

                <p className="mt-2 break-words font-[var(--font-display)] text-sm leading-tight text-[#e7ded1] sm:text-base">
                  {note.note}
                </p>

                <p className="mt-1 hidden text-[9px] text-white/30 sm:block">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProcessFeature() {
  return (
    <article className="grid min-w-0 grid-cols-1 border border-white/10 bg-[#100e0b] sm:grid-cols-2">
      <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px]">
        <img
          src={perfumeryProcess}
          alt="Glass vessels, amber oils and perfumery tools in a dark atelier"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#100e0b]/25" />

        <span className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/80 sm:left-5 sm:top-5">
          FIG. 02 — THE ATELIER
        </span>
      </div>

      <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
        <SectionLabel number="02">The process</SectionLabel>

        <h3 className="mt-5 font-[var(--font-display)] text-3xl leading-[1.05] tracking-[-0.05em] text-[#f3eee5] sm:text-4xl">
          An art of
          <span className="block italic text-[#b8a58d]">balance.</span>
        </h3>

        <p className="mt-4 text-[11px] leading-[1.9] text-white/50 sm:text-xs">
          A fragrance is more than its ingredients. It is the relationship
          between them — what arrives first, what unfolds slowly, and what
          remains when everything else has faded.
        </p>

        <div className="mt-6 border-t border-white/10 pt-4">
          {[
            ["01", "The first impression"],
            ["02", "The heart of the scent"],
            ["03", "The lasting memory"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="flex items-center gap-3 border-b border-white/[0.06] py-3 last:border-b-0"
            >
              <span className="font-mono text-[8px] text-[#c89455]">
                {number}
              </span>

              <span className="text-[10px] text-white/65 sm:text-[11px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FinalCreation() {
  return (
    <article className="relative min-h-[380px] overflow-hidden bg-[#100e0b] sm:min-h-[440px] lg:min-h-[500px]">
      <img
        src={finalCreation}
        alt="AFTER Hours amber eau de parfum bottle surrounded by wood and resin"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/95 via-[#090807]/15 to-[#090807]/10" />

      <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
        <SectionLabel number="03">The finished creation</SectionLabel>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
        <div className="max-w-xl">
          <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#e3b477]">
            Made to stay with you
          </p>

          <h3 className="mt-3 font-[var(--font-display)] text-4xl leading-[0.95] tracking-[-0.06em] text-[#fffaf2] sm:text-5xl lg:text-6xl">
            A moment,
            <span className="block italic text-[#c7b29a]">
              made tangible.
            </span>
          </h3>

          <p className="mt-4 max-w-md text-[11px] leading-[1.9] text-white/65 sm:text-xs">
            Three fragrances. Three different worlds. One idea:
            some feelings deserve to last a little longer.
          </p>
        </div>

        <a
          href="#scents"
          className="group inline-flex min-h-12 shrink-0 items-center justify-between gap-8 border border-white/35 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#c89455] hover:bg-[#c89455] hover:text-[#090807] sm:min-w-[200px]"
        >
          <span>Explore the collection</span>
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function CraftSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-craft-reveal]",
        {
          y: 28,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="craft"
      className="scroll-mt-20 overflow-hidden bg-[#090807] px-4 py-14 text-[#f3eee5] sm:px-6 sm:py-20 lg:px-[5.8vw] lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section introduction */}
        <header
          data-craft-reveal
          className="mb-8 border-b border-white/15 pb-7 sm:mb-10 sm:pb-9 lg:mb-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <SectionLabel number="02">The art of scent</SectionLabel>

              <h2 className="mt-5 font-[var(--font-display)] text-[clamp(3rem,7.2vw,7rem)] leading-[0.85] tracking-[-0.07em]">
                Made with
                <span className="block font-light italic text-[#b8a58d]">
                  intention.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-1">
              <p className="text-[12px] leading-[1.9] text-white/55 sm:text-sm">
                Behind every fragrance is a world of materials, contrasts,
                and character. We think about the feeling first — then
                build a scent around it.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c89455]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                  Materials / Composition / Memory
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Ingredient feature and composition panel */}
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-8">
          <div data-craft-reveal className="min-w-0 lg:col-span-7">
            <IngredientFeature />
          </div>

          <div data-craft-reveal className="min-w-0 lg:col-span-5">
            <CompositionPanel />
          </div>
        </div>

        {/* Craft process */}
        <div data-craft-reveal className="mt-8 sm:mt-10 lg:mt-12">
          <ProcessFeature />
        </div>

        {/* Closing visual */}
        <div data-craft-reveal className="mt-8 sm:mt-10 lg:mt-12">
          <FinalCreation />
        </div>

        {/* Closing statement */}
        <footer
          data-craft-reveal
          className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-7"
        >
          <p className="font-[var(--font-display)] text-xl tracking-[-0.025em] text-[#cfc2b0] sm:text-2xl">
            Every note has a purpose.
            <span className="block italic text-white/45 sm:inline sm:pl-2">
              Every scent holds a memory.
            </span>
          </p>

          <a
            href="#scents"
            className="group inline-flex items-center gap-3 self-start font-mono text-[8px] uppercase tracking-[0.18em] text-[#d6a15f] transition-colors hover:text-[#fffaf2] sm:self-auto"
          >
            Back to fragrances
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </footer>
      </div>
    </section>
  );
}
