import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Listings from "./Listings";

const Listings_Search = ({ homes, sethome }) => {


  const [searchitem, setSearchitem] = useState('')

  console.log(searchitem);


  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchitem(e.target.value);
    console.log(e.target.value);
    const filteredData = homes.filter(item => {
      return item.title.toLowerCase().includes(searchitem.toLowerCase())})
      sethome(filteredData)
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
    <div id="searchform" >

      <div>
        <Form id="searchid" >
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>

              <input type="text" onChange={handleSearchChange} placeholder="searchhere"></input>
              {/* <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Which house are you looking for?"
          //value={searchitem}
          onChange = {handleSearchChange}
        /> */}
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2"
              
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Listings_Search;
