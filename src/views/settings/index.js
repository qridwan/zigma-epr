import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ZigInput from 'ui-component/inputs/ZigInput';
import MainCard from 'ui-component/cards/MainCard';
import Link from '@mui/material/Link';

const styles = {
    width: '200px',
    height: '50px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontWeight: '500',
    color: '#000',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    outline: 'none'
};

const contactStyles = {
    width: '180px',
    height: '50px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#86C029',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    outline: 'none',
    marginTop: '20px'
};

const index = () => {
    return (
        <MainCard sx={{ mx: 4, p: 4 }}>
            <Typography variant="h2" color="green" sx={{ mb: 5 }}>
                Settings
            </Typography>
            <Stack>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} sm={12} md={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12}>
                                <button style={styles}>Forgot Password</button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <button style={styles}>Notification</button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <button style={styles}>Downloaded Documents History</button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <button style={styles}>Status of Rejected Documents</button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: 5 }}>
                                <button style={styles}>Logout</button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <ZigInput label="Full Name" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <ZigInput label="Mail Id" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <ZigInput label="Contact Number" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <ZigInput label="Your Message" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <button style={contactStyles}>Contact Us</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, sm: 3, md: 5 }}
                    sx={{ mt: 5, mb: 5, display: 'flex', justifyContent: 'start' }}
                >
                    <Link href="#" underline="none" color="#86C029">
                        Privacy Policy
                    </Link>
                    <Link href="#" underline="none" color="#86C029">
                        Terms & conditions
                    </Link>
                </Stack>
            </Stack>
        </MainCard>
    );
};

export default index;
