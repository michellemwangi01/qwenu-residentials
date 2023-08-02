import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const MyCard = () => {

  return (
    <div className="card mt-5" style={{ width: '670px', margin: 'auto'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://media.tenor.com/lGay2n_ZrJkAAAAC/architecture-arhitktgif.gif"
            className="img-fluid rounded-start"
            alt="house image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Qwenu Apartments</h5>
            <p className="card-text">
             Help us find what suits you best!
            </p>
            <p className="card-text">
              <small className="text-muted">Last Updated 10 seconds ago</small>
            </p>
            <button className="btn btn-primary">
              Filter
            </button>
           <p style={{marginTop: '8px' , fontWeight:'600'}}>
            Type of place:</p> 
        <Form>
      <Form.Switch 
        type="switch"
        id="custom-switch"
        label="Any type"
      />
        <Form.Switch 
        type="switch"
        id="custom-switch"
        label="Apartment"
      />
        <Form.Switch 
        type="switch"
        id="custom-switch"
        label="Studio"
      />
        <Form.Switch 
        type="switch"
        id="custom-switch"
        label="Villa"
      />
        <Form.Switch 
        type="switch"
        id="custom-switch"
        label="Shared Spaces"
      />
    </Form>
    <p style={{marginTop: '10px' , fontWeight: '650'}}>How many rooms:</p>
    <Form style={{marginTop: '12px'}}>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            type='radio'
            name="group1"
            id={`inline-${type}-1`}
          />
         <Form.Check
            inline
            label="2"
            type='radio'
            name="group1"
            id={`inline-${type}-1`}
          />
              <Form.Check
            inline
            label="3"
            type='radio'
            name="group1"
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="4+"
            type='radio'
            name="group1"
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
    <p style={{marginTop: '10px', fontWeight: '650'}}>Amenities/Other:</p>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
          type={type}
            id={`default-${type}`}
            label={`Disabled Parking`}
          />
          <Form.Check
          type={type}
            id={`default-${type}`}
            label={`Free Wifi`}
          />
          <Form.Check
          type={type}
          id={`default-${type}`}
          label={`Outside Living Space`}
          />
            <Form.Check
          type={type}
          id={`default-${type}`}
          label={`Pool`}
          />
            <Form.Check
          type={type}
          id={`default-${type}`}
          label={`Cooker`}
          />
            <Form.Check
          type={type}
          id={`default-${type}`}
          label={`Pet-Friendly`}
          />
            <Form.Check
          type={type}
          id={`default-${type}`}
          label={`Housekeeping`}
          />
        </div>
      ))}
    </Form>
    {/* <p style={{fontWeight:'600'}}>Price</p>
    <>
      <Form.Range />
    </>
    <p>3,200KES</p>
    <p>100,000KES+</p>
     */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;