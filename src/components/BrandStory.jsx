
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import emptyPlatform from "../assets/story/empty-platform.png";
import letterJournal from "../assets/story/letter-journal.png";
import cityAtNight from "../assets/story/city-at-night.png";

gsap.registerPlugin(ScrollTrigger);

const atmosphereImages = [
  {
    src: emptyPlatform,
    alt: "",
    className: "after-story__background--platform",
  },
  {
    src: letterJournal,
    alt: "",
    className: "after-story__background--journal",
  },
  {
    src: cityAtNight,
    alt: "",
    className: "after-story__background--city",
  },
];

function BrandStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray(".after-story__reveal", section)
        .forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      gsap.fromTo(
        ".after-story__background",
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".after-story__divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".after-story__ending",
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="after-story"
      aria-labelledby="after-story-heading"
    >
      {/* Atmospheric opening */}
      <div className="after-story__opening">
        <img
          className="after-story__background"
          src={atmosphereImages[0].src}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />

        <div className="after-story__opening-overlay" />

        <div className="after-story__opening-content after-story__reveal">
          <p className="after-story__eyebrow">The world of AFTER</p>

          <h2 id="after-story-heading">
            More than
            <span>a fragrance.</span>
          </h2>

          <p className="after-story__opening-copy">
            A different way to express yourself.
            A signature that stays with you long after you've left the room.
          </p>

          <a className="after-story__text-link" href="#collection">
            Discover the fragrances
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <span className="after-story__vertical-word" aria-hidden="true">
          AFTER
        </span>
      </div>

      {/* Brand philosophy */}
      <div className="after-story__philosophy">
        <div className="after-story__philosophy-inner after-story__reveal">
          <p className="after-story__eyebrow">Our philosophy</p>

          <h3>
            Wear what
            <span>words cannot say.</span>
          </h3>

          <p>
            Fragrance is personal. It can be quiet or unmistakable,
            familiar or unexpected. AFTER is made for the feeling you
            want to carry with you, without having to explain it.
          </p>
        </div>
      </div>

      {/* Full-width atmospheric interlude */}
      <div className="after-story__interlude">
        <img
          className="after-story__background"
          src={atmosphereImages[1].src}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />

        <div className="after-story__interlude-overlay" />

        <div className="after-story__interlude-content after-story__reveal">
          <p className="after-story__eyebrow">An expression of you</p>

          <p className="after-story__quote">
            "The most memorable things don't always need to be seen."
          </p>
        </div>
      </div>

      {/* Brand closing */}
      <div className="after-story__ending">
        <div className="after-story__ending-image">
          <img
            className="after-story__background"
            src={atmosphereImages[2].src}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />

          <div className="after-story__ending-overlay" />
        </div>

        <div className="after-story__ending-content after-story__reveal">
          <p className="after-story__eyebrow">Make it yours</p>

          <h3>
            Leave a little
            <span>AFTER.</span>
          </h3>

          <p>
            Find the fragrance that feels like you.
          </p>

          <a className="after-story__button" href="#collection">
            Explore the collection
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="after-story__bottom">
        <span>AFTER</span>
        <span>Fragrance for the in-between.</span>
      </div>

      <style>{`
        .after-story {
          --as-bg: #090807;
          --as-cream: #f3eee5;
          --as-muted: #c0b5a8;
          --as-amber: #c89455;

          overflow: clip;
          background: var(--as-bg);
          color: var(--as-cream);
        }

        .after-story *,
        .after-story *::before,
        .after-story *::after {
          box-sizing: border-box;
        }

        .after-story__opening,
        .after-story__interlude,
        .after-story__ending {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .after-story__opening {
          display: flex;
          min-height: clamp(520px, 78vh, 820px);
          align-items: center;
          justify-content: center;
          padding: 100px 24px;
          text-align: center;
        }

        .after-story__background {
          position: absolute;
          z-index: -2;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }

        .after-story__background--platform {
          object-position: center 55%;
        }

        .after-story__opening-overlay {
          position: absolute;
          z-index: -1;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(9, 8, 7, 0.45) 0%,
              rgba(9, 8, 7, 0.64) 45%,
              #090807 100%
            ),
            linear-gradient(
              90deg,
              rgba(9, 8, 7, 0.4),
              rgba(9, 8, 7, 0.12),
              rgba(9, 8, 7, 0.4)
            );
        }

        .after-story__opening-content {
          width: min(100%, 780px);
          margin: auto;
        }

        .after-story__eyebrow {
          margin: 0 0 24px;
          color: var(--as-amber);
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          letter-spacing: 0.18em;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .after-story__opening h2 {
          display: flex;
          flex-direction: column;
          margin: 0;
          font-family: var(--font-display, "DM Sans", sans-serif);
          font-size: clamp(48px, 8vw, 100px);
          font-weight: 300;
          letter-spacing: -0.07em;
          line-height: 0.98;
          text-wrap: balance;
        }

        .after-story__opening h2 span {
          color: var(--as-cream);
          font-style: italic;
        }

        .after-story__opening-copy {
          max-width: 430px;
          margin: 26px auto 0;
          color: #e0d5c8;
          font-size: clamp(13px, 1.3vw, 15px);
          font-weight: 300;
          line-height: 1.9;
          text-wrap: balance;
        }

        .after-story__text-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
          border-bottom: 1px solid rgba(243, 238, 229, 0.5);
          padding-bottom: 9px;
          color: var(--as-cream);
          font-size: 12px;
          text-decoration: none;
          transition: color 200ms ease, border-color 200ms ease;
        }

        .after-story__text-link:hover {
          color: var(--as-amber);
          border-color: var(--as-amber);
        }

        .after-story__vertical-word {
          position: absolute;
          right: 22px;
          bottom: 30px;
          color: rgba(243, 238, 229, 0.55);
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          letter-spacing: 0.2em;
          writing-mode: vertical-rl;
        }

        .after-story__philosophy {
          display: flex;
          justify-content: center;
          padding: clamp(90px, 13vw, 165px) 24px;
          text-align: center;
        }

        .after-story__philosophy-inner {
          width: min(100%, 760px);
        }

        .after-story__philosophy h3 {
          display: flex;
          flex-direction: column;
          margin: 0;
          font-family: var(--font-display, "DM Sans", sans-serif);
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 300;
          letter-spacing: -0.06em;
          line-height: 1.08;
          text-wrap: balance;
        }

        .after-story__philosophy h3 span {
          color: var(--as-amber);
          font-style: italic;
        }

        .after-story__philosophy-inner > p:last-child {
          max-width: 500px;
          margin: 26px auto 0;
          color: var(--as-muted);
          font-size: 14px;
          font-weight: 300;
          line-height: 1.95;
          text-wrap: pretty;
        }

        .after-story__interlude {
          display: flex;
          min-height: clamp(350px, 54vw, 590px);
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
        }

        .after-story__interlude .after-story__background {
          object-position: center 56%;
        }

        .after-story__interlude-overlay {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: rgba(9, 8, 7, 0.68);
        }

        .after-story__interlude-content {
          width: min(100%, 700px);
        }

        .after-story__quote {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(28px, 5vw, 58px);
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.35;
          text-wrap: balance;
        }

        .after-story__ending {
          display: grid;
          min-height: 580px;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: stretch;
        }

        .after-story__ending-image {
          position: relative;
          min-height: 520px;
          isolation: isolate;
          overflow: hidden;
        }

        .after-story__ending-image .after-story__background {
          object-position: center 55%;
        }

        .after-story__ending-overlay {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 45%,
            #090807 100%
          );
        }

        .after-story__ending-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: clamp(36px, 6vw, 90px);
        }

        .after-story__ending-content .after-story__eyebrow {
          margin-bottom: 22px;
        }

        .after-story__ending h3 {
          display: flex;
          flex-direction: column;
          margin: 0;
          font-family: var(--font-display, "DM Sans", sans-serif);
          font-size: clamp(40px, 5.5vw, 70px);
          font-weight: 300;
          letter-spacing: -0.065em;
          line-height: 1.04;
          text-wrap: balance;
        }

        .after-story__ending h3 span {
          color: var(--as-amber);
          font-style: italic;
        }

        .after-story__ending-content > p:not(.after-story__eyebrow) {
          margin: 22px 0 0;
          color: var(--as-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .after-story__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-height: 48px;
          margin-top: 30px;
          border: 1px solid rgba(243, 238, 229, 0.4);
          padding: 0 19px;
          color: var(--as-cream);
          font-size: 11px;
          text-decoration: none;
          transition:
            color 220ms ease,
            background 220ms ease,
            border-color 220ms ease;
        }

        .after-story__button:hover {
          border-color: var(--as-cream);
          background: var(--as-cream);
          color: var(--as-bg);
        }

        .after-story__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-top: 1px solid rgba(243, 238, 229, 0.13);
          padding: 25px clamp(20px, 5vw, 70px);
          color: var(--as-muted);
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          letter-spacing: 0.08em;
          line-height: 1.8;
        }

        .after-story__bottom span:first-child {
          color: var(--as-cream);
          letter-spacing: 0.2em;
        }

        @media (min-width: 1500px) {
          .after-story__ending {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        @media (max-width: 760px) {
          .after-story__opening {
            min-height: 600px;
            min-height: min(720px, 82svh);
            padding: 100px 24px;
          }

          .after-story__opening h2 {
            font-size: clamp(46px, 10vw, 72px);
          }

          .after-story__opening-overlay {
            background: linear-gradient(
              180deg,
              rgba(9, 8, 7, 0.42),
              rgba(9, 8, 7, 0.58) 45%,
              #090807 100%
            );
          }

          .after-story__vertical-word {
            right: 14px;
            bottom: 18px;
          }

          .after-story__philosophy {
            padding: 95px 24px;
          }

          .after-story__interlude {
            min-height: 420px;
          }

          .after-story__ending {
            min-height: auto;
            grid-template-columns: minmax(0, 1fr);
          }

          .after-story__ending-image {
            min-height: 440px;
          }

          .after-story__ending-overlay {
            background: linear-gradient(
              180deg,
              transparent 45%,
              #090807 100%
            );
          }

          .after-story__ending-content {
            align-items: center;
            padding: 40px 24px 100px;
            text-align: center;
          }

          .after-story__ending h3 {
            font-size: clamp(42px, 9vw, 60px);
          }

          .after-story__bottom {
            padding-inline: 20px;
          }
        }

        @media (max-width: 420px) {
          .after-story__opening {
            min-height: 570px;
            min-height: min(650px, 80svh);
            padding-inline: 20px;
          }

          .after-story__opening h2 {
            font-size: clamp(42px, 10.5vw, 48px);
          }

          .after-story__opening-copy {
            font-size: 12px;
          }

          .after-story__philosophy {
            padding: 78px 20px;
          }

          .after-story__philosophy h3 {
            font-size: 37px;
          }

          .after-story__philosophy-inner > p:last-child {
            font-size: 12px;
          }

          .after-story__interlude {
            min-height: 360px;
            padding-inline: 20px;
          }

          .after-story__quote {
            font-size: 29px;
          }

          .after-story__ending-image {
            min-height: 350px;
          }

          .after-story__ending-content {
            padding-inline: 20px;
          }

          .after-story__ending h3 {
            font-size: 40px;
          }

          .after-story__bottom {
            align-items: flex-start;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .after-story__text-link,
          .after-story__button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default BrandStory;
