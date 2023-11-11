import "./Top.scss";
import backArrow from "./assets/arrow-back-sharp.svg";

interface BackProps {
  backToggle: (country: null) => void;
  darkMode: boolean;
}

function Back(props: BackProps) {
  return (
    <div
      onClick={() => props.backToggle(null)}
      className={props.darkMode ? "dark-back-button" : "back-button"}
    >
      <img src={backArrow} alt="arrow" />
      <p>Back</p>
    </div>
  );
}

export default Back;
