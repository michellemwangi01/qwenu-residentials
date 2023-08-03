import { useState, useEffect, useContext } from "react";
import ListingCards from "./ListingCards";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Listing_Booking from "./Listing_Booking";
import FilterNav from "./FilterNav";
import { listingsDataContext } from "./FetchAPIData";

function Listings() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const { listingsData, setListingsData } = useContext(listingsDataContext);

  const homesList = listingsData.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));

  // console.log(listingsData);
  // const location = useLocation();
  const toggleFilterNav = () => {
    setShowFilterNav(!showFilterNav);
  };

  return (
    <>
      <div>
        {/* Filter Modal */}
        <button
          onClick={toggleFilterNav}
          className="btn btn-primary"
          id="filterBtn"
        >
          Filter Listings
        </button>
        {showFilterNav && (
          <FilterNav showModal={showFilterNav} onClose={toggleFilterNav} />
        )}

        <h1 id="listingsContainerTitle">Explore</h1>
        {listingsData ? (
          <div className="listingsContainer">{homesList}</div>
        ) : (
          <h1>Data Loading...Please be patient</h1>
        )}
      </div>
    </>
  );
}
export default Listings;
