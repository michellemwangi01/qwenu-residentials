import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import Listings_Home from "./Components/Listings_Home";
import Listing_Details from "./Components/Listing_Details";
import FetchAPIData from "./Components/FetchAPIData";
import Home from "./Components/Listings_Home";
function App() {
  return (
    <div className="App">
      <FetchAPIData />
      <Listings_Home />
      <RouterComponent />
    </div>
  );
}

export default App;
