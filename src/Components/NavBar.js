import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const NavBar = () => {
  const listingsData = useContext(listingsDataContext);
  console.log(listingsData);
  return (
    <nav className="navBarComponent">
      <div>
        <a id="QwetuLogo">Qwenu Residentials</a>
      </div>
      <div>
        <ul>
          <li className="navLinks">
            <NavLink to="home">Home</NavLink>
          </li>
          <li className="navLinks">
            <NavLink to="qwetuHomes">Homes</NavLink>
          </li>
          <li className="navLinks">
            <NavLink to="qwetuGallery">Gallery</NavLink>
          </li>
          <li className="navLinks">
            <NavLink to="homeDetails">Details</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
