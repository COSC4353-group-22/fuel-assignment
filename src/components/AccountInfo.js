import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios";
import ProfileChecks from "../components/forms/ProfileChecks";
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import NavBar from './NavBar';

function AccountInfo() {
  const [user, setUser] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState("");

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log("User session:" + foundUser.username);
    }
  }, []);

  const [profile, setProfile] = useState({
    "username": "",
    "firstName":"",
    "lastName":"",
    "addressOne":"",
    "addressTwo":"",
    "City":"",
    "Zipcode": "",
    "State":"",
  });

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [addressOne, setAddressOne] = useState('');
  // const [addressTwo, setAddressTwo] = useState('');
  // const [city, setCity] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [states, setStates] = useState('');

  const handleInputFirstName = (event) => {
      console.log(event.target.value)
      let q = {
          "username": user.username,
          "firstName":event.target.value,
          "lastName":profile.lastName,
          "addressOne":profile.addressOne,
          "addressTwo":profile.addressTwo,
          "City":profile.City,
          "Zipcode":profile.Zipcode,
          "State":profile.State,
      }
      setProfile(q);

      console.log("input change:", q);
  }

  const handleInputLastName = (event) => {
    console.log(event.target.value)
    let q = {
        "username": user.username,
        "firstName":profile.firstName,
        "lastName":event.target.value,
        "addressOne":profile.addressOne,
        "addressTwo":profile.addressTwo,
        "City":profile.City,
        "Zipcode":profile.Zipcode,
        "State":profile.State,
    }
    setProfile(q);

    console.log("input change:", q);
  }

  const handleInputAddressOne = (event) => {
    console.log(event.target.value)
    let q = {
        "username": user.username,
        "firstName":profile.firstName,
        "lastName":profile.lastName,
        "addressOne":event.target.value,
        "addressTwo":profile.addressTwo,
        "City":profile.City,
        "Zipcode":profile.Zipcode,
        "State":profile.State,
    }
    setProfile(q);

    console.log("input change:", q);
  }

  const handleInputCity = (event) => {
    console.log(event.target.value)
    let q = {
        "username": user.username,
        "firstName":profile.firstName,
        "lastName":profile.lastName,
        "addressOne":profile.addressOne,
        "addressTwo":profile.addressTwo,
        "City":event.target.value,
        "Zipcode":profile.Zipcode,
        "State":profile.State,
    }
    setProfile(q);

    console.log("input change:", q);
  }

  const handleInputZipcode = (event) => {
    console.log(event.target.value)
    let q = {
        "username": user.username,
        "firstName":profile.firstName,
        "lastName": profile.lastName,
        "addressOne":profile.addressOne,
        "addressTwo":profile.addressTwo,
        "City":profile.City,
        "Zipcode":event.target.value,
        "State":profile.State,
    }
    setProfile(q);

    console.log("input change:", q);
  }

  const handleInputState = (event) => {
    console.log(event.target.value)
    let q = {
        "username": user.username,
        "firstName":profile.firstName,
        "lastName": profile.lastName,
        "addressOne":profile.addressOne,
        "addressTwo":profile.addressTwo,
        "City":profile.City,
        "Zipcode":profile.Zipcode,
        "State":event.target.value,
    }
    setProfile(q);

    console.log("input change:", q);
  }

  // const fetchAddress = async () => {
  //   await axios.get(`http://localhost:9000/AccountInfo`).then((res) => {
  //     setStates(res.states.address);
  //     console.log(res.states.address);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }
  // fetchAddress()

  // const handleSubmit = e => {
  //   e.preventDefault()
    
  //   if(firstName && lastName && addressOne && zipcode && city && zipcode) {
  //     console.log(firstName, lastName, addressOne, addressTwo, zipcode, city, states)
  //   }
  // }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(profile);
    console.log("Handle submit");

    if (ProfileChecks.CheckNotEmpty(profile)){
      var res = await axios.post(`http://localhost:9000/AccountInfo`, profile);
      if (res.status === 201) {
        console.log("Profile information added");
      }
      else if (res.status == 200){
        console.log("Profile information updated");
      }
    }
    else {
      setError("Please fill out all fields");
    }
}

  //   const handleChange = (event) => { 
  //     setStates(event.target.value);
  // }

// Text Form Below

/*Front End*/
return (
  <div>
  <NavBar />
  <div className='account-info'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} className='submit-form'
    >
      <div>
      {(error != "" ) ? (<div className='error'>{error}</div>) : ""}
        <div className="account-fields">
          <TextField
              required
              // onChange={(e) => setFirstName(e.target.value)}
              value={profile.firstName}
              onChange={handleInputFirstName}
              id="first-name"
              label="First:"
              helperText="Enter First Name:"
            />
            <TextField
              required
              // onChange={(e) => setLastName(e.target.value)}
              value={profile.lastName}
              onChange={handleInputLastName}
              id="last-name"
              label="Last:"
              helperText="Enter Last Name:"
            />
        </div>
        <div className="account-fields">
        <TextField
            required
            // onChange={(e) => setAddressOne(e.target.value)}
            value={profile.addressOne}
            onChange={handleInputAddressOne}
            id="address-one"
            label="Address 1:"
            placeholder="Address 1:"
            helperText="Enter Address 1:"
          />
          <TextField
            // optional
            // onChange={(e) => setAddressTwo(e.target.value)}
            id="address-two"
            value={profile.addressTwo}
            label="Address 2:"
            // placeholder="Address 2:"
            helperText="Optional Address 2:"
          />
          <select
            value={profile.State} name="stateForm"
            onChange={handleInputState} className='state-select'>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AR">AR</option>  
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>  
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>  
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>  
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>      
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>  
              <option value="WV">WV</option>
              <option value="WY">WY</option>
          </select>
          <label htmlFor='stateForm' className='state-label'>Select state:</label>
          <TextField
            required
            // onChange={(e) => setCity(e.target.value)}
            value={profile.City}
            onChange={handleInputCity}
            id="city"
            label="City:"
            placeholder="City:"
            helperText="Enter name of your city:"
          />
          <TextField
            required
            // onChange={(e) => setZipcode(e.target.value)}
            value={profile.Zipcode}
            onChange={handleInputZipcode}
            id="zipcode"
            label="Zipcode:"
            placeholder="Zipcode:"
            helperText="Enter zipcode:"
          />
        </div>
      </div>
     
      <Button type = "submit"
      variant = "contained"
      onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
    </div>
    </div>
  );
}

export default AccountInfo;