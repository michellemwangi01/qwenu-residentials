import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import FetchAPIData from "./Components/FetchAPIData";

import { Outlet } from "react-router-dom";
import Listing_Details from "./Components/Listing_Details";
function App() {
  return (
    <div className="App">
      <FetchAPIData>
        <NavBar />
        <RouterComponent />
      </FetchAPIData>
    </div>
  );
}

export default App;
