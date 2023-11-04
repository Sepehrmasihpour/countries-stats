import { useState } from "react";
import arrow from "./assets/chevron-down-outline.svg";
import "./Top.scss";

interface RegionProps {
  region: string | null;
  changeRegion: (region: string) => void;
  darkMode: boolean;
}

function Region(props: RegionProps) {
  const [showRegions, setShowRegions] = useState(false);
  const [chosenRegion, setChosenRegion] = useState<string | null>(null);

  const detirmineChosenRegion = (
    chosenRegion: string | null,
    regionClass: string
  ) => {
    if (!chosenRegion) {
      return false;
    } else {
      if (chosenRegion === regionClass) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className={props.darkMode ? "Region" : "dark-Region"}>
      <div
        className="filter-button"
        onClick={() => setShowRegions(!showRegions)}
      >
        <p>Filter by Region</p>
        <img
          className={showRegions ? "down-arrow" : "up-arrow"}
          src={arrow}
          alt="region arrow"
        />
      </div>
      {showRegions && (
        <div className="region-list">
          <p
            id={
              detirmineChosenRegion(chosenRegion, "america")
                ? "chosen-country"
                : "normal-country"
            }
            className="america"
            onClick={() => setChosenRegion("america")}
          >
            America
          </p>
          <p
            id={
              detirmineChosenRegion(chosenRegion, "africa")
                ? "chosen-country"
                : "normal-country"
            }
            className="africa"
            onClick={() => setChosenRegion("africa")}
          >
            Africa
          </p>
          <p
            id={
              detirmineChosenRegion(chosenRegion, "asia")
                ? "chosen-country"
                : "normal-country"
            }
            className="asia"
            onClick={() => setChosenRegion("asia")}
          >
            Asia
          </p>
          <p
            id={
              detirmineChosenRegion(chosenRegion, "europe")
                ? "chosen-country"
                : "normal-country"
            }
            className="europe"
            onClick={() => setChosenRegion("europe")}
          >
            Europe
          </p>
          <p
            id={
              detirmineChosenRegion(chosenRegion, "ocenia")
                ? "chosen-country"
                : "normal-country"
            }
            className="ocenia"
            onClick={() => setChosenRegion("ocenia")}
          >
            Ocenia
          </p>
        </div>
      )}
    </div>
  );
}

export default Region;
