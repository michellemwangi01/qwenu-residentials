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
    applyFilters();
  }, []);

  // Function to apply filters and update filtered data
  const applyFilters = () => {
    setFilteredData(listingsData);
  };

  return (
    <>
      <nav className="navBarComponent">
        <div>
          <div>
            <a id="QwetuLogo">Qwenu Residentials</a>
          </div>
          <div id="navLinksContainer">
            <ul>
              <li className="navLinks">
                <NavLink exact to="qwenu-residentials">
                  Home
                </NavLink>
              </li>
              <li className="navLinks">
                <NavLink exact to="homelistings">
                  Properties
                </NavLink>
              </li>
              <li className="navLinks">
                <NavLink exact to="bookings">
                  Bookings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
