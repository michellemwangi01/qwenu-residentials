import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Listings_Search = () => {

  const [housearry , setHousearry] = useState([])
  const [searchitem , setSearchitem] = useState('')
   
  useEffect(  ()=>{
    fetch('https://db-qwenuresidentials.onrender.com/listings')
    .then(res => res.json())
    .then(data => {
      setHousearry(data)
    })
   }, [])


   const handleSearchChange = (e) => {
    setSearchitem(e.target.value);
  };

    
   const filteredData = housearry.filter(item =>{
      item.location.map((item)=>
      item.name.toLowerCase()
    ).includes(searchitem.toLowerCase())
   })


  return(
    <div  id="searchform" >Listings_Search

      <div>
      <Form id="searchid" >
    <Row className="align-items-center">
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Which house are you looking for?"
          value={searchitem}
          onChange = {handleSearchChange}
        />
      </Col>
      <Col xs="auto">
        <Button type="submit" className="mb-2">
          Search
        </Button>
      </Col>
    </Row>
  </Form>
      </div>
    </div> 
  ) ;
};

export default Listings_Search;
