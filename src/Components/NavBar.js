import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";
import FilterNav from "./FilterNav";

const NavBar = () => {
  const { listingsData } = useContext(listingsDataContext);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [filteredData, setFilteredData] = useState(listingsData);

  const toggleFilterNav = () => {
    setShowFilterNav(!showFilterNav);
  };

  useEffect(() => {
    // Apply initial filters if needed
    applyFilters();
  }, []); // Empty dependency array to run this effect only once on component mount

  // Function to apply filters and update filtered data
  const applyFilters = () => {
    // Filter the listingsData based on the selected filters
    // Implement your filtering logic here based on the FilterNav state variables
    // ...

    // For now, let's just show all listings
    setFilteredData(listingsData);
  };

  return (
    <nav className="navBarComponent">
      <div>
        <a id="QwenuLogo">Qwenu Residentials</a>
      </div>
      <div id="navLinksContainer">
        <ul>
          <li className="navLinks">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navLinks">
            <NavLink exact to="homelistings">
              Home Listings
            </NavLink>
          </li>
          <li className="navLinks">
            <NavLink exact to="houseDetails">
              Details
            </NavLink>
          </li>
          <li className="navLinks">
            <NavLink exact to="contacts">
              Contacts
            </NavLink>
          </li>
          <li className="navLinks">
            <button
              onClick={toggleFilterNav}
              className="btn btn-primary"
              id="filterBtn"
            >
              Filter Listings
            </button>
          </li>
        </ul>
      </div>

      {/* Filter Modal */}
      {showFilterNav && (
        <FilterNav
          showModal={showFilterNav}
          onClose={toggleFilterNav}
          listingsData={listingsData}
          setFilteredData={setFilteredData}
        />
      )}
    </nav>
  );
};

export default NavBar;
