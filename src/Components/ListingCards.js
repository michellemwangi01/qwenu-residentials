import React from "react";
import { Link } from "react-router-dom";

const ListingCards = ({ home }) => {
  const viewListingDetails = () => {
    console.log(home);
  };
  return (
    <div>
      <div className="card" key={home.id}>
        <img
          src={home.coverPhoto.url}
          className="card-img-top"
          alt={home.state}
        />
        <div className="card-body">
          <h5 className="card-title">{home.location.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{home.price}</li>
          <li className="list-group-item">{home.rooms}</li>
          <li className="list-group-item">{home.contactName}</li>
          <li className="list-group-item">{home.area}</li>
          <li>ExternalID: {home.externalID}</li>
        </ul>
        <div className="card-body">
          <Link to={`/homeListings/${home.externalID}`} class="btn btn-primary">
            See home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
