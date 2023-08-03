import React from "react";

const LandingPage = () => {
  const filterPropertiesForRent = () => {};
  const filterPropertiesForSale = () => {};
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
          <button onClick={filterPropertiesForRent}>Rent</button>
          <button onClick={filterPropertiesForSale}>Sale</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
