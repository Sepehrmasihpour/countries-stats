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
  darkMode: boolean;
}

interface currency {
  name: string;
}
interface language {
  name: string;
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
          <img src={props.flag} alt="flag" />
          <div className="preview">
            <h3>{props.name}</h3>
            <div className="details">
              <p>
                Population: <span>{props.population.toLocaleString()}</span>
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
        // ! Pay attention bbellow
        // TODO For this part remember to add the top level domain , currencies , and languages segment ,
        // TODO Find out whats the problem and why I can't render them noe
        <div className="country" id="chosen-country">
          <img src={props.flag} alt="flag" />
          <div className="details">
            <h1>{props.name}</h1>

            <div className="stats">
              <p>
                Native Name: <span>{props.nativeName}</span>
              </p>
              <p>
                Population: <span>{props.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Sub Region: <span>{props.subRegion}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
              <p>
                Top Level Domain:{" "}
                {props.topLevelDomain.map((item: string, index) => (
                  <span key={index}>
                    {item.substring(1)}
                    {index !== props.topLevelDomain.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p>
                currencies:{" "}
                {props.currencies.map((item: currency, index) => (
                  <span key={index}>
                    {item.name}
                    {index !== props.currencies.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p>
                Languages:{" "}
                {props.languages.map((item: language, index) => (
                  <span key={index}>
                    {item.name}
                    {index !== props.languages.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            <div
              className={
                props.darkMode ? "dark-border-countries" : "border-countries"
              }
            >
              <p>Border Countries:</p>
              <div className="border-countries-names">
                {props.borderCountries.length === 0 ? (
                  <span id="no-borders">None</span>
                ) : (
                  props.borderCountries.map((item: string, index) => (
                    <span key={index}>{item}</span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;
