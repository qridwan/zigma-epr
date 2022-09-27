import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateComponent() {
    const [value, setValue] = useState(new Date());
    console.log(setValue);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label=""
                placeholder={value}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField size="small" {...params} />}
            />
        </LocalizationProvider>
    );
}

export default DateComponent;
