import { useEffect } from "react";
import BurgerMenu from "./burgerMenu";
import Image from "next/image";

const NavBar = () => {
  const selectNavItem = (e: any) => {
    const prevItem: any = document.getElementsByClassName("selected")[0];
    const selectedPage = document.getElementById(e.target.ariaValueText);
    const prevPage = document.getElementById(prevItem.ariaValueText);

    prevItem.classList.remove("selected");
    prevPage?.classList.remove("active-page");
    selectedPage?.classList.add("active-page");
    e.target.classList.add("selected");
    document.getElementsByClassName("burger")[0].classList.toggle("active");
    document.getElementById("navbar")?.classList.toggle("show");
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

  return (
    <header id="header">
      <BurgerMenu />

      <div className="header-icons flex">
        <a href="mailto:ali_navidi24@yahoo.com" className="social-icon">
          <Image
            src="/Images/email.svg"
            alt="Email"
            title="Email"
            id="Email"
            width={25}
            height={25}
          />
        </a>
        <a href="https://github.com/westernal" className="social-icon">
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
          <li
            onClick={selectNavItem}
            aria-valuetext="about"
            className="selected"
          >
            About
          </li>
          <li onClick={selectNavItem} aria-valuetext="projects">
            Projects
          </li>
          <li aria-valuetext="skills" onClick={selectNavItem}>
            Skills
          </li>
          <li aria-valuetext="jobs" onClick={selectNavItem}>
            Jobs
          </li>
          <li aria-valuetext="blog" onClick={selectNavItem}>
            Blogs
          </li>
          <li aria-valuetext="socials" onClick={selectNavItem}>
            Contact
          </li>
        </ul>
      </nav>
      <h1 id="fullname">
        ALI <span id="last-name">NAVIDI</span>
      </h1>
    </header>
  );
};

export default NavBar;
