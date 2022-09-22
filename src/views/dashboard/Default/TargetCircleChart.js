import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import { gridSpacing } from 'store/constant';
import TargetCart from './RadialBar/TargetCart';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative'
    // '&:after': {
    //     content: '""',
    //     position: 'absolute',
    //     width: 210,
    //     height: 210,
    //     background: theme.palette.secondary[800],
    //     borderRadius: '50%',
    //     top: -85,
    //     right: -95,
    //     [theme.breakpoints.down('sm')]: {
    //         top: -105,
    //         right: -140
    //     }
    // },
    // '&:before': {
    //     content: '""',
    //     position: 'absolute',
    //     width: 210,
    //     height: 210,
    //     background: theme.palette.secondary[800],
    //     borderRadius: '50%',
    //     top: -125,
    //     right: -15,
    //     opacity: 0.5,
    //     [theme.breakpoints.down('sm')]: {
    //         top: -155,
    //         right: -70
    //     }
    // }
}));

// ===========================|| DASHBOARD DEFAULT - Target chart CARD ||=========================== //

const TargetCircleCharts = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={4}>
                                <TargetCart title="EPR Target" label="1000 MT" point={40} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TargetCart title="EPR Target Achieved" label="300MT" point={60} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TargetCart title="Invoice" label="1" point={20} />
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TargetCircleCharts.propTypes = {
    isLoading: PropTypes.bool
};

export default TargetCircleCharts;
