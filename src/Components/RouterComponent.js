import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listings_Home from "./Listings_Home";
import Listing_Details from "./Listing_Details";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/houseDetails" element={<Listing_Details />} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
