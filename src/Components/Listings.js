import { useState, useEffect, useContext } from "react";
import ListingCards from "./ListingCards";
import { listingsDataContext } from "./FetchAPIData";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

function Listings() {
  const { listingsData } = useContext(listingsDataContext);
  const [homes, setHomes] = useState(listingsData);
  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   fetch(" https://db-qwenuresidentials.onrender.com/listings")
  //     .then((resp) => resp.json())
  //     .then((homes) => setHomes(homes))
  //     .finally(setDataLoaded(true));
  // }, []);
  console.log(homes);
  const homesList = homes.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));

  return (
    <>
      <div>
        <h1 id="listingsContainerTitle">Explore Properties</h1>

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
