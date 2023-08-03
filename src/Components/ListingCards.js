import React from "react";
import { Link } from "react-router-dom";

const ListingCards = ({ home }) => {
  // console.log(home);
  return (
    <div
      class="card"
      key={home.id}
      style={{
        border: "1px solid #0c0c4c",
        width: "400px",
        height: "580px",
        margin: "10px",
        marginBottom: "15px",
      }}
    >
      <img
        src={home.coverPhoto.url}
        class="card-img-top"
        alt={home.state}
        style={{ height: "250px" }}
      />
      <div class="card-body">
        <h5 class="card-title">
          {" "}
          {home.location[2].name.toUpperCase()},{" "}
          {home.location[3].name.toUpperCase()}
        </h5>
        <p class="card-text">{home.title}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          style={{ borderBottom: "1px solid", color: "blue", fontSize: "25px" }}
        >
          $ {home.price}
        </li>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid ",
          }}
        >
          <li class="list-group-item">
            {" "}
            <i class="fa fa-bath"></i> {home.baths}
          </li>
          <li class="list-group-item">
            {" "}
            <i class="fa fa-bed"></i> {home.rooms}
          </li>
          <li class="list-group-item">
            <i class="fa fa-expand"></i> {home.area} ft
          </li>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid ",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <li class="list-group-item">
              <img
                style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                src={home.agency.logo.url}
              ></img>
            </li>
            <li class="list-group-item">{home.contactName}</li>
          </div>
          <div style={{ display: "flex" }}>
            <li class="list-group-item">
              <i class="fa fa-share-alt"></i>
            </li>
            <li class="list-group-item">
              <i class="fa fa-heart"></i>
            </li>
            <li class="list-group-item">
              <i class="fa fa-plus"></i>
            </li>
          </div>
        </div>
      </ul>
      <div class="card-body">
        <Link to={`/homeListings/${home.externalID}`} class="btn btn-primary">
          See Home Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCards;
