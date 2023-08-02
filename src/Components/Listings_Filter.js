import React, { useState, useRef, useEffect } from "react";

function Listings_Filter({ homes, onChangeInputSendValueToListings }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const buttonRef = useRef();
  const { SearchValue, setSearchValue } = onChangeInputSendValueToListings;

  function handleSearchInput(e) {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleSearchInput} />
    </div>
  );
}

export default Listings_Filter;
