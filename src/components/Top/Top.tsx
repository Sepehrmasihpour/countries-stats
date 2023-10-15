import Search from "./Search";
import Back from "./Back";
import Region from "./Region";
import "./Top.scss";

interface TopProps {
  //because the backToggle only has the job of going back to the main page the value is null
  backToggle: (country: null) => void;
  updateSearch: (value: string | null) => void;
  changeRegion: (region: string | null) => void;
  userIsChoosing: boolean;
  searchValue: string | null;
  region: string | null;
  darkMode: boolean;
}

function Top(props: TopProps) {
  return (
    <div className="top">
      {props.userIsChoosing ? (
        <>
          <Back backToggle={props.backToggle} darkMode={props.darkMode} />
        </>
      ) : (
        <>
          <Search
            searchValue={props.searchValue}
            updateSearch={props.updateSearch}
          />
          <Region region={props.region} changeRegion={props.changeRegion} />
        </>
      )}
    </div>
  );
}

export default Top;
