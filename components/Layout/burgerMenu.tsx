const BurgerMenu = () => {
  const openNavBar = () => {
    document.getElementsByClassName("burger")[0].classList.toggle("active");
    document.getElementById("navbar")?.classList.toggle("show");
  };
  return (
    <div className="burger" onClick={openNavBar}>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
