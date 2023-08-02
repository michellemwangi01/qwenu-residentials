import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";
import Listing_Booking from "./Listing_Booking";

const Listing_Details = () => {
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [btnText, setBtnText] = useState("Book Property");
  const { externalID } = useParams();
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [count, setCount] = useState(0);
  const [listingData, setListingData] = useState({});
  const { listingsData } = useContext(listingsDataContext);

  const currentProperty = listingsData.find(
    (property) => property.externalID === externalID
  );

  if (!currentProperty) {
    return <h1>data loading...</h1>;
  }

  const { amenities } = currentProperty;
  const currentPropertyAmenities = amenities
    ? amenities.join(", ")
    : "No amenities listed";

  console.log(currentProperty);

  return (
    <div className="listingDetailsContainer">
      <div className="listingDetailsHeader">
        <h1>
          Embark on Your Journey to the perfect Abode. Uncover Every Detail!
        </h1>
      </div>
      <div className="listingDetailsCard">
        <div className="card mb-3">
          {currentProperty ? (
            <>
              <img
                src={currentProperty.coverPhoto.url}
                className="card-img-top"
                alt="Listing"
              />
            </>
          ) : (
            <div>
              <small>Loading ....</small>
            </div>
          )}
          <div className="card-body">
            <h5 className="card-title">{currentProperty.title}</h5>
            <div id="propertyDetails-Tag">
              <p>baths: {currentProperty.baths}</p>
              <p>sq. {currentProperty.area}</p>
              <p>${currentProperty.price}</p>
              <p>Purpose: {currentProperty.purpose}</p>
            </div>
            <div id="agencyDetails">
              <img src={currentProperty.agency.logo.url}></img>
              <p>Managed by {currentProperty.agency.name}</p>
            </div>
            <p className="card-text-amenities">
              <small className="text-muted">
                <em>Property Amenities:</em> {currentPropertyAmenities}
              </small>
            </p>
            <button
              onClick={() => {
                setBookingFormVisible(!bookingFormVisible);
                setBtnText("Close Form");
              }}
              className="btn btn-primary"
              id="bookPropertyBtn"
            >
              Book Property
            </button>
            {bookingFormVisible && (
              <Listing_Booking
                propertyID={currentProperty.id}
                propertyTitle={currentProperty.title}
              />
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing_Details;

// useEffect(() => {
//   fetch(
//     `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key":
//           "7fc49377d8msheb449ffa1261c1ap1acde1jsn263864e44c6e",
//         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//       },
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setListingData(data);
//       const photosArray = data.photos;
//       let imgURLArray = photosArray.map((imgItem) => imgItem.url);
//       setImages(imgURLArray);
//       setCurrentImage(imgURLArray[0]);

//       const interval = setInterval(() => {
//         setCount((prevCount) => (prevCount + 1) % imgURLArray.length);
//       }, 4000);

//       return () => clearInterval(interval);
//     });
// }, [externalID]);

// useEffect(() => {
//   setCurrentImage(images[count]);
// }, [count, images]);
// console.log(currentProperty);
