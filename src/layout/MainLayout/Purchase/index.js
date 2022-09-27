import { Box, Button, IconButton, Stack } from '@mui/material';

import React, { useEffect } from 'react';

import { useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import NavButton from 'ui-component/buttons/NavButton';

// ==============================|| PURCHASE LAYOUT ||============================== //

const PurchaseLayout = () => {
    const [isSelected, setIsSelected] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsSelected(location.pathname.toString().split('/')[2] === 'purchase');
    }, [location]);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-evenly" sx={{ my: 2 }}>
                <Link to="/purchase-order/purchase">
                    <NavButton variant={isSelected ? 'contained' : 'outlined'} color="secondary" child="Purchase Order" />
                </Link>

                <Link to="/purchase-order/order-status">
                    <NavButton variant={isSelected ? 'outlined' : 'contained'} color="secondary" child=" Order Status" />
                </Link>
            </Stack>

            <Outlet />
        </Box>
    );
};

export default PurchaseLayout;
