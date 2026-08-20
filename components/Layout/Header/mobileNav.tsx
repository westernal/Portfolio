"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SocialIcons from "../../SocialIcons";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { mailtoHref, profile } from "../../../data/profile";
import { navIds, navLinks } from "./links";

/**
 * The mobile menu: a burger that opens a full-screen sheet.
 *
 * State lives in React rather than in `classList.toggle` calls on ids, which is
 * what let the old drawer get stuck open — a link could close the panel without
 * resetting the button, so the two disagreed about whether the menu was open.
 *
 * The whole thing is hidden above 950px with `display: none`, so the links here
 * are never a duplicate of the desktop nav in the accessibility tree.
 */
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navIds);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        burgerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      // Keep Tab inside the header while the sheet covers the page. The query
      // runs over the whole header, not just this component: the brand and the
      // theme toggle stay painted above the sheet, so they have to stay
      // reachable too. Anything the breakpoint has hidden has no client rect
      // and is filtered out rather than becoming an invisible tab stop.
      const focusables = Array.from(
        document
          .getElementById("header")
          ?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ??
          [],
      ).filter((el) => el.getClientRects().length > 0);

      if (!focusables.length) return;

      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Locks the page behind the sheet; removed in the cleanup so an unmount
    // mid-animation can't leave the body unscrollable.
    document.body.classList.add("menu-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [open, close]);

  // A resize past the breakpoint hides the sheet with CSS; drop the state too,
  // so the body scroll lock goes with it.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 951px)");
    const onChange = () => query.matches && setOpen(false);

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="mobile-nav">
      <button
        ref={burgerRef}
        type="button"
        className={`burger ${open ? "active" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="burger-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Kept mounted so the fade out can play; `inert` while closed takes it
          out of the tab order and the accessibility tree at the same time. */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        inert={!open}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <nav className="mobile-menu-inner" aria-label="Sections">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? "active" : undefined}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href={mailtoHref}
              className="btn btn-primary mobile-menu-cta"
              onClick={close}
            >
              Hire me
            </a>

            <SocialIcons className="mobile-menu-socials" />

            <p className="mobile-menu-meta">
              {profile.location} · {profile.timezone}
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
