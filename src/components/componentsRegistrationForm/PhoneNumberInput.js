import React from 'react';
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import CustomTextField from "./customStyle/CustomTextField";


const PhoneNumberInput = ({ value, onChange, error }) => {
    return (
        <CustomTextField
            type="text"
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={value}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error || ''}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    );
};

export default PhoneNumberInput;
