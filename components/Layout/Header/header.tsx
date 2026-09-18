"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./mobileNav";
import SocialIcons from "../../SocialIcons";
import Navigation from "./navigation";
import ThemeButton from "./themeButton";
import { profile } from "../../../data/profile";

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
      <MobileNav />

      <SocialIcons className="header-icons" />

      <Navigation />

      <div className="header-right flex">
        {/* The résumé rather than a mailto. A persistent CTA is aimed at someone
            still deciding, and `mailto:` asks them to open a mail client and
            write a cold message — email is the end of the funnel, and it already
            has the hero, the contact section and the social row. */}
        <Link
          href="/resume"
          className="btn btn-small btn-primary header-cta"
          prefetch={false}
          data-track="resume_opened"
          data-track-location="header"
        >
          Résumé
        </Link>

        {/* The conventional way home, and the only one on /resume besides the
            in-page button. It was decorative — and `aria-hidden` — while the
            nav's own "Home" was the only route to the top of the page. */}
        <Link href="/" id="fullname" aria-label={`${profile.name} — home`}>
          {profile.firstName.toUpperCase()}
        </Link>

        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
