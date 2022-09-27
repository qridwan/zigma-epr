import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavButton from 'ui-component/buttons/NavButton';

import GradiantCard from 'ui-component/cards/GradiantCard';
import WhiteInput from 'ui-component/inputs/WhiteInput';
import PurchaseSteppers from './Stepper';

const OrderStats = () => {
    return (
        <Box>
            <GradiantCard title="Purchase Status">
                <Box sx={{ minHeight: '20vh' }}>
                    {/* <CreateOrder /> */}
                    <PurchaseSteppers />
                </Box>
                <Stack sx={{ width: '30%', margin: '0 auto' }} direction="column" alignItems="center">
                    <WhiteInput type="textarea" placeholder="Type your message here" />

                    <NavButton child="Send" variant="contained" size="small" sx={{ width: '40%', mt: 2 }} />
                    <Link to="/purchase-order/purchase">
                        <Typography mt={2} color="primary" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            Cancel Order
                        </Typography>
                    </Link>
                </Stack>
            </GradiantCard>
        </Box>
    );
};

export default OrderStats;
