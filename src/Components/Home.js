import { useState, useEffect, useContext } from "react";
import { listingsDataContext } from "./FetchAPIData";

function Home() {
  // useEffect(() => {
  //   fetch(" https://db-qwenuresidentials.onrender.com/listings")
  //     .then((resp) => resp.json())
  //     .then((homes) => setHomes(homes));
  // }, []);
  const { listingsData, bookingsData } = useContext(listingsDataContext);
  const [homes, setHomes] = useState([listingsData]);
  console.log(homes);
  const homesList = homes.map((home) => (
    
  ));
  return (
    <div>
      <h1 id="listingsContainerTitle">Explore</h1>
      <div className="listingsContainer">{homesList}</div>
    </div>
  );
}
export default Home;
