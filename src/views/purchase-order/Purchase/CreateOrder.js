import { Grid, InputLabel, Stack } from '@mui/material';
import React from 'react';
import NavButton from 'ui-component/buttons/NavButton';
import StateSelect from 'ui-component/inputs/StateSelect';
import WhiteInput from 'ui-component/inputs/WhiteInput';

const CreateOrder = () => {
    return (
        <Stack direction="row" justifyContent="center">
            <Grid container spacing={2} sx={{ width: '40%' }} justifyContent="center">
                <Grid item md={12}>
                    <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: 16, color: '#2F7100', fontWeight: 'bold' }}>
                        State
                    </InputLabel>
                    <StateSelect />
                </Grid>
                <Grid item md={12}>
                    <WhiteInput label="Quality" placeholder="Choose Your Quantity" />
                </Grid>

                <Grid item md={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <WhiteInput label="Date From" type="date" placeholder="From" />
                        </Grid>
                        <Grid item md={6}>
                            <WhiteInput label="Date To" type="date" placeholder="To" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <WhiteInput label="Upload purchase order" type="file" placeholder="purchase order file" />
                </Grid>
                <Grid item md={3}>
                    <NavButton child="Create" variant="contained" />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default CreateOrder;
