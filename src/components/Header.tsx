//note to self change the onclick function scope from darkmode-togle element to the img elementr inside it

import "@fontsource/nunito-sans";
import "../styles/Header.scss";
import moon from "../assets//icons/moon-sharp.svg";
import moonOutline from "../assets/icons/moon-outline.svg";

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
    <header className={headerClassName}>
      <p>Where in the world?</p>
      {/* The dark mode toggle button. When clicked, it calls the darkModeToggle function passed in as a prop. */}
      <div className="darkmode-toggle">
        {/* The image changes based on the dark mode state. */}
        <img
          src={darkMode ? moon : moonOutline}
          onClick={darkModeToggle}
          alt="moon"
        />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
