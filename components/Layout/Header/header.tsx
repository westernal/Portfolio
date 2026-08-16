"use client";

import { useEffect, useState } from "react";
import BurgerMenu from "./burgerMenu";
import SocialIcons from "../../SocialIcons";
import Navigation from "./navigation";
import ThemeButton from "./themeButton";
import { mailtoHref, profile } from "../../../data/profile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // The header floats over the content; without a backdrop it collides with
  // whatever scrolls underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "header-scrolled" : ""}>
      <BurgerMenu />

      <SocialIcons className="header-icons" />

      <Navigation />

      <div className="header-right flex">
        <a href={mailtoHref} className="btn btn-small btn-primary header-cta">
          Hire me
        </a>

        <p id="fullname" aria-hidden="true">
          {profile.firstName.toUpperCase()}
        </p>

        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
