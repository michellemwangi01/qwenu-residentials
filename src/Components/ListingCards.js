import React from "react";
import { Link } from "react-router-dom";

const ListingCards = ({ home }) => {
  const viewListingDetails = () => {
    console.log(home);
  };
  return (
    <div>
      <div class="card propertyListingCard" key={home.id}>
        <img src={home.coverPhoto.url} class="" alt={home.state} />
        <div class="card-body">
          <h5 class="card-title">{home.location.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{home.price}</li>
          <li class="list-group-item">{home.rooms}</li>
          <li class="list-group-item">{home.contactName}</li>
          <li class="list-group-item">{home.area}</li>
        </ul>
        <div class="card-body">
          <Link to={`/homeListings/${home.externalID}`} class="btn btn-primary">
            See home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
