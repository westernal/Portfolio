"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section the reader is currently looking at.
 *
 * Replaces react-scroll's `spy`, which marks a section active only once its
 * top crosses the scroll line. The last section on a page is usually shorter
 * than the viewport, so its top never reaches that line and it can never win —
 * on this site #contact starts below the maximum scroll position entirely.
 * Hence the explicit bottom-of-page case below.
 *
 * @param ids     Section element ids, in document order.
 * @param offset  Height of the fixed header, so a section counts as active
 *                once it reaches the bottom of the header rather than the very
 *                top of the window.
 */
export function useActiveSection(ids: string[], offset = 90) {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key.split("|");
    let frame = 0;

    const pick = () => {
      frame = 0;

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;

      // Within a couple of pixels of the end: the final section is as active as
      // it will ever get, whether or not its top reached the line.
      if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        setActive(sectionIds[sectionIds.length - 1] ?? "");
        return;
      }

      const line = window.scrollY + offset + 1;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }

      setActive(current);
    };

    // Scroll fires far more often than the value can change; coalesce to a frame.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    // Straight to pick(), not through the frame: a hidden tab starves
    // requestAnimationFrame, so coming back to the tab would otherwise leave
    // the nav showing whatever section was active when it was backgrounded.
    const onVisible = () => {
      if (!document.hidden) pick();
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [key, offset]);

  return active;
}
