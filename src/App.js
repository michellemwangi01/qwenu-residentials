import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./Components/RouterComponent";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterComponent />
    </div>
  );
}

export default App;
