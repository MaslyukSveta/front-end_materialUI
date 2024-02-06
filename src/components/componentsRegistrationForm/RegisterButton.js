import React from 'react';
import StyledButton from "./customStyle/StyledButton";



const RegisterButton = ({ onClick }) => {
    return (
        <StyledButton
            type="submit"
            onClick={onClick}
            variant="contained"
            fullWidth
        >
            Register
        </StyledButton>
    );
};

export default RegisterButton;
