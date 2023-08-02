import React from "react";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Listings_Search from "./Listings_Search";

const Listings_Home = () => {
  return (
    <div className="listingsHome">
      <NavBar />
      <LandingPage />
      <Listings_Search/>
      <Home />
    </div>
  );
};

export default Listings_Home;
