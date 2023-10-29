import searchIcon from "./assets/search-outline.svg";
import { ChangeEvent } from "react";
import "./Top.scss";

interface SearchProps {
  updateSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  darkMode: boolean;
}

function Search(props: SearchProps) {
  return (
    <div className={props.darkMode ? "dark-search-bar" : "search-bar"}>
      <div className="img-container">
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={props.searchValue}
        onChange={(Value) => props.updateSearch(Value)}
      />
    </div>
  );
}

export default Search;
