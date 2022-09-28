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
import { Box, Stack, Grid, TextField, InputLabel } from '@mui/material';
import TextFieldComponent from 'ui-component/inputs/TextFieldComponent';

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

function createData(id, truckNo, dcNo, qty, frontImg, loadedImg, sourceWeigh, lrCopy, wbSlip, eWayBill, cpc) {
    return { id, truckNo, dcNo, qty, frontImg, loadedImg, sourceWeigh, lrCopy, wbSlip, eWayBill, cpc };
}

const rows = [
    createData(
        '1',
        'PO_CCTN_0822_001',
        'CDK-DC-2207-0079',
        '29.6',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View/Download'
    ),
    createData(
        '1',
        'PO_CCTN_0822_001',
        'CDK-DC-2207-0079',
        '29.6',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View / Download',
        'View/Download'
    )
];

export default function DocumentComponent() {
    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid item xs={12} md={6}>
                    <Grid container rowSpacing={1.5} columnSpacing={20}>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                PO No
                            </InputLabel>
                            <TextFieldComponent placeholder="PO_CC_TN_0822_001" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                State
                            </InputLabel>
                            <TextFieldComponent placeholder="TN" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                From
                            </InputLabel>
                            <TextFieldComponent placeholder="01/01/2022" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                PO Date
                            </InputLabel>
                            <TextFieldComponent placeholder="01/08/2022" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                Product
                            </InputLabel>
                            <TextFieldComponent placeholder="Post Consumer Plastics" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ color: 'white' }}>
                                To
                            </InputLabel>
                            <TextFieldComponent placeholder="01/01/2022" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                sx={{
                    mt: -8,
                    mx: -14,
                    '& .super-app-theme--cell': {
                        color: '#86C029',
                        cursor: 'pointer'
                    }
                }}
            >
                <Box sx={{ height: 100, width: { xs: '30%', sm: '40%', md: '60%' }, mb: 25, mt: 15 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="customized table">
                            <TableHead sx={{ height: 2 }}>
                                <TableRow sx={{ height: 5 }}>
                                    <StyledTableCell>SL. No</StyledTableCell>
                                    <StyledTableCell align="left">Truck No</StyledTableCell>
                                    <StyledTableCell align="left">DC No</StyledTableCell>
                                    <StyledTableCell align="left">Net Qty (in Tons)</StyledTableCell>
                                    <StyledTableCell align="left">(Front Image)/(With GPS & Time Stamp)</StyledTableCell>
                                    <StyledTableCell align="left">(Loaded Image)/(With GPS & Time Stamp)</StyledTableCell>
                                    <StyledTableCell align="left">Source Weigh Bridge Slip</StyledTableCell>
                                    <StyledTableCell align="left">LR Copy</StyledTableCell>
                                    <StyledTableCell align="left">Destination WB Bill</StyledTableCell>
                                    <StyledTableCell align="left">E Way Bill</StyledTableCell>
                                    <StyledTableCell align="left">CPC</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.truckNo}</StyledTableCell>
                                        <StyledTableCell align="left">{row.dcNo}</StyledTableCell>
                                        <StyledTableCell align="left">{row.qty}</StyledTableCell>
                                        <StyledTableCell align="left">{row.frontImg}</StyledTableCell>
                                        <StyledTableCell align="left">{row.loadedImg}</StyledTableCell>
                                        <StyledTableCell align="left">{row.sourceWeigh}</StyledTableCell>
                                        <StyledTableCell align="left">{row.lrCopy}</StyledTableCell>
                                        <StyledTableCell align="left">{row.wbSlip}</StyledTableCell>
                                        <StyledTableCell align="left">{row.eWayBill}</StyledTableCell>
                                        <StyledTableCell align="left">{row.cpc}</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Stack direction="column" spacing={2} sx={{ mt: 10 }}>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={6}
                        size="large"
                        sx={{
                            width: { sm: 200, md: 300 },
                            border: 'none',
                            outline: 'none',
                            '& .MuiInputBase-root': {
                                mt: 1
                            }
                        }}
                        placeholder="Add your comments"
                    />
                    <p>Approve the documents to download/print files</p>
                    <Stack direction="row" spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button sx={{ color: 'red' }}>Reject</Button>
                        <Button>Approve</Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
