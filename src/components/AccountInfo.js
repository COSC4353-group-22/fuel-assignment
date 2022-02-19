import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const states = [
  {
    value: 'Texas',
    label: 'TX',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function AccountInfo() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  }
  
  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          placeholder="Full Name:"
          helperText="Full Name:"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          placeholder="Address 1:"
          helperText="Address 1:"
        />
        <TextField
          required
          id="optional"
          label="Optional"
          placeholder="Address 2:"
          helperText="Address 2:"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          placeholder="City:"
          helperText="City:"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          placeholder="Zipcode:"
          helperText="Zipcode:"
        />
        <TextField
          required
          id="filled-required"
          select
          value={states}
          onChange={handleChange}
          label="Required"
          placeholder="State"
          helperText="State:"
        />
        
      </div>
    </Box>
  );
}
