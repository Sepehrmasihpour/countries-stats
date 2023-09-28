import { JSXElementConstructor } from "react";
import "../styles/AllCountries.scss";

interface AllCountriesProps {
  data: object;
  children: JSXElementConstructor<{}>;
}

function AllCountries(props: AllCountriesProps) {
  return <div></div>;
}

export default AllCountries;
