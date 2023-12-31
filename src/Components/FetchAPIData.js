import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Listing_Details from "./Listing_Details";

import { createContext } from "react";

export const listingsDataContext = createContext();
// export const bookingsDataContext = createContext();

const FetchAPIData = ({ children }) => {
  const [listingsData, setListingsData] = useState([]);
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    fetch("https://db-qwenuresidentials.onrender.com/listings", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setListingsData(data));
  }, []);

  useEffect(() => {
    fetch("https://db-qwenuresidentials.onrender.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookingsData(data));
  }, []);

  const values = {
    bookingsData,
    listingsData,
    setBookingsData,
    setListingsData,
  };

  return (
    <div>
      <listingsDataContext.Provider value={values}>
        {children}
      </listingsDataContext.Provider>
    </div>
  );
};

export default FetchAPIData;
