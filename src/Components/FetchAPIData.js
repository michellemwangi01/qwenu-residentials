import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Listing_Details from "./Listing_Details";

import { createContext } from "react";

export const listingsDataContext = createContext();
const FetchAPIData = ({ children }) => {
  const [listingsData, setListingsData] = useState([]);
  const [listingData, setListingData] = useState({});

  useEffect(() => {
    fetch("https://db-qwenuresidentials.onrender.com/listings", {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "47f6ed740fmsh71585dcfcf20c8bp1af58fjsnd4a08f796f4f",
      //   "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      // },
    })
      .then((res) => res.json())
      .then((data) => setListingsData(data));
  }, []);
  const values = { listingsData };

  return (
    <div>
      <listingsDataContext.Provider value={values}>
        {children}
      </listingsDataContext.Provider>
    </div>
  );
};

export default FetchAPIData;
