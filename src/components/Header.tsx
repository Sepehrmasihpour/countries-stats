// Header Component
import "@fontsource/nunito-sans";
import "../styles/Header.scss";
import moon from "../assets//moon-sharp.svg";
import moonOutline from "../assets/moon-outline.svg";

// This interface defines the props that the Header component expects.
interface HeaderProps {
  darkMode: boolean;
  darkModeToggle: () => void;
}

// This is the Header component. It displays a title and a dark mode toggle button.
function Header({ darkMode, darkModeToggle }: HeaderProps) {
  // The class name for the header changes based on the dark mode state.
  const headerClassName = darkMode ? "header-darkMode" : "header";

  return (
    <div className={headerClassName}>
      <p>Where in the world?</p>
      {/* The dark mode toggle button. When clicked, it calls the darkModeToggle function passed in as a prop. */}
      <div onClick={darkModeToggle} className="darkmode-toggle">
        {/* The image changes based on the dark mode state. */}
        <img src={darkMode ? moon : moonOutline} alt="moon" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
