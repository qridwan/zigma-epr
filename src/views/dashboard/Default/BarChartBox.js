import { Box } from '@mui/material';
import React from 'react';
import GreenCard from 'ui-component/cards/GreenCard';
import PropTypes from 'prop-types';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import BarCart from './BarCart/BarCart';

const BarChartBox = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <GreenCard title="Static Data">
                    <BarCart />
                </GreenCard>
            )}
        </>
    );
};

BarChartBox.propTypes = {
    isLoading: PropTypes.bool
};
export default BarChartBox;
