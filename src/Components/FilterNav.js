import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { listingsDataContext } from "./FetchAPIData";

const FilterNav = ({ showModal, onClose }) => {
  const [numberOfRooms, setNumberOfRooms] = useState("Any");
  const [numberOfBaths, setNumberOfBaths] = useState("Any");
  const [propertyType, setPropertyType] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [minPrice, setMinPrice] = useState(9999);
  const [maxPrice, setMaxPrice] = useState(1000000000);
  const [filteredData, setFilteredData] = useState([]);
  const { listingsData, setListingData } = useContext(listingsDataContext);
  const [showFilterNav, setShowFilterNav] = useState(false);

  const toggleFilterNav = () => {
    setShowFilterNav(!showFilterNav);
  };

  // Function to apply filters and update filtered data
  const applyFilters = () => {
    console.log(propertyType);
    const filteredListings = listingsData.filter((listing) => {
      return (
        listing.purpose === propertyType.toLowerCase() &&
        (numberOfBaths === "Any" ||
          listing.baths === parseInt(numberOfBaths)) &&
        (numberOfRooms === "Any" ||
          listing.rooms === parseInt(numberOfRooms)) &&
        (selectedAmenities.length === 0 ||
          selectedAmenities.every((selectedAmenity) =>
            listing.amenities.includes(selectedAmenity)
          ))
      );
    });
    console.log(filteredListings);
    setListingData(filteredListings);
    onClose();
  };

  const handleAmenityChange = (amenity) => (e) => {
    if (e.target.checked) {
      setSelectedAmenities([...selectedAmenities, amenity]);
    } else {
      setSelectedAmenities(
        selectedAmenities.filter((selected) => selected !== amenity)
      );
    }
  };

  // Function to reset the filters
  const resetFilters = () => {
    setNumberOfRooms("Any Type");
    setNumberOfBaths("Any");
    setPropertyType("Any Type");
    setSelectedAmenities([]);
    setMinPrice(9999);
    setMaxPrice(1000000000);
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filter Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="filter-item">
          <label>How many Rooms:</label>
          <select
            value={numberOfRooms}
            onChange={(e) => setNumberOfRooms(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="filter-item">
          <label>How many Baths:</label>
          <select
            value={numberOfBaths}
            onChange={(e) => setNumberOfBaths(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Property Type:</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="for-rent">For Rent</option>
            <option value="for-sale">For Sale</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Amenities:</label>
          {[
            "Chicken Inn",
            "Swimming Pool",
            "Flooring Other",
            "Waste Disposal",
            "Intercom",
            "Cleaning Services",
            "Security Staff",
            "CCTV Security",
            "Centrally Air-Conditioned",
            "Maintenance Staff",
            "Reception/Waiting Room",
            "Balcony or Terrace",
            "Laundry Room",
            "Broadband Internet",
            "Satellite/Cable TV",
            "View",
            "Service Elevators",
            "Furnished",
            "Gym or Health Club",
            "Lobby in Building",
          ].map((amenity) => (
            <label key={amenity} className="amenity-checkbox">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={handleAmenityChange(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>

        <div className="filter-item">
          <label>Price Range:</label>
          <div id="priceGraph" style={{ width: "100%", height: "100px" }}></div>
          <div>
            <span>${minPrice}</span> - <span>${maxPrice}</span>
          </div>
          <input
            type="range"
            min={9999}
            max={1000000000}
            step={1000}
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={resetFilters}>
          Reset
        </Button>
        <Button variant="primary" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterNav;
