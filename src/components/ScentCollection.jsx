
import { useState } from "react";

import rainAtSix from "../assets/scents/rain_at_six.png";
import slowSunday from "../assets/scents/slow-sunday.png";
import afterHours from "../assets/scents/after-hours.png";

const scents = [
  {
    number: "01",
    name: "Rain at Six",
    subtitle: "THE CITY AFTER THE RAIN",
    category: "PETRICHOR / WOODY",
    description:
      "The first rain hits warm pavement. The city slows down. For a moment, everything feels new again.",
    notes: ["Bergamot", "Wet Earth", "Cedarwood"],
    mood: "EARTHY",
    moodDescription: "Quiet · Intimate",
    image: rainAtSix,
  },
  {
    number: "02",
    name: "Slow Sunday",
    subtitle: "A MORNING WITH NOWHERE TO BE",
    category: "FLORAL / MUSK",
    description:
      "Soft sunlight, clean linen and the rare luxury of having nowhere else to be.",
    notes: ["White Musk", "Iris", "Soft Amber"],
    mood: "SOFT",
    moodDescription: "Warm · Comforting",
    image: slowSunday,
  },
  {
    number: "03",
    name: "After Hours",
    subtitle: "WHEN THE WORLD GOES QUIET",
    category: "AMBER / SMOKY",
    description:
      "Dark streets, lingering conversations and the kind of night you wish would last a little longer.",
    notes: ["Black Pepper", "Incense", "Sandalwood"],
    mood: "SMOKY",
    moodDescription: "Bold · Mysterious",
    image: afterHours,
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

function ProductNotes({ notes }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {notes.map((note, index) => (
        <span
          key={note}
          className="text-[10px] leading-4 text-[#c9bca9]/75"
        >
          {note}
          {index < notes.length - 1 && (
            <span className="ml-2 text-[#c89455]">/</span>
          )}
        </span>
      ))}
    </div>
  );
}

/* Large image with an inline magnification lens */
function ProductPreview({ scent }) {
  const [zoom, setZoom] = useState({
    active: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const zoomFactor = 2.5;
  const lensSize = 180;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    setZoom({
      active: true,
      x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
      y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)),
      width: rect.width,
      height: rect.height,
    });
  }

  function handleMouseLeave() {
    setZoom((previous) => ({
      ...previous,
      active: false,
    }));
  }

  const lensLeft = Math.max(
    0,
    Math.min(zoom.width - lensSize, zoom.x - lensSize / 2)
  );

  const lensTop = Math.max(
    0,
    Math.min(zoom.height - lensSize, zoom.y - lensSize / 2)
  );

  const magnifiedWidth = zoom.width * zoomFactor;
  const magnifiedHeight = zoom.height * zoomFactor;

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#100e0b] sm:min-h-[500px] lg:min-h-0">
      <div
        className="absolute inset-0 hidden overflow-hidden lg:block"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Ccircle cx='14' cy='14' r='12' fill='%23090807' fill-opacity='.85' stroke='%23ffffff' stroke-width='1.2'/%3E%3Cpath d='M14 8v12M8 14h12' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\") 14 14, crosshair",
        }}
      >
        <img
          src={scent.image}
          alt={`AFTER ${scent.name} Eau de Parfum`}
          draggable="false"
          className="h-full w-full select-none object-cover object-center"
        />

        {zoom.active && zoom.width > 0 && (
          <div
            className="pointer-events-none absolute z-10 overflow-hidden border border-white/80 shadow-xl"
            style={{
              left: lensLeft,
              top: lensTop,
              width: lensSize,
              height: lensSize,
            }}
          >
            <div
              className="absolute max-w-none"
              style={{
                width: magnifiedWidth,
                height: magnifiedHeight,
                left: lensSize / 2 - zoom.x * zoomFactor,
                top: lensSize / 2 - zoom.y * zoomFactor,
                backgroundImage: `url("${scent.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${magnifiedWidth}px ${magnifiedHeight}px`,
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile and tablet image */}
      <img
        src={scent.image}
        alt={`AFTER ${scent.name} Eau de Parfum`}
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
      />
    </div>
  );
}

/* Responsive product card */
function ProductSelector({ scent, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative flex w-full min-w-0 items-stretch gap-3 overflow-hidden border p-2.5 text-left transition-all duration-300 sm:gap-4 sm:p-3 ${
        selected
          ? "border-[#c89455]/65 bg-[#c89455]/[0.06]"
          : "border-white/[0.09] bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.03]"
      }`}
    >
      {/* Active accent */}
      <span
        className={`absolute bottom-0 left-0 top-0 w-[2px] transition-colors ${
          selected ? "bg-[#d6a15f]" : "bg-transparent"
        }`}
      />

      {/* Fixed-width thumbnail; never overlaps the text */}
      <span className="relative block w-[88px] shrink-0 self-stretch overflow-hidden bg-[#17130f] sm:w-[108px] lg:w-[clamp(88px,8vw,118px)]">
        <span className="block aspect-[3/4] h-full min-h-[112px] w-full overflow-hidden">
          <img
            src={scent.image}
            alt=""
            draggable="false"
            className={`h-full w-full object-cover transition duration-700 ${
              selected
                ? "scale-[1.02] opacity-100"
                : "opacity-65 group-hover:scale-105 group-hover:opacity-100"
            }`}
          />
        </span>

        <span className="absolute left-2 top-2 font-mono text-[8px] text-white drop-shadow-md">
          {scent.number}
        </span>

      
      </span>

      {/* Flexible content area */}
      <span className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
        <span
          className={`block break-words font-mono text-[7px] uppercase leading-relaxed tracking-[0.12em] sm:text-[8px] ${
            selected ? "text-[#d6a15f]" : "text-white/40"
          }`}
        >
          {scent.subtitle}
        </span>

        <span
          className={`mt-1.5 block break-words font-[var(--font-display)] text-[clamp(1.25rem,1.8vw,1.8rem)] leading-[1.05] tracking-[-0.045em] transition-colors ${
            selected
              ? "text-[#fffaf2]"
              : "text-white/75 group-hover:text-white"
          }`}
        >
          {scent.name}
        </span>

        <span className="mt-1.5 block break-words font-mono text-[7px] uppercase leading-relaxed tracking-[0.12em] text-white/40 sm:text-[8px]">
          {scent.category}
        </span>

        <span className="mt-2 block text-[10px] leading-[1.6] text-white/55 sm:text-[11px]">
          {scent.description}
        </span>

        <span className="mt-2.5 block border-t border-white/10 pt-2">
          <span className="mb-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-white/35">
            Fragrance notes
          </span>
          <ProductNotes notes={scent.notes} />
        </span>

        <span className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <span
            className={`font-mono text-[7px] uppercase tracking-[0.1em] sm:text-[8px] ${
              selected ? "text-[#d6a15f]" : "text-white/40"
            }`}
          >
            {scent.mood} <span className="text-white/25">/</span>{" "}
            {scent.moodDescription}
          </span>

          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
              selected
                ? "border-[#c89455] bg-[#c89455] text-[#090807]"
                : "border-white/15 text-white/45 group-hover:border-[#c89455] group-hover:text-[#c89455]"
            }`}
          >
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </span>
    </button>
  );
}

