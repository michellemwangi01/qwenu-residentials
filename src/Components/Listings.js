import { useState, useEffect } from "react";
import ListingCards from "./ListingCards";
import { Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Listings_Filter from "./Listings_Filter";

function Listings() {
  const [homes, setHomes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [filteredHomeState, setFilteredHomeState] = useState([]);
  const [x, setX] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const sendToFilter = { SearchValue, setSearchValue };

  // console.log(homes);
  useEffect(() => {
    fetch(" https://db-qwenuresidentials.onrender.com/listings")
      .then((resp) => resp.json())
      .then((homes) => {
        setHomes(homes);

        console.log(homes);
        let homeLocations = [];
        for (const home of homes) {
          const locations = home.location;
          for (const location of locations) {
            homeLocations.push(location);
          }
        }
        setX(homeLocations);
      })
      .finally(setDataLoaded(true));
  }, []);

  const homesList = homes.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));
  console.log(x);

  const filteredHomeList = filteredHomeState.map((home) => (
    <ListingCards key={home.id} home={home} />
  ));

  useEffect(() => {
    console.log(SearchValue);

    const filteredHomes = x.filter((curr) => {
      if (SearchValue === "") {
        return curr;
      } else if (curr.name.toLowerCase().includes(SearchValue.toLowerCase())) {
        return curr;
      }
    });

    setFilteredHomeState(filteredHomes);
  }, [SearchValue]);

  console.log(SearchValue);

  return (
    <>
      <Listings_Filter
        onChangeInputSendValueToListings={sendToFilter}
        homes={homes}
      />
      <div>
        <h1 id="listingsContainerTitle">Explore</h1>
        {filteredHomeList}
      </div>
    </>
  );
}
export default Listings;
