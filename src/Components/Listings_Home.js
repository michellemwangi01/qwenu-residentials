import React from "react";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Home from "./Home";

const Listings_Home = () => {
  return (
    <div className="listingsHome">
      <NavBar />
      <LandingPage />
      <Home />
    </div>
  );
};

export default Listings_Home;
