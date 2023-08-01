import React, { useEffect, useState } from "react";

const Listing_Details = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [count, setCount] = useState(0);
  const [listingData, setListingData] = useState({});

  // const [
  //   amenities,
  //   area,
  //   baths,
  //   category,
  //   description,
  //   location,
  //   price,
  //   purpose,
  //   floorPlan,
  // ] = listingData;

  // console.log(images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setCurrentImage(images[count]);
  }, [count]);

  // console.log(count);

  useEffect(() => {
    fetch(`http://localhost:3000/listingDetails`, {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "47f6ed740fmsh71585dcfcf20c8bp1af58fjsnd4a08f796f4f",
      //   "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setListingData(data[0]);
        // console.log(data[0].photos);
        const photosArray = data[0].photos;
        // console.log(photosArray);
        let imgURLArray = [];
        for (const imgItem of photosArray) {
          imgURLArray.push(imgItem.url);
        }
        setImages(imgURLArray);
      });
  }, []);

  console.log(listingData);
  const amenities = listingData.amenities;
  console.log(amenities);

  // const amenitiesItems = amenityItem2.map((item) => (
  //   <p class="card-text">
  //     <small class="text-muted">{item.text}</small>
  //   </p>
  // ));

  return (
    <div id="listingDetails">
      <h1>Explore the Details of Your Next Abode</h1>
      <div class="card mb-3 listingDetailsCard">
        <img src={currentImage}></img>{" "}
        <div class="card-body">
          <h5 class="card-title">{listingData.title_l2}</h5>
          {/* {amenitiesItems} */}
          <p class="card-text">{listingData.description_l2}</p>
        </div>
      </div>
    </div>
  );
};

export default Listing_Details;
