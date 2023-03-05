import BurgerMenu from "./burgerMenu";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <BurgerMenu />
      <nav id="navbar">
        <ul>
          <li>
            <Link to="about" spy activeClass="selected">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" spy activeClass="selected">
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" spy activeClass="selected">
              Skills
            </Link>
          </li>
          <li>
            <Link to="jobs" spy activeClass="selected">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="blog" spy activeClass="selected">
              Blog
            </Link>
          </li>
          <li>
            <Link to="socials" spy activeClass="selected">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
