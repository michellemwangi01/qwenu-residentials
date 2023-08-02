import React from "react";
import { listingsDataContext } from "./FetchAPIData";

const Listings_Filter = () => {
  const { listingsData } = useContext(listingsDataContext);
  console.log(listingsData);

  return <div>Listings_Filter</div>;
};

export default Listings_Filter;
