import "./Middle.scss";

interface CountryProps {
  updateChosenCountry?: (chosenCountry: {}) => void;
  name: string;
  population: number;
  region: string;
  capital: string;
  topLevelDomain: [];
  nativeName: string;
  subRegion: string;
  currencies: [];
  languages: [];
  borderCountries: string[];
  flag: string;
  userIsChoosing: boolean;
}

function Country(props: CountryProps) {
  return (
    <>
      {props.userIsChoosing ? (
        <div
          className="country"
          id={props.name}
          onClick={() =>
            props.updateChosenCountry({
              name: props.name,
              capital: props.capital,
              population: props.population,
              region: props.region,
              subregion: props.subRegion,
              flags: { png: props.flag },
              topLevelDomain: props.topLevelDomain,
              nativeName: props.nativeName,
              currencies: props.currencies,
              languages: props.languages,
              borders: props.borderCountries,
            })
          }
        >
          <img src={props.flag} alt="" />
          <div className="preview">
            <h3>{props.name}</h3>
            <div className="details">
              <p>
                Population: <span>{props.population}</span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="country"> id={props.name}</div>
      )}
    </>
  );
}

export default Country;
