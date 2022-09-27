import { Button, styled } from '@mui/material';
import React from 'react';
const ColorButton = styled(Button)(({ theme }) => ({
    boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '10px 30px',
    fontSize: 16,
    fontWeight: 'bold',
    '&:hover': {
        // backgroundColor: '#94DC45'
    },
    '&:active': {
        backgroundColor: '#94DC45'
    },
    '&:focus': {
        backgroundColor: '#94DC45',
        boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0, 0, 0, 0.2)'
    }
}));
const NavButton = ({ variant, child, sx, size }) => {
    return (
        <ColorButton sx={sx ?? {}} size={size} variant={variant} color="secondary">
            {child}
        </ColorButton>
    );
};

export default NavButton;
