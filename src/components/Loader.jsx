
import { useEffect } from "react";

function Loader({ onComplete }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timeout = window.setTimeout(
      () => {
        onComplete?.();
      },
      prefersReducedMotion ? 100 : 3600
    );

    return () => window.clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="after-loader" role="status" aria-label="Loading AFTER">
      <div className="after-loader__glow" />

      <div className="after-loader__content">
        <p className="after-loader__eyebrow">
          THE ART OF WHAT REMAINS
        </p>

        <h1 className="after-loader__wordmark" aria-label="AFTER">
          AFTER<span>.</span>
        </h1>

        <p className="after-loader__tagline">
          FRAGRANCE THAT STAYS
        </p>

        <div className="after-loader__progress">
          <div className="after-loader__progress-fill" />
        </div>

        <p className="after-loader__caption">
          A MOMENT, BEFORE EVERYTHING
        </p>
      </div>

      <span className="after-loader__corner after-loader__corner--left">
        A / 001
      </span>

      <span className="after-loader__corner after-loader__corner--right">
        EST. IN MEMORY
      </span>

      <style>{`
        .after-loader {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #090807;
          color: #f3eee5;
          isolation: isolate;
          animation: afterLoaderExit 0.75s ease-in 2.9s forwards;
        }

        .after-loader__glow {
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          width: min(85vw, 800px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(200, 148, 85, 0.13) 0%,
            rgba(200, 148, 85, 0.04) 35%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          animation: afterLoaderGlow 2.8s ease-in-out infinite alternate;
        }

        .after-loader__content {
          display: flex;
          width: 100%;
          align-items: center;
          flex-direction: column;
          padding: 24px;
          text-align: center;
          animation: afterLoaderContent 0.9s ease-out both;
        }

        .after-loader__eyebrow {
          margin: 0 0 clamp(24px, 4vh, 40px);
          color: #c89455;
          font-family: "DM Mono", monospace;
          font-size: clamp(9px, 1.2vw, 12px);
          font-weight: 400;
          letter-spacing: 0.22em;
          line-height: 1.8;
        }

        .after-loader__wordmark {
          margin: 0;
          color: #f3eee5;
          font-family: "DM Sans", sans-serif;
          font-size: clamp(90px, 20vw, 250px);
          font-weight: 300;
          letter-spacing: -0.095em;
          line-height: 0.95;
          animation: afterLoaderWordmark 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .after-loader__wordmark span {
          color: #c89455;
        }

        .after-loader__tagline {
          margin: clamp(24px, 4vh, 38px) 0 0;
          color: rgba(243, 238, 229, 0.72);
          font-family: "DM Mono", monospace;
          font-size: clamp(9px, 1.2vw, 12px);
          letter-spacing: 0.2em;
          line-height: 1.8;
          animation: afterLoaderFade 0.8s ease-out 0.5s both;
        }

        .after-loader__progress {
          width: clamp(140px, 22vw, 220px);
          height: 1px;
          margin-top: clamp(32px, 5vh, 48px);
          overflow: hidden;
          background: rgba(243, 238, 229, 0.18);
        }

        .after-loader__progress-fill {
          width: 100%;
          height: 100%;
          background: #c89455;
          transform: scaleX(0);
          transform-origin: left;
          animation: afterLoaderProgress 2.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .after-loader__caption {
          margin: 15px 0 0;
          color: rgba(243, 238, 229, 0.4);
          font-family: "DM Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          line-height: 1.8;
          animation: afterLoaderFade 0.8s ease-out 0.8s both;
        }

        .after-loader__corner {
          position: absolute;
          bottom: 26px;
          color: rgba(243, 238, 229, 0.4);
          font-family: "DM Mono", monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          animation: afterLoaderFade 0.8s ease-out 0.7s both;
        }

        .after-loader__corner--left {
          left: 28px;
        }

        .after-loader__corner--right {
          right: 28px;
        }

        @keyframes afterLoaderContent {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afterLoaderWordmark {
          from {
            opacity: 0;
            letter-spacing: 0.02em;
            transform: translateY(35px) scale(0.97);
          }
          to {
            opacity: 1;
            letter-spacing: -0.095em;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes afterLoaderFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afterLoaderProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes afterLoaderGlow {
          from {
            opacity: 0.55;
            scale: 0.92;
          }
          to {
            opacity: 1;
            scale: 1.08;
          }
        }

        @keyframes afterLoaderExit {
          to {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-2%);
            pointer-events: none;
          }
        }

        @media (max-width: 600px) {
          .after-loader__wordmark {
            font-size: clamp(76px, 21vw, 125px);
          }

          .after-loader__eyebrow {
            font-size: 8px;
          }

          .after-loader__tagline {
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .after-loader__corner {
            bottom: 18px;
            font-size: 8px;
          }

          .after-loader__corner--left {
            left: 16px;
          }

          .after-loader__corner--right {
            right: 16px;
          }
        }

        @media (max-width: 360px) {
          .after-loader__wordmark {
            font-size: 68px;
          }

          .after-loader__caption {
            font-size: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .after-loader__glow,
          .after-loader__content,
          .after-loader__wordmark,
          .after-loader__tagline,
          .after-loader__caption,
          .after-loader__corner,
          .after-loader__progress-fill {
            animation: none !important;
          }

          .after-loader__progress-fill {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
