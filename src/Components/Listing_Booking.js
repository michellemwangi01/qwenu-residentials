import React, { useState, useContext } from "react";
import "../Styles/FormStyles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";

const Listing_Booking = ({ propertyLocation, propertyTitle, propertyID }) => {
  const initialBookingState = {
    propertyID: propertyID,
    HouseTitle: `${propertyTitle} - ${propertyID}`,
    FullNames: "",
    Email: "",
    MobileNumber: "",
    DateofOccupancy: "",
    Location: propertyLocation,
  };

  const { bookingsData, setBookingsData } = useContext(listingsDataContext);
  const Navigate = useNavigate();
  const [newBooking, setNewBooking] = useState(initialBookingState);

  // if (!bookingsData) {
  //   return <p>data loading...</p>;
  // }

  function submitHandler(e) {
    e.preventDefault();
    fetch("https://db-qwenuresidentials.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post Successful:", data);
        setNewBooking(initialBookingState);
        setBookingsData([...bookingsData, newBooking]);
        Navigate("/bookings");
      });
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  return (
    <form id="addTransaction">
      <fieldset id="IdentityKinInfo" class="row g-3 scheduler-border">
        {/* <legend class="scheduler-border"> New Transaction</legend> */}
        <div class="transactionDetailInputDiv">
          <input
            onChange={inputHandler}
            value={newBooking.propertyID}
            id="Mobile"
            type="text"
            name="HouseTitle "
            class="invisible-input"
            aria-label="Sizing example input"
            aria-describedby=""
            readOnly
          ></input>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            House Title
          </span>
          <input
            onChange={inputHandler}
            value={newBooking.HouseTitle}
            id="Mobile"
            type="text"
            name="HouseTitle"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
            required
          ></input>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            Location
          </span>
          <input
            onChange={inputHandler}
            value={newBooking.Location}
            id="Mobile"
            type="text"
            name="Location"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
            required
          ></input>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            Full Names
          </span>
          <input
            onChange={inputHandler}
            // value={newBooking.FullNames}
            id="Mobile"
            type="text"
            name="FullNames"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
            required
          ></input>
          <span>
            <p class="errorMessages"></p>
          </span>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            Email
          </span>
          <input
            required
            onChange={inputHandler}
            value={newBooking.Email}
            id="companyCode"
            min="1"
            type="email"
            name="Email"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
          ></input>
          <span>
            <p class="errorMessages"></p>
          </span>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            Mobile Number
          </span>
          <input
            required
            onChange={inputHandler}
            value={newBooking.MobileNumber}
            id="companyCode"
            min="1"
            type="text"
            name="MobileNumber"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
          ></input>
          <span>
            <p class="errorMessages"></p>
          </span>
        </div>
        <div class="transactionDetailInputDiv">
          <span class="clientdeets" id="">
            Date of Occupancy
          </span>
          <input
            required
            onChange={inputHandler}
            value={newBooking.DateofOccupancy}
            id="Mobile"
            type="date"
            name="DateofOccupancy"
            class="myformControl newCollectionDetails"
            aria-label="Sizing example input"
            aria-describedby=""
          ></input>
          <span>
            <p class="errorMessages"></p>
          </span>
        </div>

        <p>
          *Once added, the property is booked, the details can be viewed in the
          booking list on the home page. list below.
        </p>
        <button
          // to="/bookings/"
          class="addTransactionBtn"
          onClick={submitHandler}
          id="submit"
          type="submit"
          disabled={
            !newBooking.HouseTitle ||
            !newBooking.FullNames ||
            !newBooking.Email ||
            !newBooking.DateofOccupancy ||
            !newBooking.MobileNumber
          }
        >
          Book
        </button>
      </fieldset>
    </form>
  );
};

export default Listing_Booking;
