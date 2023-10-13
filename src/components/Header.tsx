import darkMoon from "../assets/icons/moon-sharp.svg";
import lightMoon from "../assets/icons/moon-outline.svg";
import "./styles/Header.scss";
interface headerProps {
  darkModeToggle: () => void;
  darkMode: boolean;
}

function Header(props: headerProps) {
  return (
    <header id={props.darkMode ? "dark" : "light"}>
      <div className="header-container">
        <h1>where in the world</h1>
        <div className="dark-mode-toggle">
          <img
            src={props.darkMode ? darkMoon : lightMoon}
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
