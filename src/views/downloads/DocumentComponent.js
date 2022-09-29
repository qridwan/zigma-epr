import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box, Typography, Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
import ViewDownload from './ViewDownload';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'gray',
        color: theme.palette.common.white,
        height: '5px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        paddingRight: '80px',
        paddingBottom: '10px',
        margin: 0
    }
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '30px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    p: 2,
    background: 'linear-gradient(180deg, #666666 0%, #E7EBEF 100%)'
};

function createData(id, poNo, poDate, from, to, state, product, certificate, quantity, status, action) {
    return { id, poNo, poDate, from, to, state, product, certificate, quantity, status, action };
}

const rows = [
    createData('1', 'PO_CCTN_0822_001', '01/08/2022', '08/2022', '09/2022', 'TN', 'MLP', 'Document', '8000', 'PENDING', 'View/Download'),
    createData('2', 'PO_CCTN_0822_001', '01/08/2022', '08/2022', '09/2022', 'TN', 'MLP', 'Document', '8000', 'PENDING', 'View/Download'),
    createData('3', 'PO_CCTN_0822_001', '01/08/2022', '08/2022', '09/2022', 'TN', 'MLP', 'Document', '8000', 'PENDING', 'View/Download')
];

export default function DocumentComponent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Typography variant="h2" color="gray">
                Documents
            </Typography>
            <Button variant="contained" sx={{ my: 3, background: 'gray', px: 3, py: 0 }}>
                Filter
            </Button>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                sx={{
                    mt: -18,
                    mx: -14,
                    '& .super-app-theme--cell': {
                        color: '#86C029',
                        cursor: 'pointer'
                    }
                }}
            >
                <Box sx={{ height: 300, width: { xs: '60%', sm: '70%', md: '80%' }, overflowY: 'scroll' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>SL. No</StyledTableCell>
                                    <StyledTableCell align="left">PO No.</StyledTableCell>
                                    <StyledTableCell align="left">PO Date</StyledTableCell>
                                    <StyledTableCell align="left">From</StyledTableCell>
                                    <StyledTableCell align="left">To</StyledTableCell>
                                    <StyledTableCell align="left">State</StyledTableCell>
                                    <StyledTableCell align="left">Product</StyledTableCell>
                                    <StyledTableCell align="left">WC Certificate</StyledTableCell>
                                    <StyledTableCell align="left">Net Quantity (in Tons)</StyledTableCell>
                                    <StyledTableCell align="left">PO Status</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.poNo}</StyledTableCell>
                                        <StyledTableCell align="left">{row.poDate}</StyledTableCell>
                                        <StyledTableCell align="left">{row.from}</StyledTableCell>
                                        <StyledTableCell align="left">{row.to}</StyledTableCell>
                                        <StyledTableCell align="left">{row.state}</StyledTableCell>
                                        <StyledTableCell align="left">{row.product}</StyledTableCell>
                                        <StyledTableCell align="left">{row.certificate}</StyledTableCell>
                                        <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                                        <StyledTableCell align="left">{row.status}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Button className="super-app-theme--cell" onClick={handleOpen}>
                                                {row.action}
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Stack
                                direction="row"
                                spacing={{ xs: 25, sm: 35, md: 65, lg: 100 }}
                                sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'between' }}
                            >
                                <Typography id="modal-modal-title" variant="h2" color="white" component="h2">
                                    View Download
                                </Typography>
                                <Button onClick={handleClose}>
                                    <CancelOutlinedIcon sx={{ color: 'white' }} />
                                </Button>
                            </Stack>
                            <ViewDownload />
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </>
    );
}
