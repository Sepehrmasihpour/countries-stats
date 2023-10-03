// Importing dependencies
import countryData from "./assets/data/data.json";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Top from "./components/Top/Top";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import "./styles/App.scss";
import "@fontsource-variable/nunito-sans";

function App() {
  const allCountries: any[] = countryData;
  const [renderedData, setRenderedData] = useState<any[]>(allCountries);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchValue, setSearch] = useState<string | null>(null);
  const [userChoosing, setChoosing] = useState<boolean>(false);
  const [region, setRegion] = useState<string | null>(null);
  const dataBeforeChoice = useRef<any[]>(renderedData);

  // Function to filter data by name
  const filterByName = (name: string, data: any[]) => {
    return data.filter((item: any) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  // Function to filter data by region
  const filterByRegion = (region: string, data: any[]) => {
    return data.filter((item: any) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  };

  // Update renderedData when region or search value change
  useEffect(() => {
    let newData = allCountries;
    if (searchValue !== null) {
      newData = filterByName(searchValue, newData);
    }
    if (region !== null) {
      newData = filterByRegion(region, newData);
    }
    setRenderedData(newData);
    dataBeforeChoice.current = newData;
  }, [region, searchValue]);

  // Restore previous data when user returns from country selection
  useEffect(() => {
    if (userChoosing === false) {
      setRenderedData(dataBeforeChoice.current);
    }
  }, [userChoosing]);

  // Handlers for various state updates
  const changeRenderedData = (data: any[]) => setRenderedData(data);
  const darkModeToggle = () => setDarkMode(!darkMode);
  const updateSearch = (value: string | null) => setSearch(value);
  const updateUserChoosing = () => setChoosing(!userChoosing);
  const updateRegion = (region: string | null) => setRegion(region);

  return (
    <div className={darkMode ? "dark-app" : "app"}>
      <div className="container">
        <Header darkModeToggle={darkModeToggle} />
        <Top
          backToggle={updateUserChoosing}
          updateSearch={updateSearch}
          changeRegion={updateRegion}
          searchValue={searchValue}
          region={region}
        />
        <Middle
          data={renderedData}
          updateData={changeRenderedData}
          didChoose={updateUserChoosing}
          userChoosing={userChoosing}
        />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
