import "./Middle.scss";

interface CountryProps {
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
}

function Country(props: CountryProps) {
  return (
    <div className="country" id={props.name}>
      <img src={props.flag} alt="" />
    </div>
  );
}

export default Country;
