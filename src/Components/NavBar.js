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
        <a>Qwenu Residentials</a>
      </div>
      <div>
        <ul>
          <li className="navLinks">
            <NavLink>Home</NavLink>
          </li>
          <li className="navLinks">
            <NavLink>Homes</NavLink>
          </li>
          <li className="navLinks">
            <NavLink>Gallery</NavLink>
          </li>
          <li className="navLinks">
            <NavLink>Details</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
