// Importing dependencies
import Data from "./assets/data/data.json";
import { useState } from "react";
import useFilterData from "./hooks/useFilterData";
import Header from "./components/Header";
import Top from "./components/Top/Top";
import Middle from "./components/Middle/Middle";
import "./components/styles/App.scss";
import "@fontsource-variable/nunito-sans";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchValue, setSearch] = useState<string | null>(null);
  const [chosenCountry, setChosenCountry] = useState<null | any[]>(null);
  const [region, setRegion] = useState<string | null>(null);

  // the data that will be rendered and cpassed to the components
  const renderedData = useFilterData(Data, chosenCountry, region, searchValue);

  // Handlers for various state updates
  const darkModeToggle = () => setDarkMode(!darkMode);
  const updateSearch = (value: string | null) => setSearch(value);
  const updateRegion = (region: string | null) => setRegion(region);
  const updateChosenCountry = (chosenCountry: null | any[]) =>
    setChosenCountry(chosenCountry);

  return (
    <div className={darkMode ? "dark-app" : "app"}>
      <div className="container">
        <Header darkModeToggle={darkModeToggle} />
        <Top
          backToggle={updateChosenCountry}
          updateSearch={updateSearch}
          changeRegion={updateRegion}
          searchValue={searchValue}
          region={region}
        />
        <Middle
          data={renderedData}
          updateChosenCountry={updateChosenCountry}
          chosenCountry={chosenCountry}
        />
      </div>
    </div>
  );
}

export default App;
