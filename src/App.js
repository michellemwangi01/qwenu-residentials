import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import Listings_Home from "./Components/Listings_Home";

function App() {
  return (
    <div className="App">
      <Listings_Home />
      <RouterComponent />
    </div>
  );
}

export default App;
