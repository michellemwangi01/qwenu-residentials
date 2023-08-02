import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

export const listingsDataContext = React.createContext();
export const listingDetailsContext = React.createContext();
const renderAPIListings = `https://db-qwenuresidentials.onrender.com/listings`;
const renderAPIListingDetails = `https://db-qwenuresidentials.onrender.com/listingDetails`;
const localAPIListings = ` http://localhost:4000/listings`;
const localAPIListingDetails = `http://localhost:4000/listingDetails`;
const APIGoogleURL = `https://rapidapi.com/apidojo/api/bayut?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel`;

const FetchAPIData = () => {
  const [listingsData, setListingsData] = useState([]);

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
  // console.log(listingsData);
  return (
    <div>
      <listingsDataContext.Provider
        value={listingsData}
      ></listingsDataContext.Provider>
    </div>
  );
};

export default FetchAPIData;
