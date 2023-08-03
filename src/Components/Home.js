
import { useState, useEffect } from "react";


function Home() {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetch(" https://db-qwenuresidentials.onrender.com/listings")
      .then((resp) => resp.json())
      .then((homes) => setHomes(homes));
  }, []);
  console.log(homes);
  const homesList = homes.map((home) => (
    <div class="card" key={home.id} style={{width:"300px"}}>
      <img src={home.coverPhoto.url} class="card-img-top" alt={home.state} />
      <div class="card-body">
        <h5 class="card-title"> {home.location[2].name.toUpperCase()}, {home.location[3].name.toUpperCase()}</h5>
        <p class="card-text">{home.title}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item" style={{color:"blue",fontSize:"25px"}}>$ {home.price}</li>
        <div style={{display:"flex",justifyContent:"center"}}>
        <li class="list-group-item"> <i class='fa fa-bath'></i> {home.baths}</li>
        <li class="list-group-item"> <i class='fa fa-bed'></i> {home.rooms}</li>
        <li class="list-group-item"><i class="fa fa-expand"></i> {home.area} ft</li>
       
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex" ,justifyContent:"space-between"}}>
        <li class="list-group-item"><img style={{borderRadius:"50%",height:"30px",width:"30px"}}src={home.agency.logo.url}></img></li>
        <li class="list-group-item" >{home.contactName}</li>
        </div>
        <div style={{display:"flex"}}>
        <li class="list-group-item"><i class="fa fa-share-alt"></i></li>
        <li class="list-group-item"><i class="fa fa-heart"></i></li>
        <li class="list-group-item"><i class="fa fa-plus"></i></li>
        </div>
        </div>
      </ul>
      <div class="card-body">
        <a href="/" class="btn btn-primary">
          See home
        </a>
      </div>
    </div>
  ));
  return (
    <div>
      <h1 id="listingsContainerTitle">Explore</h1>
      <div className="listingsContainer">{homesList}</div>
    </div>
  );
}
export default Home;
