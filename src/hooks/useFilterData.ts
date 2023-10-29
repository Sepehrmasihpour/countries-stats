import { useMemo } from "react";

const useFilterData = (
  data: any[],
  chosenCountry: any[] | null,
  region: string,
  searchValue: string
) => {
  const filteredData = useMemo(() => {
    let newData = data;

    if (searchValue !== "") {
      newData = newData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (region !== "") {
      newData = newData.filter((item) =>
        item.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (chosenCountry) {
      newData = chosenCountry;
    }

    return newData;
  }, [region, searchValue, chosenCountry]);

  return filteredData;
};

export default useFilterData;
