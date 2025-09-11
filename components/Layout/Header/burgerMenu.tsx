"use client";

const BurgerMenu = () => {
  const openNavBar = () => {
    document.getElementById("burger")?.classList.toggle("active");
    document.getElementById("navbar")?.classList.toggle("show");
  };
  return (
    <button
      id="burger"
      className="burger"
      aria-label="Burger Menu"
      onClick={openNavBar}
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
