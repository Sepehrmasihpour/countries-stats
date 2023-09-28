import { useState } from "react";
import Header from "./components/Header";
import Country from "./components/Country";
import Back from "./components/Back";
import Search from "./components/Search";
import data from "./assets/data/data.json";
import "@fontsource-variable/nunito-sans";
import "./App.scss";
import AllCountries from "./components/AllCountries";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chosenCountry, setCountry] = useState<object | null>(data[0]);
  const [searchValue, setSearch] = useState("");

  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  const resetChosenCountry = () => {
    setCountry(null);
  };

  // Store the "container" class name in a constant to avoid creating a new string on each render
  const containerClassName = darkMode ? "dark-container" : "container";

  return (
    <>
      {/* Use the constant for the class name */}
      <div className={containerClassName}>
        {/* Pass the darkMode and darkModeToggle functions directly to the Header component */}
        <Header darkMode={darkMode} darkModeToggle={darkModeToggle} />
        {chosenCountry === null ? (
          <Search />
        ) : (
          <Back resetChosenCountry={resetChosenCountry} darkMode={darkMode} />
        )}
        <main>
          {chosenCountry === null ? (
            <AllCountries data={data}>
              <Country />
            </AllCountries>
          ) : (
            <Country chosenCountry={chosenCountry} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
