"use client";

import { useActiveSection } from "../../../hooks/useActiveSection";

const links = [
  { id: "home-page", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "blogs", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const active = useActiveSection(links.map((link) => link.id));

  // The burger toggles these classes directly on the DOM; match that here so
  // tapping a link on mobile closes the drawer instead of leaving it open.
  const closeMenu = () => {
    document.getElementById("burger")?.classList.remove("active");
    document.getElementById("navbar")?.classList.remove("show");
  };

  return (
    <nav id="navbar" aria-label="Sections">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {/* Plain anchors: html has `scroll-behavior: smooth` and
                `scroll-padding-top`, so the browser handles the offset scroll
                without a library. */}
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
              onClick={closeMenu}
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
