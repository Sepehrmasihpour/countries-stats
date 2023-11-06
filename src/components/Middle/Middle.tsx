import Country from "./Country";
import "./Middle.scss";

interface MiddleProps {
  updateChosenCountry: (chosenCountry: null | any[]) => void;
  data: any[];
  chosenCountry: any[] | null;
}

function Middle(props: MiddleProps) {
  const getCountryProps = (countryData: any) => ({
    flag: countryData.flags.svg,
    name: countryData.name,
    capital: countryData.capital,
    population: countryData.population,
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
      {!props.chosenCountry ? (
        <div className="Middle">
          {props.data.map((countryData) => (
            <Country key={countryData.name} {...getCountryProps(countryData)} />
          ))}
        </div>
      ) : (
        <Country {...getCountryProps(props.chosenCountry)} />
      )}
    </>
  );
}

export default Middle;
