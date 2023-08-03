import { useState, useEffect, useContext } from "react";
import ListingCards from "./ListingCards";
import { listingsDataContext } from "./FetchAPIData";
import Listings_Search from "./Listings_Search";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

function Listings() {
  const { listingsData } = useContext(listingsDataContext);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!listingsData) {
    return <h1 className="dataLoadingText">data loading...</h1>;
  }
  const homesList = listingsData.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));

  return (
    <>
      <div>
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
