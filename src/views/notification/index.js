import { Divider, Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { ReactComponent as Ticked } from '../../assets/images/icons/ticked.svg';
import { ReactComponent as Verification } from '../../assets/images/icons/verification.svg';
import { ReactComponent as Schedule } from '../../assets/images/icons/schedule.svg';
const Notification = () => {
    return (
        <MainCard
            title="Notification"
            secondary={
                <Typography variant="h4" sx={{ cursor: 'pointer' }}>
                    Mark all as read
                </Typography>
            }
        >
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar sx={{ width: '50px' }}>
                        {/* <Avatar> */}
                        <Ticked height={30} />
                        {/* </Avatar> */}
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: 18 }} primary="Order placed conformed on On 02/06/22" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar sx={{ width: '50px' }}>
                        <Verification height={30} />
                    </ListItemAvatar>
                    <ListItemText
                        primaryTypographyProps={{ fontSize: 18 }}
                        primary="Your order yet need to verified by the Zigma administration "
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar sx={{ width: '50px' }}>
                        <Schedule height={30} />
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: 18 }} primary="Approximate verify date is 04/06/2022" />
                </ListItem>
                <Divider />
            </List>
        </MainCard>
    );
};

export default Notification;
