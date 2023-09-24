import "@fontsource/nunito-sans";
import "../styles/Header.scss";
import moonOutline from "../assets/moon-outline.svg";
import moon from "../assets/moon-sharp.svg";

interface HeaderProps {
  darkMode: boolean;
  darkModeToggle: () => void;
}

function Header(props: HeaderProps) {
  return (
    <div className="header">
      <p>Where in the world?</p>
      <div onClick={props.darkModeToggle} className="darkmode-toggle">
        <img src={props.darkMode ? moon : moonOutline} alt="moon" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
