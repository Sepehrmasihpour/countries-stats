import "./Top.scss";

interface SearchProps {
  searchValue: string | null;
  updateSearch: (value: string | null) => void;
}

function Search(props: SearchProps) {
  return <div className="Search"></div>;
}

export default Search;
