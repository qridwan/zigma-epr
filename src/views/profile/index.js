import { Grid } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ZigInput from 'ui-component/inputs/ZigInput';
import ProfileHeader from './ProfileHeader';

const index = () => {
    return (
        <MainCard sx={{ mx: 4 }}>
            <ProfileHeader />
            <Grid container justifyContent="space-between">
                <Grid item xs={12} md={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Contact Person" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Customer Type" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Mail Id" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Mobile Number" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Alternate Mobile Number" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Company name" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="Company adress" />
                        </Grid>
                        <Grid container spacing={2} sx={{ mx: 1, mt: 1 }}>
                            <Grid item xs={12} md={6}>
                                <ZigInput label="District" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ZigInput label="State" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mx: 1, mt: 1 }}>
                            <Grid item xs={12} md={6}>
                                <ZigInput label="Pin code" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ZigInput label="Country" />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ZigInput label="GST number" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default index;
