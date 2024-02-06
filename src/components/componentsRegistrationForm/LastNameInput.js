import React from 'react';
import CustomTextField from "./customStyle/CustomTextField";


const LastNameInput = ({ value, onChange, error }) => {
    return (
        <CustomTextField
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={value}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    );
};

export default LastNameInput;
