import "./App.css";
import React, { useState, useEffect } from "react";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import FetchAPIData from "./Components/FetchAPIData";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [listingsData, setListingsData] = useState([]);

  return (
    <>
      <div className="App">
        <FetchAPIData>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="dark"
          />
          <NavBar />

          <RouterComponent />
          {/* <Footer /> */}
        </FetchAPIData>
      </div>
    </>
  );
}

export default App;
