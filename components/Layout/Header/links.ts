/**
 * The section list, shared by the desktop pill nav and the mobile sheet, so the
 * two can never drift apart. Order matters: useActiveSection walks it assuming
 * document order.
 */
export const navLinks = [
  { id: "home-page", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "blogs", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;

export const navIds = navLinks.map((link) => link.id);

/**
 * Root-relative rather than a bare `#id`, so the header still works from
 * /resume, where none of these sections exist.
 *
 * From the home page this is still a same-document fragment navigation — the
 * browser compares everything before the `#`, finds it identical, and scrolls
 * instead of reloading, so `scroll-behavior: smooth` keeps applying.
 */
export const sectionHref = (id: string) => `/#${id}`;
