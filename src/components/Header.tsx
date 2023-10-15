import darkMoon from "../assets/icons/moon-sharp.svg";
import lightMoon from "../assets/icons/moon-outline.svg";
import "./styles/Header.scss";
interface headerProps {
  darkModeToggle: () => void;
  darkMode: boolean;
}

function Header(props: headerProps) {
  return (
    <header id={props.darkMode ? "dark-header" : "light-header"}>
      <div className="header-container">
        <p id="logo">Where in the world</p>
        <div className="dark-mode-toggle">
          <img
            src={props.darkMode ? lightMoon : darkMoon}
            onClick={props.darkModeToggle}
            alt="dark/light moon"
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
