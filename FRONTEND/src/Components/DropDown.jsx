import React, { useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
export default function DropDown(props) {
   console.log(props.shoeSizes);
  const userOptions = props.shoeSizes?.map((user) => ({
    label: user.toString(), // Convert the ID to a string
    value: user, // Keep the ID as a number
  }));
  return (
    <>
    <Autocomplete
        disablePortal
        id="Shoe Size"
        onChange={(e, selectedOption) => {
          props.setShoeSize(selectedOption ? selectedOption.value : null);
        }}
        options={userOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label="select size." />}
      />
    </>
  );
}