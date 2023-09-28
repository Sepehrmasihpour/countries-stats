import "../styles/Country.scss";

interface CountryProps {
  chosenCountry: object | null;
}

function Country(props: CountryProps) {
  return (
    <div className="country-container">
      <main className="country-details"></main>
    </div>
  );
}

export default Country;
