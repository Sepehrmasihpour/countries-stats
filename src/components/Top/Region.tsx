import { useState } from "react";
import arrow from "./assets/chevron-down-outline.svg";
import "./Top.scss";

interface RegionProps {
  region: string | null;
  changeRegion: (region: string) => void;
  darkMode: boolean;
}

function Region(props: RegionProps) {
  const [showRegions, setShowRegions] = useState(true);

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
    <div className={props.darkMode ? "dark-Region" : "Region"}>
      <div
        className="region-button"
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
          <div className="regions">
            <p
              id={
                detirmineChosenRegion(props.region, "america")
                  ? "chosen-country"
                  : "normal-country"
              }
              className="america"
              onClick={() => props.changeRegion("america")}
            >
              America
            </p>
            <p
              id={
                detirmineChosenRegion(props.region, "africa")
                  ? "chosen-country"
                  : "normal-country"
              }
              className="africa"
              onClick={() => props.changeRegion("africa")}
            >
              Africa
            </p>
            <p
              id={
                detirmineChosenRegion(props.region, "asia")
                  ? "chosen-country"
                  : "normal-country"
              }
              className="asia"
              onClick={() => props.changeRegion("asia")}
            >
              Asia
            </p>
            <p
              id={
                detirmineChosenRegion(props.region, "europe")
                  ? "chosen-country"
                  : "normal-country"
              }
              className="europe"
              onClick={() => props.changeRegion("europe")}
            >
              Europe
            </p>
            <p
              id={
                detirmineChosenRegion(props.region, "ocenia")
                  ? "chosen-country"
                  : "normal-country"
              }
              className="ocenia"
              onClick={() => props.changeRegion("ocenia")}
            >
              Ocenia
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Region;