function PhilosophyCard() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#17120d] to-[#0e0c09] px-4 py-4 sm:px-5 sm:py-5">
      <span className="pointer-events-none absolute -right-1 -top-4 font-[var(--font-display)] text-8xl font-light leading-none text-white/[0.035]">
        A.
      </span>

      <div className="relative flex gap-3">
        <span className="h-8 w-[2px] shrink-0 bg-[#c89455]" />

        <div className="min-w-0">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#c89455]">
            The AFTER philosophy
          </p>

          <p className="mt-2 font-[var(--font-display)] text-lg leading-[1.2] tracking-[-0.025em] text-[#e7ded1] sm:text-xl">
            A scent can disappear.
            <span className="mt-0.5 block italic text-[#a99a86]">
              The feeling doesn't have to.
            </span>
          </p>

          <p className="mt-2 max-w-[320px] text-[10px] leading-[1.8] text-white/40">
            Created for the places, people, and moments that stay
            with you long after they're gone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ScentCollection() {
  const [selectedNumber, setSelectedNumber] = useState("01");

  const selectedScent =
    scents.find((scent) => scent.number === selectedNumber) ??
    scents[0];

  return (
    <section
      id="scents"
      className="scroll-mt-[76px] overflow-hidden bg-[#090807] px-4 py-12 text-[#f3eee5] sm:px-6 sm:py-16 lg:px-[5.8vw] lg:py-[4.5rem]"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-6 flex flex-col gap-4 border-b border-white/15 pb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c89455]" />
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#c89455] sm:text-[9px] sm:tracking-[0.32em]">
                Chapter 01 — The collection
              </p>
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.7rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.065em]">
              Wear a{" "}
              <span className="font-light italic text-[#b8aa98]">
                memory.
              </span>
            </h2>
          </div>

          <p className="max-w-[340px] text-[11px] leading-[1.8] text-white/50 sm:text-[12px]">
            Fragrances inspired by moments that stay with us.
            The rain on familiar streets. An unhurried morning.
            A night that refuses to end.
          </p>
        </div>

        {/* Main responsive layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Main image */}
          <div className="min-w-0 lg:col-span-7">
            <div className="h-[min(125vw,620px)] min-h-[340px] sm:h-[min(95vw,720px)] lg:h-full lg:min-h-[720px]">
              <ProductPreview scent={selectedScent} />
            </div>
          </div>

          {/* Product selector and supporting content */}
          <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
            <div className="flex items-end justify-between gap-3 border-b border-white/10 pb-3">
              <div className="min-w-0">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#c89455]">
                  Find your fragrance
                </p>
                <h3 className="mt-1.5 font-[var(--font-display)] text-xl tracking-[-0.035em] sm:text-2xl">
                  Choose your memory.
                </h3>
              </div>

              <span className="shrink-0 pb-1 font-mono text-[8px] tracking-[0.12em] text-white/35">
                03 FRAGRANCES
              </span>
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              {scents.map((scent) => (
                <ProductSelector
                  key={scent.number}
                  scent={scent}
                  selected={selectedNumber === scent.number}
                  onSelect={() => setSelectedNumber(scent.number)}
                />
              ))}
            </div>

            {/* Mood selector */}
            <div className="border border-white/10 bg-[#100e0b] p-3.5 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/45">
                  Explore by mood
                </p>
                <span className="font-mono text-[8px] text-[#d6a15f]">
                  {selectedScent.mood}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {scents.map((scent) => {
                  const active = selectedNumber === scent.number;

                  return (
                    <button
                      key={scent.number}
                      type="button"
                      onClick={() => setSelectedNumber(scent.number)}
                      aria-pressed={active}
                      className={`min-w-0 border px-1.5 py-2.5 transition-all duration-300 sm:px-2 sm:py-3 ${
                        active
                          ? "border-[#c89455]/60 bg-[#c89455]/10 text-[#e3b477]"
                          : "border-white/10 text-white/45 hover:border-white/30 hover:text-white/80"
                      }`}
                    >
                      <span className="block break-words font-mono text-[7px] uppercase tracking-[0.08em] sm:text-[8px] sm:tracking-[0.12em]">
                        {scent.mood}
                      </span>
                      <span className="mt-1 block break-words text-[8px] leading-4 text-current/65">
                        {scent.moodDescription}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <PhilosophyCard />
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/15 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-6 text-white/40 sm:text-[11px]">
            Not just something you wear. Something you return to.
          </p>

          <a
            href="#about"
            className="group inline-flex items-center gap-4 self-start font-mono text-[8px] uppercase tracking-[0.18em] text-[#d7c9b5] transition-colors hover:text-[#c89455] sm:self-auto sm:text-[9px]"
          >
            <span>Discover our philosophy</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
