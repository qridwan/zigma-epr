import { IconAccessPoint, IconArrowBarToDown, IconCheckbox, IconPoint, IconShoppingCartPlus } from '@tabler/icons';
import React from 'react';
import GreenCard from 'ui-component/cards/GreenCard';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

const RecentNotification = () => {
    return (
        <GreenCard title="Recent Notifications">
            <Box sx={{ height: 200, overflowY: 'auto' }}>
                <List dense={true}>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>Order placed conformed on On 02/06/22</Typography>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: 16 }}>Your order yet need to verified by the Zigma administration</Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>Approximate verify date is 04/06/2022</Typography>} />
                    </ListItem>
                </List>
            </Box>
            <Stack direction="row" justifyContent="end" mt={0}>
                <Button color="secondary" variant="outlined">
                    Show More
                </Button>
            </Stack>
        </GreenCard>
    );
};

export default RecentNotification;
