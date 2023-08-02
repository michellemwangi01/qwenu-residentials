import React, { useState } from "react";
import "../Styles/FormStyles.css";

const Listing_Booking = ({ propertyTitle, propertyID }) => {
  const initialBookingState = {
    HouseTitle: `${propertyTitle} - ${propertyID}`,
    FullNames: "",
    Email: "",
    MobileNumber: "",
    DateofOccupancy: "",
  };

  const [newBooking, setNewBooking] = useState(initialBookingState);

  function submitHandler(e) {
    e.preventDefault();
    console.log(e);
    console.log("I was clicked");
    fetch("http://localhost:4000/clients", {
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
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default Listing_Booking;
