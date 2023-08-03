import React from "react";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Listings_Search from "./Listings_Search";

const Listings_Home = () => {
  return (
<div className="listingsHome">
      <NavBar />
      <LandingPage />
      <Listings_Search/>
     </div>
  );
};

export default Listings_Home;