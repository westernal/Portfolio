import { useContext } from "react";
import BurgerMenu from "./burgerMenu";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import SocialIcons from "../../SocialIcons";
import { ThemeContext } from "../../../pages/_app";
import { DarkIcon, LightIcon } from "../../../utils/icons";

const Header = () => {
  const { isDark, SetIsDark } = useContext(ThemeContext);

  return (
    <header id="header">
      <BurgerMenu />

      <SocialIcons />

      <nav id="navbar">
        <ul>
          <li>
            <ScrollLink activeClass="active" spy to="home-page" href="/">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="active" spy to="skills" href="#skills">
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="active" spy to="about" href="#about">
              About
            </ScrollLink>
          </li>

          <li>
            <ScrollLink activeClass="active" spy to="jobs" href="#jobs">
              Jobs
            </ScrollLink>
          </li>

          <li>
            <ScrollLink activeClass="active" spy to="blogs" href="#blogs">
              Blogs
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="active" spy to="contact" href="#contact">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <Link href={"/"}>
          <h1 id="fullname">ALI</h1>
        </Link>

        <button
          className="theme-btn"
          onClick={() => SetIsDark(!isDark)}
          aria-label="Toggle theme button"
        >
          {isDark ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
