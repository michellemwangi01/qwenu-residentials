import { useState, useEffect, useContext } from "react";
import ListingCards from "./ListingCards";
import { listingsDataContext } from "./FetchAPIData";
import Listings_Search from "./Listings_Search";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

import Listing_Booking from "./Listing_Booking";
import FilterNav from "./FilterNav";

function Listings() {
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
      <div id="mainListingsContainer">
        <div>
          {showFilterNav && (
            <FilterNav showModal={showFilterNav} onClose={toggleFilterNav} />
          )}

          <h1 id="listingsContainerTitle">Explore Fine Living in the UAE</h1>
          <div>
            {/* Filter Modal */}
            <button
              onClick={toggleFilterNav}
              className="btn btn-primary filterBtn"
              id="filterBtn"
            >
              Filter Listings
            </button>
            <div id="searchFilterContainer">
              <Listings_Search />
            </div>
          </div>

          {listingsData ? (
            <div className="listingsContainer">{homesList}</div>
          ) : (
            <h1>Data Loading...Please be patient</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Listings;
