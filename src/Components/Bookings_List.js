import React, { useState, useEffect, useContext } from "react";
import Booking from "./Booking";
import { listingsDataContext } from "./FetchAPIData";
import "../Styles/NavBarStyles.css";

const Bookings__List = ({ renderDb }) => {
  const { bookingsData } = useContext(listingsDataContext);
  const [bookings, setBookings] = useState([]);

  console.log(bookingsData);

  useEffect(() => {
    if (bookingsData) {
      setBookings(bookingsData);
    } else if (!bookingsData) {
      return <h1>Loading...</h1>;
    }
  }, [bookingsData]);

  const bookingList = bookings.map((booking) => (
    <Booking
      key={booking.id}
      booking={booking}
      onDeletebooking={deleteBooking}
    />
  ));

  //***********************************COLUMN SORTING******************************************* */
  const [data, setData] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);

  useEffect(() => {
    setData(bookings);
  }, [bookings]);

  const [sortSetting, setSortSetting] = useState({
    key: null,
    direction: null,
  });

  const handleSort = (key) => {
    setSortClicked(!sortClicked);
    let direction = "ascending";
    if (sortSetting.key === key && sortSetting.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortSetting({ key, direction });
  };

  useEffect(() => {
    setBookings(data);
  }, [sortClicked]);

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
            <td>
              Name
              <i
                onClick={() => handleSort("category")}
                className="fas fa-sort fa-lg"
                style={{ color: "#28a745" }}
              ></i>
            </td>
            <td>
              Email
              <i
                onClick={() => handleSort("description")}
                className="fas fa-sort fa-lg"
                style={{ color: "#28a745" }}
              ></i>
            </td>
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
