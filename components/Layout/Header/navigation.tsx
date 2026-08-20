"use client";

import { useActiveSection } from "../../../hooks/useActiveSection";
import { navIds, navLinks } from "./links";

/**
 * The desktop pill nav. Below 950px it is `display: none` — which also takes it
 * out of the accessibility tree — and the sheet in mobileNav.tsx takes over.
 */
const Navigation = () => {
  const active = useActiveSection(navIds);

  return (
    <nav id="navbar" aria-label="Sections">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            {/* Plain anchors: html has `scroll-behavior: smooth` and
                `scroll-padding-top`, so the browser handles the offset scroll
                without a library. */}
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
