"use client";

import { DarkIcon, LightIcon } from "@/utils/icons";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [isLight, setIsLight] = useState(false);
  /** Bumped per click; used as a key so the swap animation replays each time. */
  const [swaps, setSwaps] = useState(0);

  // The inline script in layout.tsx has already applied the class before paint;
  // this just syncs the label to whatever it decided.
  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const changeTheme = () => {
    const next = !isLight;

    const root = document.documentElement;

    setIsLight(next);
    setSwaps((n) => n + 1);

    // Suppress transitions for the frame the tokens change in, or colour
    // transitions stall on the old palette — see the note in style.css. The
    // icon's motion is a keyframe animation, so it still plays.
    root.classList.add("theme-switching");
    root.classList.toggle("light", next);
    void root.offsetHeight;
    // A timer rather than requestAnimationFrame: rAF can be starved when the
    // tab isn't painting, which would leave transitions disabled for good.
    window.setTimeout(() => root.classList.remove("theme-switching"), 60);

    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // Private mode or blocked storage — the toggle still works for this visit.
    }
  };

  return (
    <button
      className="theme-btn"
      onClick={changeTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {/* Both icons are stacked; the root `.light` class picks which one shows.
          The changing key remounts the wrapper so the swap animation replays,
          and `swaps === 0` keeps it still on first paint. */}
      <span
        key={swaps}
        className={`theme-icon ${swaps > 0 ? "spinning" : ""}`}
      >
        <LightIcon className="icon-sun" />
        <DarkIcon className="icon-moon" />
      </span>
    </button>
  );
};

export default ThemeButton;
