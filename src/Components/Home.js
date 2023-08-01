import { useState, useEffect } from "react";

function Home(){
    const [homes,setHomes]=useState([])
    useEffect(() => {
        fetch(" https://db-qwenuresidentials.onrender.com/listings")
          .then(resp => resp.json())
          .then(homes => setHomes(homes))
      }, []);
      const homesList= homes.map((home)=>(
        <div class="card" style={{width: "18rem"}} key={home.id}>
  <img src={home.coverPhoto.url} class="card-img-top" alt={home.state}/>
  <div class="card-body">
    <h5 class="card-title">{home.location.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{home.price}</li>
    <li class="list-group-item">{homes.rooms}</li>
    <li class="list-group-item">{home.contactName}</li>
    <li class="list-group-item">{home.area}</li>
  </ul>
  <div class="card-body">
  <a href="/" class="btn btn-primary">See home details</a>
  </div>
</div>
      ))

      return (
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
        {homesList}
        </div>

      )
      

}
export default Home;