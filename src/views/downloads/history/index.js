import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#86C029',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        paddingRight: '80px',
        paddingBottom: '10px',
        overflow: 'auto'
    }
}));

function createData(id, poNo, state, product, quantity, status) {
    return { id, poNo, state, product, quantity, status };
}

const rows = [
    createData('1', 'PO_CCTN_0822_001', 'Tamil Nadu', 'Post Consumer Product', '8000', 'Downloaded'),
    createData('2', 'PO_CCTN_0822_002', 'Tamil Nadu', 'Post Consumer Product', '3000', 'Downloaded'),
    createData('3', 'PO_CCTN_0822_003', 'Tamil Nadu', 'Post Consumer Product', '5000', 'Downloaded')
];
const index = () => {
    return (
        <Box sx={{ mx: 4, height: 500, overflow: 'hidden' }}>
            <Typography variant="h2" color="green">
                Download Documents History
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                sx={{
                    mt: -14,
                    mx: -14,
                    '& .super-app-theme--cell': {
                        color: '#86C029'
                    }
                }}
            >
                <Box sx={{ height: 300, width: { xs: '60%', sm: '70%', md: '80%' } }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>SL. No</StyledTableCell>
                                    <StyledTableCell align="left">Purchase Order No</StyledTableCell>
                                    <StyledTableCell align="left">State</StyledTableCell>
                                    <StyledTableCell align="left">Product</StyledTableCell>
                                    <StyledTableCell align="left">Quantity (in Tons)</StyledTableCell>
                                    <StyledTableCell align="left">Status</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ overflow: 'auto' }}>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.poNo}</StyledTableCell>
                                        <StyledTableCell align="left">{row.state}</StyledTableCell>
                                        <StyledTableCell align="left">{row.product}</StyledTableCell>
                                        <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                                        <StyledTableCell align="left" className="super-app-theme--cell">
                                            {row.status}
                                        </StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default index;
