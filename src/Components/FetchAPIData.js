import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Listing_Details from "./Listing_Details";

import { createContext } from "react";
// export const listingsDataContext = React.createContext();
// export const listingDetailsContext = React.createContext();
const renderAPIListings = `https://db-qwenuresidentials.onrender.com/listings`;
const renderAPIListingDetails = `https://db-qwenuresidentials.onrender.com/listingDetails`;
const localAPIListings = ` http://localhost:4000/listings`;
const localAPIListingDetails = `http://localhost:4000/listingDetails`;
const APIGoogleURL = `https://rapidapi.com/apidojo/api/bayut?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel`;

export const listingsDataContext = createContext();
const FetchAPIData = ({ children }) => {
  const [listingsData, setListingsData] = useState([]);
  // const [listingData, setListingData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/listings", {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "47f6ed740fmsh71585dcfcf20c8bp1af58fjsnd4a08f796f4f",
      //   "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      // },
    })
      .then((res) => res.json())
      .then((data) => setListingsData(data));
  }, []);
  // console.log(listingsData);
  const values = { listingsData };
  // console.log(listingsData);
  return (
    <div>
      <listingsDataContext.Provider value={values}>
        {children}
      </listingsDataContext.Provider>
    </div>
  );
};

export default FetchAPIData;
