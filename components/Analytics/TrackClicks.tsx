"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics/react";

/**
 * One delegated listener for every `data-track` element on the page.
 *
 * The obvious alternative — an onClick per CTA — would turn the hero, the about
 * block, the header and the footer into client components for the sake of a
 * handful of calls, and the hero's payload is the one thing on this page worth
 * protecting. This costs a single listener and leaves all of them on the server.
 *
 * `data-track` is the event; the optional `data-track-location` rides along as a
 * property, so "how many people mailed me" and "from which section" are one
 * event rather than four.
 *
 * Nothing tracked here unloads the page: outbound links open a new tab, the mail
 * CTAs hand off to a mail client, and the three résumé links are same-tab
 * client-side navigations. The beacon always has time to leave.
 */
export default function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const origin = event.target;
      if (!(origin instanceof Element)) return;

      const element = origin.closest("[data-track]");
      const name = element?.getAttribute("data-track");
      if (!name) return;

      const location = element?.getAttribute("data-track-location");
      track(name, location ? { location } : undefined);
    };

    // Capture: a click on the <span> inside a link still has to reach here even
    // if something along the way stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
