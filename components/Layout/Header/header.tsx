import BurgerMenu from "./burgerMenu";
import SocialIcons from "../../SocialIcons";
import Navigation from "./navigation";
import ThemeButton from "./themeButton";

const Header = () => {
  return (
    <header id="header">
      <BurgerMenu />

      <SocialIcons />

      <Navigation />

      <div className="flex">
        <p id="fullname">ALI</p>

        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
