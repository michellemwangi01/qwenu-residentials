import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navBarComponent">
      <div>
        <a id="QwetuLogo">Qwenu Residentials</a>
      </div>
      <div>
        <ul>
          <li className="navLinks">
            <NavLink exact to="qwetuHomes">
              Homes
            </NavLink>
          </li>
          <li className="navLinks">
            <NavLink exact to="qwetuGallery">
              Gallery
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
