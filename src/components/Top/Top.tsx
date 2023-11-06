import Search from "./Search";
import Back from "./Back";
import Region from "./Region";
import "./Top.scss";

interface TopProps {
  //because the backToggle only has the job of going back to the main page the value is null
  backToggle: (country: null) => void;
  updateSearch: (value: string) => void;
  changeRegion: (region: string) => void;
  userIsChoosing: boolean;
  darkMode: boolean;
  searchValue: string;
  region: string;
}

// TODO : find the correct type for the searchEventHandler pram and secure its type

function Top(props: TopProps) {
  const searchEventHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = value.target.value;
    props.updateSearch(searchValue);
  };
  return (
    <div className="top">
      {props.userIsChoosing ? (
        <div className="filter-section">
          <Search
            searchValue={props.searchValue}
            updateSearch={searchEventHandler}
            darkMode={props.darkMode}
          />
          <Region
            region={props.region}
            changeRegion={props.changeRegion}
            darkMode={props.darkMode}
          />
        </div>
      ) : (
        <>
          <Back backToggle={props.backToggle} darkMode={props.darkMode} />
        </>
      )}
    </div>
  );
}

export default Top;
