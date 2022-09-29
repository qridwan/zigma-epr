import * as React from 'react';
import { Box, Typography, Stack, Grid, TextField, InputLabel } from '@mui/material';

export default function TextFieldComponent({ placeholder }) {
    return (
        <>
            <TextField
                id="filled-number"
                placeholder={placeholder}
                size="small"
                sx={{
                    width: { sm: 200, md: 200 },
                    border: 'none',
                    outline: 'none',
                    '& .MuiInputBase-root': {
                        mt: 1,
                        border: 'none',
                        outline: 'none'
                    }
                }}
            />
        </>
    );
}
