import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, useMediaQuery } from '@mui/material';

// assets
import { IconBell } from '@tabler/icons';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
    const theme = useTheme();
    // const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
    const [from, setFrom] = useState('/');
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggle = () => {
        if (Boolean(location.pathname !== '/user/notification')) {
            setFrom(location.pathname);
            navigate('/user/notification');
        } else {
            navigate(from);
        }
    };

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: !Boolean(location.pathname !== '/user/notification')
                                ? theme.palette.secondary.light
                                : theme.palette.secondary.dark,
                            color: !Boolean(location.pathname !== '/user/notification')
                                ? theme.palette.secondary.dark
                                : theme.palette.secondary.light
                            // '&[aria-controls="menu-list-grow"],&:hover': {
                            //     background: theme.palette.secondary.light,
                            //     color: theme.palette.secondary.dark
                            // }
                        }}
                        // aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                    >
                        <IconBell stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>
        </>
    );
};

export default NotificationSection;
