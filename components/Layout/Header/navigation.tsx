"use client";

import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
