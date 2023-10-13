interface headerProps {
  darkModeToggle: () => void;
}

function Header(props: headerProps) {
  return (
    <header>
      <div className="header-container">
        <h1>where in the world</h1>
      </div>
    </header>
  );
}

export default Header;
