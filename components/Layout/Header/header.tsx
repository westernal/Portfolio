import { useEffect } from "react";
import BurgerMenu from "./burgerMenu";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

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

      <div className="header-icons flex">
        <a
          href="mailto:ali_navidi24@yahoo.com"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/Images/email.svg"
            alt="Email"
            title="Email"
            id="Email"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://github.com/westernal"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/Images/github.svg"
            alt="Github"
            title="Github"
            id="Github"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-navidi/"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/Images/linkedin.svg"
            alt="LinkedIn"
            title="LinkedIn"
            id="LinkedIn"
            width={25}
            height={25}
          />
        </a>
      </div>
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

      <Link href={"/"}>
        <h1 id="fullname">ALI</h1>
      </Link>
    </header>
  );
};

export default Header;
