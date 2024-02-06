import React from 'react';

import CustomTextField from "./customStyle/CustomTextField";


const FirstNameInput = ({ value, onChange, error }) => {
    return (
        <CustomTextField
            type="text"
            name="firstName"
            label="First Name"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error || ''}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    );
};

export default FirstNameInput;
