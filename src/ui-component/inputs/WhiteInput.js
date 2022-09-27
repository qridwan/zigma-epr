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
        backgroundColor: '#FFFFFF',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        boxShadow: ' inset -5px -5px 10px rgba(255, 255, 255, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
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
const WhiteInput = ({ label = '', placeholder = '', type = 'text' }) => {
    return (
        <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: 16, color: '#2F7100', fontWeight: 'bold' }}>
                {label}
            </InputLabel>
            <CustomInput default Value="" id="bootstrap-input" placeholder={placeholder} type={type} />
        </FormControl>
    );
};
WhiteInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
};
export default WhiteInput;
