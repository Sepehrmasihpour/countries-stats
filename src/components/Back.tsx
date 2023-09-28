import "../styles/Back.scss";
import backArrow from "../assets/icons/arrow-back-sharp.svg";

interface BackProps {
  resetChosenCountry: () => void;
  darkMode: boolean;
}

function Back(props: BackProps) {
  return (
    <div className="top">
      <button
        className={props.darkMode ? "dark-back" : "back"}
        onClick={props.resetChosenCountry}
      >
        <img src={backArrow} alt="" />
        Back
      </button>
    </div>
  );
}

export default Back;
1;
