import React, { useContext } from "react";
import { listingsDataContext } from "./FetchAPIData";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const Navigate = useNavigate();
  const filterPropertiesForRent = () => {
    Navigate("/homelistings");
  };

  return (
    <div id="landingPage">
      <div id="landingPageContent">
        <h1>Find Your Dream Home</h1>
        <h4>
          Discover your dream home with us as we embark on an exciting journey
          through the world of real estate. With an unwavering commitment to
          excellence, we strive to provide you with a seamless and rewarding
          real estate experience.
        </h4>
        <div id="landingCallToAction">
          <button onClick={filterPropertiesForRent}>Rent & Buy</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
