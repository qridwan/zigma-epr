import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3)
    },
    '& .MuiInputLabel-root': {
        fontSize: 16
    },
    '& .MuiInputBase-input': {
        borderRadius: 10,
        border: 'none',
        position: 'relative',
        backgroundColor: '#E7EBEF',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        boxShadow: 'inset -5px -5px 10px rgba(255, 255, 255, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
        // '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main
        // }
    }
}));

export default function ZigInput({ label }) {
    return (
        <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: 16 }}>
                {label}
            </InputLabel>
            <CustomInput defaultValue="" id="bootstrap-input" />
        </FormControl>
    );
}

ZigInput.propTypes = {
    label: PropTypes.string.isRequired
};
