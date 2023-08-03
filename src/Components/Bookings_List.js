import React, { useState, useEffect, useContext } from "react";
import Booking from "./Booking";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const Bookings__List = () => {
  const { bookingsData } = useContext(listingsDataContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookingsData);

  useEffect(() => {
    if (!bookingsData) {
      return <h1>Loading...</h1>;
    } else {
      setBookings(bookingsData);
    }
  }, [bookingsData]);

  const bookingList = bookings
    .slice()
    .reverse()
    .map((booking) => (
      <Booking
        key={booking.id}
        booking={booking}
        onDeletebooking={deleteBooking}
      />
    ));

  //***********************************COLUMN SORTING******************************************* */
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(bookings);
  }, [bookings]);

  //****************************************************************************** */

  function deleteBooking(id) {
    fetch(`https://db-qwenuresidentials.onrender.com/bookings/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newBookingList = bookings.filter((booking) => booking.id !== id);
      setBookings(newBookingList);
      setData(newBookingList); // Update sorted data as well
    });
  }

  return (
    <div className="componentContainer">
      {/* <table className=" striped-table table-responsive table table-hover"> */}

      <h1>Property Bookings</h1>
      <table className="table-responsive table-hover">
        <thead className="thead-dark">
          <tr>
            <td>Property ID</td>
            <td>Location</td>
            <td>Name</td>
            <td>Email</td>
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
