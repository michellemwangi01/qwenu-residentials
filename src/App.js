import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";
import FetchAPIData from "./Components/FetchAPIData";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Listing_Details from "./Components/Listing_Details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
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
        <Footer />
      </FetchAPIData>
    </div>
  );
}

export default App;
