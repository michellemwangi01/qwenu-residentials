<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterNav from './FilterNav';
import NavBar from './Navbar';
import * as d3 from 'd3';

const App = () => {
  return (
    <div>
      <FilterNav /> {}
      <NavBar /> {}
=======
import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import FetchAPIData from "./Components/FetchAPIData";

import { Outlet } from "react-router-dom";
import Listing_Details from "./Components/Listing_Details";
function App() {
  return (
    <div className="App">
      <FetchAPIData />
      <NavBar />
      <RouterComponent />
>>>>>>> 32d70a18ca8fb2acac1bb598cbd0813482b6b4a5
    </div>
  );
};


export default App;
