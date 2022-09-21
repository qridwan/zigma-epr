// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://zigma-epr.io" target="_blank" underline="hover">
            zigma-epr.io
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://bipolarfactory.com" target="_blank" underline="hover">
            &copy; bipolarfactory.com
        </Typography>
    </Stack>
);

export default AuthFooter;
