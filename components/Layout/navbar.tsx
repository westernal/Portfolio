import BurgerMenu from "./burgerMenu";

const NavBar = () => {
  const selectNavItem = (e: any) => {
    const prevItem: any = document.getElementsByClassName("selected")[0];
    const selectedPage = document.getElementById(e.target.ariaValueText);
    const prevPage = document.getElementById(prevItem.ariaValueText);

    prevItem.classList.remove("selected");
    prevPage?.classList.remove("active-page");
    selectedPage?.classList.add("active-page");
    e.target.classList.add("selected");
  };
  return (
    <header className="flex">
      <BurgerMenu />
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
    </header>
  );
};

export default NavBar;
