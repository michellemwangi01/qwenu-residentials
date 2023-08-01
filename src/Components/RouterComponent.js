import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listings_Home from "./Listings_Home";
import Listing_Details from "./Listing_Details";
import Home from "./Home";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/houseDetails" element={<Listing_Details />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default RouterComponent;
