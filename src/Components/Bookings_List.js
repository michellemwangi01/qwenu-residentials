import React, { useState, useEffect, useContext } from "react";
import Booking from "./Booking";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const Bookings__List = () => {
  const { bookingsData, setBookingsData } = useContext(listingsDataContext);
  console.log(bookingsData);

  if (!bookingsData) {
    return <h1>Data Loading...</h1>;
  }

  const bookingList = bookingsData
    .slice()
    .reverse()
    .map((booking) => (
      <Booking
        key={booking.id}
        booking={booking}
        onDeletebooking={deleteBooking}
      />
    ));

  //****************************************************************************** */

  function deleteBooking(id) {
    fetch(`https://db-qwenuresidentials.onrender.com/bookings/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newBookingList = bookingsData.filter(
        (booking) => booking.id !== id
      );
      setBookingsData(newBookingList);
    });
  }

  return (
    <div className="componentContainer">
      {/* <table className=" striped-table table-responsive table table-hover"> */}

      <h1>Property Bookings</h1>
      <table className="table-responsive">
        <thead className="thead-dark">
          <tr>
            <td>Property ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Location</td>
            <td>Title</td>
            <td>Date</td>
            <td>
              <i className="fa fa-pencil" style={{ color: "white" }}></i>
            </td>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
    </div>
  );
};

export default Bookings__List;
