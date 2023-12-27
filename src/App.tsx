// Importing dependencies
import Data from "./assets/data/data.json";
import { useState, useMemo } from "react";
import useFilterData from "./hooks/useFilterData";
import Header from "./components/Header";
import Top from "./components/Top/Top";
import Middle from "./components/Middle/Middle";
import "./components/styles/App.scss";
import "@fontsource-variable/nunito-sans";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchValue, setSearch] = useState<string>("");
  const [chosenCountry, setChosenCountry] = useState<null | {}>(null);
  const [region, setRegion] = useState<string>("");
  const [alpha3Code, setAlpha3Code] = useState<string>("");

  const renderedData = useFilterData(Data, chosenCountry, region, searchValue);
  const userIsChoosing = useMemo(() => {
    if (chosenCountry !== null) {
      return false;
    } else {
      return true;
    }
  }, [chosenCountry]);

  useMemo(() => {
    if (alpha3Code !== "" && alpha3Code !== "none") {
      const country = Data.filter((country) => {
        return country.alpha3Code === alpha3Code;
      });
      setChosenCountry(country[0]);
      setAlpha3Code("");
      console.log(alpha3Code);
    }
  }, [alpha3Code]);

  // Handlers for various state updates
  const darkModeToggle = () => setDarkMode(!darkMode);
  const updateSearch = (value: string) => setSearch(value);
  const updateRegion = (region: string) => setRegion(region);
  const updateAlpha3Code = (alpha3Code: string) => setAlpha3Code(alpha3Code);
  const updateChosenCountry = (chosenCountry: null | {}) =>
    setChosenCountry(chosenCountry);

  return (
    <div className={darkMode ? "dark-app" : "app"}>
      <div className="container">
        <Header darkMode={darkMode} darkModeToggle={darkModeToggle} />
        <Top
          darkMode={darkMode}
          backToggle={updateChosenCountry}
          updateSearch={updateSearch}
          changeRegion={updateRegion}
          searchValue={searchValue}
          userIsChoosing={userIsChoosing}
          region={region}
        />
        <Middle
          data={renderedData}
          updateChosenCountry={updateChosenCountry}
          chosenCountry={chosenCountry}
          userIsChoosing={userIsChoosing}
          darkMode={darkMode}
          updateAlpha3Code={updateAlpha3Code}
        />
      </div>
    </div>
  );
}

export default App;
