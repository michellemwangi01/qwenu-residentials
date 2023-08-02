import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { listingsDataContext } from "./FetchAPIData";

const Listing_Details = () => {
  const { externalID } = useParams();
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [count, setCount] = useState(0);
  const [listingData, setListingData] = useState({});
  const { listingsData } = useContext(listingsDataContext);

  console.log(listingData);
  const currentProperty = listingsData.find(
    (property) => property.externalID === externalID
  );

  useEffect(() => {
    fetch(
      `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7fc49377d8msheb449ffa1261c1ap1acde1jsn263864e44c6e",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setListingData(data);
        const photosArray = data.photos;
        let imgURLArray = photosArray.map((imgItem) => imgItem.url);
        setImages(imgURLArray);
        setCurrentImage(imgURLArray[0]);

        const interval = setInterval(() => {
          setCount((prevCount) => (prevCount + 1) % imgURLArray.length);
        }, 4000);

        return () => clearInterval(interval);
      });
  }, [externalID]);

  useEffect(() => {
    setCurrentImage(images[count]);
  }, [count, images]);
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
          {images.length > 0 ? (
            <img src={currentImage} className="card-img-top" alt="Listing" />
          ) : (
            <div>
              <small>Loading ....</small>
            </div>
          )}
          <div className="card-body">
            {/* <h5 className="card-title">{currentProperty.title}</h5>
            <p>baths: {currentProperty.baths}</p>
            <p>sq. {currentProperty.area}</p>
            <p>${currentProperty.price}</p>
            <p>Purpose: {currentProperty.purpose}</p>
            <p>{currentProperty.description}</p>
            <p className="card-text">
              <small className="text-muted">{currentProperty.amenities}</small>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing_Details;
