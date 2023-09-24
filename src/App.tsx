import { useState } from "react";
import Header from "./components/Header";
import "@fontsource-variable/nunito-sans"; // Import the Nunito Sans Variable font
import "./App.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <>
      <div className={darkMode ? "dark-container" : "container"}>
        <Header darkMode={darkMode} darkModeToggle={darkModeToggle} />
      </div>
    </>
  );
}

export default App;
