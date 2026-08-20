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
