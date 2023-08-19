import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listings from "./Listings";
import Qwetu_Home from "./Qwetu_Home";
import Listing_Details from "./Listing_Details";
import Bookings__List from "./Bookings_List";
import Error404 from "./Error404";
const RouterComponent = () => {
  return (
    <div id="routerComponent">
      <Routes>
        <Route exact path="/" element={<Qwetu_Home />} />
        <Route path="homeListings" element={<Listings />} />
        <Route path="homeListings/:externalID" element={<Listing_Details />} />
        <Route path="bookings" element={<Bookings__List />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
