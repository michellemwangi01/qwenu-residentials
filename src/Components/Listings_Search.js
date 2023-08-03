import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Listings from "./Listings";
import { listingsDataContext } from "./FetchAPIData";
import { useContext } from "react";

const Listings_Search = ({ sethome }) => {
  const { listingsData } = useContext(listingsDataContext);

  const [searchitem, setSearchitem] = useState("");

  console.log(searchitem);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchitem(e.target.value);
    console.log(e.target.value);
    const filteredData = listingsData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchitem.toLowerCase()) ||
        item.location[2].name
          .toLowerCase()
          .includes(searchitem.toLowerCase()) ||
        item.location[3].name
          .toLowerCase()
          .includes(searchitem.toLowerCase()) ||
        item.agency.name.toLowerCase().includes(searchitem.toLowerCase()) ||
        item.contactName.toLowerCase().includes(searchitem.toLowerCase())
      );
    });
    sethome(filteredData);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   console.log(searchitem);
  //   console.log("String " , homes);
  //   const filteredData = homes.filter(item => {
  //     return item.title.toLowerCase().includes(searchitem.toLowerCase())
  //   //  const checkeddata = item.location.filter((item) => item.name.toLowerCase().includes(searchitem.toLowerCase()))
  //   //  return checkeddata.length > 0
  //   })
  //   console.log("Filteredata" , filteredData);

  // }

  return (
    <div id="searchform">
      <div>
        <Form id="searchid">
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>

              <input
                id="searchinput"
                type="text"
                onChange={handleSearchChange}
                placeholder="Search Property Here"
              ></input>
              {/* <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Which house are you looking for?"
          //value={searchitem}
          onChange = {handleSearchChange}
        /> */}
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Listings_Search;
