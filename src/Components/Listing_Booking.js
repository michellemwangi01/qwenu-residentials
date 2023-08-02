import React from "react";
import { useState } from "react";
// import { SimpleDropdown } from 'react-js-dropdavn'
// import 'react-js-dropdavn/dist/index.css'

function Listing_Booking() {
    const [firstNameInput, setfirstNameInput] = useState("");
    const [lastNameInput, setlastNameInput] = useState("");
    const [checkinInput, setcheckinInput] = useState("");
    const [checkoutInput, setcheckoutInput] = useState("");
    const [guestInput, setguestInput] = useState("");
    const [exampleInputEmail1, setexampleInputEmail1] = useState("");
    const [phonenumberInput, setphonenumberInput] = useState("");
    const [selectresidenceInput, setselectresidenceInput] = useState("");
    // console.log(fromInput);
    // const data = [
    //   {label: 'Ex opt 1', value: 1},
    //   {label: 'Ex opt 2', value: 2},
    //   {label: 'Ex opt 3', value: 3},
    //   {label: 'Ex opt 4', value: 4},
    // ]

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "fisrtNameInput"){
          setfirstNameInput(value);
      }
      if(id === "lastNameInput"){
          setlastNameInput(value);
      }
      if(id === "checkinInput"){
          setcheckinInput(value);
      }
      if(id === "checkoutInput"){
          setcheckoutInput(value);
      }
      if(id === "guestInput"){
          setguestInput(value);
      }
      if(id === "exampleInputEmail1"){
        setexampleInputEmail1(value);
    }
    if(id === "phonenumberInput"){
        setphonenumberInput(value);
    }
    if(id === "selectresidenceInput"){
      setselectresidenceInput(value);
  }

  }

  const handleSubmit  = () => {
      console.log(firstNameInput,lastNameInput,checkinInput,checkoutInput,guestInput,exampleInputEmail1,phonenumberInput,selectresidenceInput);
  }

  return(
     

      

           <div>
            <form>
                
 
   <div className="form-body">
   <div className="form-row">
                    <div className="col-1">
                    
   <div className="form-group mb-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  {/* </div> */}
                    </div>
                    <div className="col-1">
                    <div className="firstNameInput">
             <label for="firstNameInput">First Name </label>
             <input  type="text" name="" id="firstNameInput" value={firstNameInput}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/> 
             </div>  
                    </div>
                    <div className="col-1">
                    <div className="lastNameInput">
            <label  for="lastNameInput">Last Name</label>
            <input  type="text" name="" id="lastNameInput" value={lastNameInput}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/>
        </div>
                    </div>
                    <div className="col-1">
                    <div className="checkinInput">
            <label for="checkinInput">Check In </label>
            <input  type="date" id="checkinInput" className="form__input" value={checkinInput} onChange = {(e) => handleInputChange(e)} placeholder="Date/Time"/>
      </div>
                    </div>
                    <div className="col-1">
                    <div className="checkoutInput">
              <label for="checkoutInput">Check Out</label>
              <input className="form__input" type="date"  id="checkoutInput" value={checkoutInput} onChange = {(e) => handleInputChange(e)} placeholder="Date/Time"/>
          </div>
                    </div>
                    <div className="col-1">
                    <div className="guestInput">
              <label for="guestInput">Guests</label>
           <input className="form__input" type="guestInput" id="guestInput" value={guestInput} onChange = {(e) => handleInputChange(e)} placeholder="guests"/>
      </div>
                    </div>
                    <div className="col-1">
                    <div className="phonenumberInput">
            <label for="phonenumberInput">Phone Number </label>
            <input  type="text" id="phonenumberInput" className="form__input" value={phonenumberInput} onChange = {(e) => handleInputChange(e)} placeholder="phonenumber"/>
      </div>
      <div className="col-1">
      <div className="selectresidenceInput">
            <label for="selectresidenceInput">Select Residence </label>
            <input  type="text" id="selectresidenceInput" className="form__input" value={selectresidenceInput} onChange = {(e) => handleInputChange(e)} placeholder="residence"/>
      </div>  

      </div>
                    </div>
                    </div>
               
        
             
         
      
      
      
    </div>
    </div>

  
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label for="exampleCheck1">Check me in</label>
  </div>
</form>
           
           <div className="">
               <button  className="btn btn-primary" onClick={()=>handleSubmit()} type="submit" class="btn">Book Now</button>
          </div>
          
     </div>
     
  )       
}
  

  





//  = () => {
//   return <div>Listing_Booking</div>;
// };

export default Listing_Booking;
