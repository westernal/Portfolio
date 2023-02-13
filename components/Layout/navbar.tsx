import BurgerMenu from "./burgerMenu";

const NavBar = () => {
  const selectNavItem = (event: any) => {
    const lastSelectedNavItem = document.getElementById("selected");
    lastSelectedNavItem?.removeAttribute("id");
    event.target.setAttribute("id", "selected");
  };
  return (
    <>
      <BurgerMenu />
      <nav id="navbar">
        <a href="#about" id="selected" onClick={selectNavItem}>
          About
        </a>
        <a href="#projects" onClick={selectNavItem}>
          Projects
        </a>
        <a href="#skills" onClick={selectNavItem}>
          Skills
        </a>
        <a href="#jobs" onClick={selectNavItem}>
          Jobs
        </a>
        <a href="#blog" onClick={selectNavItem}>
          Blog
        </a>
        <a href="#socials" onClick={selectNavItem}>
          Contact
        </a>
      </nav>
    </>
  );
};

export default NavBar;
