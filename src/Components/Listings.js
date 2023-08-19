import { useState, useEffect, useContext } from "react";
import { listingsDataContext } from "./FetchAPIData";
import ListingCards from "./ListingCards";
import Listings_Search from "./Listings_Search";
import FilterNav from "./FilterNav";
import { Waveform } from "@uiball/loaders";

function Listings() {
  const [showFilterNav, setShowFilterNav] = useState(false);
  const { listingsData } = useContext(listingsDataContext);
  console.log(listingsData);

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
          {listingsData.length == 0 ? (
            <div id="loadersContainer">
              <p>Loading...</p>
              <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
            </div>
          ) : (
            <div className="listingsContainer">{homesList}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Listings;
