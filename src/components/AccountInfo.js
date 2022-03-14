import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios";
import ProfileChecks from "../components/forms/ProfileChecks";
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

// const states = [
//   {
//     value: 'Texas',
//     label: 'TX',
//   }
// ];

export default function AccountInfo() {

  const [profile, setProfile] = useState({
    "firstName":"",
    "lastName":"",
    "addressOne":"",
    "addressTwo":"",
    "City":"",
    "Zipcode":"",
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

    if (ProfileChecks.CheckEmpty(profile))
    await axios.post(`http://localhost:9000/AccountInfo`, profile).then((res) => {
        console.log("Profile data sent to server"); 
}).catch((err) => {
  console.log(err);
});
}

  //   const handleChange = (event) => { 
  //     setStates(event.target.value);
  // }

// Text Form Below
  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <div>
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
        <div>
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
            required
            // onChange={(e) => setAddressTwo(e.target.value)}
            id="address-two"
            value={profile.addressTwo}
            label="Address 2:"
            // placeholder="Address 2:"
            helperText="Optional Address 2:"
          />
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
          <TextField
            required
            id="select-state"
            // select
            // value={states}
            // readonly
            value={profile.State}
            onChange={handleInputState}
            label="State"
            placeholder="State"
            helperText="Please select your state:"
          />
        </div>
      </div>
     
      <Button type = "submit"
      variant = "contained"
      onClick
      >
        Submit
      </Button>
    </Box>
  );
}
