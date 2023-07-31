import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

export const listingsDataContext = React.createContext();
export const listingDetailsContext = React.createContext();

const APIGoogleURL = `https://rapidapi.com/apidojo/api/bayut?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel`;

const FetchAPIData = () => {
  const [listingsData, setListingsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "47f6ed740fmsh71585dcfcf20c8bp1af58fjsnd4a08f796f4f",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setListingsData(data.hits));
  }, []);
  return (
    <div>
      <listingsDataContext.Provider value={listingsData}>
        <NavBar />
      </listingsDataContext.Provider>
    </div>
  );
};

export default FetchAPIData;
