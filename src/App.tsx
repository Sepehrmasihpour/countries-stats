import { useState } from "react";
import Header from "./components/Header";
import "@fontsource-variable/nunito-sans";
import "./App.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  // Store the "container" class name in a constant to avoid creating a new string on each render
  const containerClassName = darkMode ? "dark-container" : "container";

  return (
    <>
      {/* Use the constant for the class name */}
      <div className={containerClassName}>
        {/* Pass the darkMode and darkModeToggle functions directly to the Header component */}
        <Header darkMode={darkMode} darkModeToggle={darkModeToggle} />
      </div>
    </>
  );
}

export default App;
