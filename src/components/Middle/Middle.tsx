import Country from "./Country";
import "./Middle.scss";

interface MiddleProps {
  updateChosenCountry: (chosenCountry: {}) => void;
  data: any[];
  chosenCountry: any | null;
  userIsChoosing: boolean;
  darkMode: boolean;
}

function Middle(props: MiddleProps) {
  const getCountryProps = (countryData: any) => ({
    flag: countryData.flags.svg,
    name: countryData.name,
    capital: countryData.capital,
    population: countryData.population,
    alpha2Code: "AF",

    region: countryData.region,
    topLevelDomain: countryData.topLevelDomain,
    nativeName: countryData.nativeName,
    subRegion: countryData.subregion,
    currencies: countryData.currencies,
    languages: countryData.languages,
    borderCountries: countryData.borders,
  });

  return (
    <>
      {props.userIsChoosing ? (
        <div className={props.darkMode ? "dark-Middle" : "Middle"}>
          {props.data.map((countryData) => (
            <Country
              key={countryData.name}
              {...getCountryProps(countryData)}
              updateChosenCountry={props.updateChosenCountry}
              userIsChoosing={props.userIsChoosing}
            />
          ))}
        </div>
      ) : (
        <Country
          {...getCountryProps(props.chosenCountry)}
          userIsChoosing={props.userIsChoosing}
        />
      )}
    </>
  );
}

export default Middle;
