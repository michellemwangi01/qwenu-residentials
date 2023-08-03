import { useState, useEffect, useContext } from "react";
import ListingCards from "./ListingCards";
import { listingsDataContext } from "./FetchAPIData";
import Listings_Search from "./Listings_Search";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

import Listing_Booking from "./Listing_Booking";
import FilterNav from "./FilterNav";
import { listingsDataContext } from "./FetchAPIData";

function Listings() {
  const { listingsData } = useContext(listingsDataContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const { listingsData, setListingsData } = useContext(listingsDataContext);


  if (!listingsData) {
    return <h1 className="dataLoadingText">data loading...</h1>;
  }

  const homesList = listingsData.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));


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

        <div id="searchContainer">
          <Listings_Search />
        </div>

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
