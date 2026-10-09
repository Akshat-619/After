
import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScentCollection from "./components/ScentCollection";
import CraftSection from "./components/CraftSection";
import BrandStory from "./components/BrandStory";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      <Navbar />

      <main id="top">
        <Hero />
        <ScentCollection />
        <CraftSection />
        <BrandStory />
      </main>

      <Footer />

      <button
        type="button"
        className="back-to-top"
        aria-label="Back to top"
        title="Back to top"
        onClick={scrollToTop}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default App;
