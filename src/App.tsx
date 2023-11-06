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
  const [chosenCountry, setChosenCountry] = useState<null | any[]>(null);
  const [region, setRegion] = useState<string>("");

  // the data that will be rendered and cpassed to the components
  const renderedData = useFilterData(Data, chosenCountry, region, searchValue);
  const userIsChoosing = useMemo(() => {
    if (chosenCountry !== null) {
      return false;
    } else {
      return true;
    }
  }, [chosenCountry]);

  // Handlers for various state updates
  const darkModeToggle = () => setDarkMode(!darkMode);
  const updateSearch = (value: string) => setSearch(value);
  const updateRegion = (region: string) => setRegion(region);
  const updateChosenCountry = (chosenCountry: null | any[]) =>
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
        />
      </div>
    </div>
  );
}

export default App;
