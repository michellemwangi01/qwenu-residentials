import "./App.css";
import React, { useState, useEffect } from 'react';
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import FetchAPIData from "./Components/FetchAPIData";
import FilterNav from './Components/FilterNav';
import ListingCards from "./Components/ListingCards";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [listingsData, setListingsData] = useState([]);


  return (
   <>
      <div className="App">
      <FetchAPIData>
        <NavBar />
        <FilterNav />
        <RouterComponent />
      </FetchAPIData>
    </div>
    </>
  );
}

export default App;