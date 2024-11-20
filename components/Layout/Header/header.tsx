import { useContext, useEffect } from "react";
import BurgerMenu from "./burgerMenu";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import SocialIcons from "../../SocialIcons";
import { ThemeContext } from "../../../pages/_app";
import { DarkIcon, LightIcon } from "../../../utils/icons";

const Header = () => {
  const router = useRouter();
  const { isDark, SetIsDark } = useContext(ThemeContext);

  const closeMenus = () => {
    document.getElementsByClassName("burger")[0].classList.remove("active");
    document.getElementById("navbar")?.classList.remove("show");
  };

  const disablePreviousNavItem = () => {
    const navItem: any = document.getElementsByClassName("selected")[0];
    navItem?.classList.remove("selected");
  };

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    const navbar: any = document.getElementById("header");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("header-scrolled");
      } else {
        navbar.classList.remove("header-scrolled");
      }
    }
  }, []);

  useEffect(() => {
    const selectNavItem = () => {
      const activePage = document.getElementById(router.pathname.split("/")[1]);
      activePage?.classList.add("selected");
      if (!activePage)
        document.getElementById("home")?.classList.add("selected");
    };

    if (router.isReady) {
      disablePreviousNavItem();
      selectNavItem();
      closeMenus();
    }
  }, [router.isReady, router.pathname, router.query]);

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
            <ScrollLink activeClass="active" spy to="projects" href="#projects">
              Projects
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

        <button className="theme-btn" onClick={() => SetIsDark(!isDark)}>
          {isDark ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
