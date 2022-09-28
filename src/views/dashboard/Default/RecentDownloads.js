import React from 'react';
import { Link } from 'react-router-dom';
import { IconFileDescription, IconPoint } from '@tabler/icons';
import GreenCard from 'ui-component/cards/GreenCard';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, IconButton } from '@mui/material';

const RecentDownloads = () => {
    return (
        <GreenCard title="Recent Downloads">
            <Box sx={{ height: '200px', overflowY: 'auto' }}>
                <List dense={true}>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>PO_CC_TN_0822_001</Typography>} />

                        <Stack direction="row" ml={2} alignItems="center">
                            <Typography color="secondary">View</Typography>
                            <IconButton color="secondary" aria-label="comment">
                                <IconFileDescription />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>PO_CC_TN_0822_001</Typography>} />

                        <Stack direction="row" ml={2} alignItems="center">
                            <Typography color="secondary">View</Typography>
                            <IconButton color="secondary" aria-label="comment">
                                <IconFileDescription />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>PO_CC_TN_0822_001</Typography>} />

                        <Stack direction="row" ml={2} alignItems="center">
                            <Typography color="secondary">View</Typography>
                            <IconButton color="secondary" aria-label="comment">
                                <IconFileDescription />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>PO_CC_TN_0822_001</Typography>} />

                        <Stack direction="row" ml={2} alignItems="center">
                            <Typography color="secondary">View</Typography>
                            <IconButton color="secondary" aria-label="comment">
                                <IconFileDescription />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconPoint />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontSize: 16 }}>PO_CC_TN_0822_001</Typography>} />

                        <Stack direction="row" ml={2} alignItems="center">
                            <Typography color="secondary">View</Typography>
                            <IconButton color="secondary" aria-label="comment">
                                <IconFileDescription />
                            </IconButton>
                        </Stack>
                    </ListItem>
                </List>
            </Box>
            <Stack direction="row" justifyContent="end" mt={0}>
                <Link to="/dashboard/downloads/history" style={{ textDecoration: 'none' }}>
                    <Button color="secondary" variant="outlined">
                        Show more
                    </Button>
                </Link>
            </Stack>
        </GreenCard>
    );
};

export default RecentDownloads;
