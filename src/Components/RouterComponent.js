import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listings_Home from "./Listings_Home";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={Listings_Home} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
