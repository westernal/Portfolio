const BurgerMenu = () => {
  const openNavBar = () => {
    document.getElementsByClassName("burger")[0].classList.toggle("active");
    document.getElementById("navbar")?.classList.toggle("show");
  };
  return (
    <button className="burger" aria-label="Burger Menu" onClick={openNavBar}>
      <span></span>
    </button>
  );
};

export default BurgerMenu;
