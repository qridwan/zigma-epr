import { Box, Grid, Stack, Typography } from '@mui/material';
import { IconEdit, IconPencil } from '@tabler/icons';
import React from 'react';
import avatar from '../../assets/images/users/Avatar.png';
const ProfileHeader = () => {
    return (
        <Grid container justifyContent="space-between" rowSpacing={10} mx={4} py={2}>
            <Grid item xs={12} md={3}>
                <Stack direction="row" justifyContent="start" alignItems="end" spacing={2}>
                    <Typography variant="h2" color="green">
                        Profile Details
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h4" color="gray">
                            Edit Profile
                        </Typography>
                        <IconPencil />
                    </Stack>
                </Stack>
                <Typography variant="body" color="error" sx={{ fontWeight: 'bold' }}>
                    Required Verification!
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Stack direction="row" justifyContent="center" alignItems="end">
                    <Box
                        sx={{
                            background: '#E7EBEF',
                            width: '130px',
                            height: '130px',
                            boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0, 0, 0, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img src={avatar} alt="avatar" />
                    </Box>

                    <IconEdit />
                </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="">
                    Link your account with
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ProfileHeader;
