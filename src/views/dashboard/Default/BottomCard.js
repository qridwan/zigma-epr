import { Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import BottomCart from './RadialBar/BottomChart';

const BottomCard = () => {
    const theme = useTheme();
    return (
        <MainCard>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} md={4}>
                    <Stack direction="row" alignItems="center" justifyContent="space-around">
                        <Typography variant="h3" sx={{ color: theme.palette.success.dark }}>
                            All Open PO
                        </Typography>
                        <BottomCart fillcolor="#86c029" point={1} />
                    </Stack>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Stack direction="row" alignItems="center" justifyContent="space-around">
                        <Typography variant="h3" sx={{ color: '#86c029' }}>
                            All Pending PO
                        </Typography>
                        <BottomCart fillcolor="#86c029" point={4} />
                    </Stack>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Stack direction="row" alignItems="center" justifyContent="space-around">
                        <Typography variant="h3" sx={{ color: theme.palette.primary.dark }}>
                            All Approved PO
                        </Typography>
                        <BottomCart fillcolor="#86c029" point={0} />
                    </Stack>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default BottomCard;
