import { useState, useCallback } from "react";
import arrow from "./assets/chevron-down-outline.svg";
import "./Top.scss";

// Defining the props for the Region component
interface RegionProps {
  region: string | null; // The currently selected region
  changeRegion: (region: string | null) => void; // Function to change the selected region
  darkMode: boolean; // Flag to indicate whether dark mode is enabled
}

// Defining the Region component
function Region(props: RegionProps) {
  // State to control the visibility of the region dropdown
  const [showRegions, setShowRegions] = useState(false);

  // Array of regions
  const regions = ["all", "america", "africa", "asia", "europe", "oceania"];

  // Function to determine if a region is the currently chosen one
  const determineChosenRegion = (
    chosenRegion: string | null,
    regionClass: string
  ) => {
    return chosenRegion === regionClass;
  };

  // Function to handle region click events
  const handleRegionClick = useCallback(
    (region: string) => {
      if (region === "all") {
        props.changeRegion("");
      } else {
        props.changeRegion(region);
      }
    },
    [props.changeRegion]
  );

  // Rendering the Region component
  return (
    <div className={props.darkMode ? "dark-Region" : "Region"}>
      {/* Region button to toggle the visibility of the region dropdown */}
      <div
        className="region-button"
        onClick={() => setShowRegions(!showRegions)}
      >
        <p>Filter by Region</p>
        {/* Arrow image indicating the dropdown state */}
        <img
          className={showRegions ? "down-arrow" : "up-arrow"}
          src={arrow}
          alt="region arrow"
        />
      </div>
      {/* Region dropdown */}
      {showRegions && (
        <div className="region-list">
          <div className="regions">
            {/* Mapping over the regions array to render a paragraph for each region */}
            {regions.map((region) => (
              <p
                key={region}
                id={
                  determineChosenRegion(props.region, region)
                    ? "chosen-country"
                    : "normal-country"
                }
                className={region}
                onClick={() => handleRegionClick(region)}
              >
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Region;
