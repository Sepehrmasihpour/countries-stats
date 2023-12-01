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

function Country(props: CountryProps) {
  type AnyObject = {
    [key: string]: any;
  };

  function getNames(obj: AnyObject): string[] {
    let names: string[] = [];
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        names = names.concat(getNames(obj[key] as AnyObject));
      } else if (key === "name") {
        names.push(obj[key] as string);
      }
      const currencies = (obj) => {
        let names: [] = [];
        for (let key in obj) {
          if (typeof obj[key] === "object" && obj[key] !== null) {
            names = names.concat(currencies(obj[key]));
          } else if (key === "name") {
            names.push(obj[key]);
          }
        }
        return names;
      };
    }
    return names;
  }

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
              currencies: getNames(props.currencies),
              languages: getNames(props.languages),
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
                Top level domain:
                <span>
                  {props.topLevelDomain.map((item: string, index) => (
                    <span key={index}> {item.slice(1)}</span>
                  ))}
                </span>
              </p>

              <p>
                Currencies:{" "}
                <span>
                  {props.currencies.map((item: string, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {props.languages.map((item: string, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
              </p>
            </div>
            <div className="border-countries">
              <p>
                Border Countries:{" "}
                {props.borderCountries.map((item: string, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;
