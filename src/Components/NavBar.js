import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBarComponent">
        <div>
          <a id="QwetuLogo">Qwenu Residentials</a>
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
              <NavLink exact to="bookings">
                Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
