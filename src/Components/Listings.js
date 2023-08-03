import { useState, useEffect } from "react";
import ListingCards from "./ListingCards";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

function Listings() {
  const [homes, setHomes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(" https://db-qwenuresidentials.onrender.com/listings")
      .then((resp) => resp.json())
      .then((homes) => setHomes(homes))
      .finally(setDataLoaded(true));
  }, []);
  const homesList = homes.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));

  // const location = useLocation();
  return (
    <>
      <div>
        <h1 id="listingsContainerTitle">Explore</h1>
        {/* <Listings_Search /> */}
        {homes ? (
          <div className="listingsContainer">{homesList}</div>
        ) : (
          <h1>Data Loading...Please be patient</h1>
        )}
      </div>
    </>
  );
}
export default Listings;
