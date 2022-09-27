import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import authbg from '../../assets/images/auth/auth-bg.svg';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid container sx={{ height: '100%', backgroundColor: theme.palette.primary.light, minHeight: '100vh' }}>
                {!isMobile && (
                    <Grid item md={6}>
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{}} mt={20}>
                            <img src={authbg} alt="auth" width="80%" />
                        </Stack>
                    </Grid>
                )}
                <Grid item md={4}>
                    <Outlet />
                </Grid>
            </Grid>
            {/* <Customization /> */}
        </>
    );
};

export default MinimalLayout;
