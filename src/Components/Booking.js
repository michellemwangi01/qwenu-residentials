import React from "react";

const Booking = ({ booking, onDeletebooking }) => {
  let id = booking.id;

  const deletebookingHandler = () => {
    onDeletebooking(id);
  };

  return (
    <tr key={booking.id}>
      <td>#{booking.propertyID}</td>
      <td>{booking.FullNames} </td>
      <td>{booking.Email}</td>
      <td>{booking.Location}</td>
      <td>{booking.HouseTitle}</td>
      <td>{booking.DateofOccupancy}</td>
      <td onClick={deletebookingHandler} id={booking.id}>
        <i class="fa fa-trash-o"></i>
      </td>
    </tr>
  );
};

export default Booking;

{
  /* <i class="fa fa-trash-o" style="font-size:30px;color:white"></i> */
}
