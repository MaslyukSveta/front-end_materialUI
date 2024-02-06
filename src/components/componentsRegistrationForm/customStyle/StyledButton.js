import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    backgroundColor: '#049074',
    '&:hover': {
        backgroundColor: '#055e4b',
    },
    boxShadow: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
});

export default StyledButton;
