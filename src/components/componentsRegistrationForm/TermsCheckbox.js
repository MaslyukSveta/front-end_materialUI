import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

const TermsCheckbox = ({ checked, onChange, error }) => {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        name="agree"
                        checked={checked}
                        onChange={onChange}
                        color="primary"
                    />
                }
                label="I agree to the terms and conditions"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default TermsCheckbox;
