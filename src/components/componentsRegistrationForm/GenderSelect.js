import React from 'react';

import { FormControl, FormHelperText } from '@mui/material';
import { CustomSelect, CustomInputLabel, CustomMenuItem } from './customStyle/CustomSelect'; // Adjust the path accordingly

const GenderSelect = ({ value, onChange, error }) => {
    return (
        <FormControl fullWidth error={!!error} margin="normal">
            <CustomInputLabel>Gender</CustomInputLabel>
            <CustomSelect
                name="gender"
                value={value}
                onChange={onChange}
                label="Gender"
            >
                <CustomMenuItem value=""><em>None</em></CustomMenuItem>
                <CustomMenuItem value="male">Male</CustomMenuItem>
                <CustomMenuItem value="female">Female</CustomMenuItem>
            </CustomSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};
export default GenderSelect;
