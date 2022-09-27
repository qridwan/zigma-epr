import { Box, Button, IconButton, Stack } from '@mui/material';
import { IconPlus, IconX } from '@tabler/icons';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavButton from 'ui-component/buttons/NavButton';
import GradiantCard from 'ui-component/cards/GradiantCard';
import CreateOrder from './CreateOrder';

const Purchase = () => {
    const [isCreate, setIsCreate] = useState(false);
    return (
        <Box>
            {isCreate ? (
                <GradiantCard
                    title="Create an Order"
                    secondary={
                        <IconButton
                            color="inherit"
                            aria-label="add to shopping cart"
                            sx={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                            onClick={() => setIsCreate(false)}
                        >
                            <IconX />
                        </IconButton>
                    }
                >
                    <Box sx={{ minHeight: '40vh' }}>
                        <CreateOrder />
                    </Box>
                </GradiantCard>
            ) : (
                <GradiantCard title="Manage Orders">
                    <Box sx={{ minHeight: '40vh' }}>COMING SOON...</Box>
                    <Stack direction="row" justifyContent="center" spacing={1}>
                        <IconButton
                            color="inherit"
                            aria-label="add to shopping cart"
                            sx={{ backgroundColor: '#98D82F', color: '#FFFFFF' }}
                            onClick={() => setIsCreate(true)}
                        >
                            <IconPlus />
                        </IconButton>
                    </Stack>
                </GradiantCard>
            )}
        </Box>
    );
};

export default Purchase;
