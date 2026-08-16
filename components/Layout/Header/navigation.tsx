"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { to: "home-page", label: "Home", href: "/" },
  { to: "experience", label: "Experience", href: "#experience" },
  { to: "about", label: "About", href: "#about" },
  { to: "blogs", label: "Writing", href: "#blogs" },
  { to: "contact", label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <nav id="navbar" aria-label="Sections">
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <ScrollLink
              activeClass="active"
              spy
              smooth
              offset={-70}
              duration={400}
              to={link.to}
              href={link.href}
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
