
import { useEffect, useRef, useState } from "react";

import afterStory from "./assets/narration/after.story.mp3";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScentCollection from "./components/ScentCollection";
import CraftSection from "./components/CraftSection";
import BrandStory from "./components/BrandStory";
import Footer from "./components/Footer";

function App() {
  const audioRef = useRef(null);
  const tipTimerRef = useRef(null);

  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeadphoneTip, setShowHeadphoneTip] = useState(false);
  const [loading, setLoading] = useState(false);

  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    return () => window.clearTimeout(tipTimerRef.current);
  }, []);

  function startLoader() {
    setShowHeadphoneTip(false);
    setLoading(true);
  }

  async function startStory() {
    const audio = audioRef.current;

    window.clearTimeout(tipTimerRef.current);

    setShowWelcome(false);
    setShowHeadphoneTip(true);
    setLoading(false);
    setAudioEnabled(true);
    setAudioError(false);

    if (audio) {
      audio.muted = false;

      try {
        await audio.play();
      } catch (error) {
        console.error("Narration playback failed:", error);
        setAudioError(true);
      }
    }

    tipTimerRef.current = window.setTimeout(startLoader, 2200);
  }

  function exploreSilently() {
    window.clearTimeout(tipTimerRef.current);

    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setIsPlaying(false);
    setAudioEnabled(false);
    setShowWelcome(false);
    setShowHeadphoneTip(false);
    setLoading(true);
  }

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setAudioError(false);
      } catch (error) {
        console.error("Narration playback failed:", error);
        setAudioError(true);
      }
    } else {
      audio.pause();
    }
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }

  function seekAudio(event) {
    const audio = audioRef.current;

    if (!audio || !Number.isFinite(audio.duration)) return;

    audio.currentTime = Number(event.target.value);
    setCurrentTime(audio.currentTime);
  }

  function formatTime(time) {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* Narration */}
      <audio
        ref={audioRef}
        src={afterStory}
        preload="metadata"
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration || 0)
        }
        onDurationChange={(event) =>
          setDuration(event.currentTarget.duration || 0)
        }
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setAudioError(true);
          setIsPlaying(false);
        }}
      />

      {/* Welcome popup: first screen on every refresh */}
      {showWelcome && (
        <div className="story-overlay">
          <section
            className="story-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-heading"
          >
            <span className="story-eyebrow">AFTER</span>

            <h1 id="story-heading">
              Some things are
              <br />
              <span>meant to be felt.</span>
            </h1>

            <div className="story-actions">
              <button
                type="button"
                className="story-primary"
                onClick={startStory}
              >
                EXPERIENCE WITH SOUND
              </button>

              <button
                type="button"
                className="story-secondary"
                onClick={exploreSilently}
              >
                Explore silently
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Headphone transition */}
      {showHeadphoneTip && (
        <div className="headphone-overlay">
          <div className="headphone-card">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
              <path d="M5 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-2a2 2 0 0 1 2-2Z" />
              <path d="M19 14h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-2a2 2 0 0 0-2-2Z" />
            </svg>

            <p>TAKE A BREATH. LISTEN CLOSELY.</p>
          </div>
        </div>
      )}

      {/* Loader appears after the welcome interaction */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {/* Main website */}
      <Navbar />

      <main id="top">
        <Hero />
        <ScentCollection />
        <CraftSection />
        <BrandStory />
      </main>

      <Footer />

      {/* Compact, collapsible audio player */}
      {audioEnabled && (
        <section
          className="story-player story-player--collapsible"
          aria-label="Narration controls"
        >
          <div className="story-player__top">
            <div className="story-player__identity">
              <span className="story-player__symbol" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </span>

              <div className="story-player__labels">
                <span className="story-player__title">
                  THE AFTER STORY
                </span>
                <span className="story-player__subtitle">
                  A moment to feel
                </span>
              </div>
            </div>

            {/* Gear: opens and closes the controls */}
            <button
              type="button"
              className="story-player__gear"
              aria-label={
                settingsOpen ? "Close audio controls" : "Open audio controls"
              }
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen((value) => !value)}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 3.1-.2-.1a1.7 1.7 0 0 0-1.8.1 1.7 1.7 0 0 0-.8 1.5v.2h-3.6v-.2a1.7 1.7 0 0 0-2.6-1.4l-.2.1L7 17.2l.1-.1a1.7 1.7 0 0 0-1.3-2.8H5.6v-3.6h.2a1.7 1.7 0 0 0 1.4-2.6l-.1-.2L9 4.8l.1.1a1.7 1.7 0 0 0 2.8-1.3v-.2h3.6v.2a1.7 1.7 0 0 0 2.6 1.4l.2-.1 1.8 3.1-.1.1a1.7 1.7 0 0 0 1.3 2.8h.2v3.6h-.2a1.7 1.7 0 0 0-1.9.5Z" />
              </svg>
            </button>
          </div>

          {/* Always-visible progress bar */}
          <input
            className="story-player__seek"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={seekAudio}
            aria-label="Narration progress"
            style={{
              "--audio-progress": `${
                duration > 0 ? (currentTime / duration) * 100 : 0
              }%`,
            }}
          />

          <div className="story-player__time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Exactly three icons in the collapsible bar */}
          <div
            className={`story-player__settings ${
              settingsOpen ? "is-open" : ""
            }`}
          >
            {/* 1. Mute / unmute */}
            <button
              type="button"
              className="story-player__control-icon"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute narration" : "Mute narration"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="m16 9 5 6m0-6-5 6" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                  <path d="M19 5a10 10 0 0 1 0 14" />
                </svg>
              )}
            </button>

            {/* 2. Play / pause */}
            <button
              type="button"
              className="story-player__control-icon story-player__control-play"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause narration" : "Play narration"}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 4.8a1 1 0 0 1 1.5-.86l11 6.2a1 1 0 0 1 0 1.72l-11 6.2A1 1 0 0 1 7 17.2V4.8Z" />
                </svg>
              )}
            </button>

            {/* 3. Collapse controls */}
            <button
              type="button"
              className="story-player__control-icon"
              onClick={() => setSettingsOpen(false)}
              aria-label="Collapse audio controls"
              title="Collapse"
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {audioError && (
            <p className="story-player__error" role="status">
              Audio could not be loaded. Check the MP3 file and path.
            </p>
          )}
        </section>
      )}

      {/* Back to top */}
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
