import { useEffect } from "react";
import BurgerMenu from "./burgerMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const selectNavItem = (e: any) => {
    const prevItem: any = document.getElementsByClassName("selected")[0];
    prevItem?.classList.remove("selected");
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

  useEffect(() => {
    if (router.isReady) {
      const activePage = document.getElementById(router.pathname.split("/")[1]);
      activePage?.classList.add("selected");
      if (!activePage)
        document.getElementById("about")?.classList.add("selected");
    }
  }, [router.isReady]);

  return (
    <header id="header">
      <BurgerMenu />

      <div className="header-icons flex reveal">
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
            <Link href="/" onClick={selectNavItem} id="about">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={selectNavItem} id="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" id="skills" onClick={selectNavItem}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/jobs" id="jobs" onClick={selectNavItem}>
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/blogs" id="blog" onClick={selectNavItem}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" id="socials" onClick={selectNavItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="reveal" id="fullname">
        ALI <span id="last-name">NAVIDI</span>
      </h1>
    </header>
  );
};

export default Header;
