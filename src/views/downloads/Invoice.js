import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Box, Typography, Stack } from '@mui/material';
import DateComponent from './DateComponent';

const columns = [
    { field: 'id', headerName: 'SL. No', width: 150, headerClassName: 'super-app-theme--header' },
    { field: 'product', headerName: 'Product', width: 200, headerClassName: 'super-app-theme--header' },
    { field: 'order', headerName: 'Purchase Order No', width: 200, headerClassName: 'super-app-theme--header' },
    {
        field: 'invoice',
        headerName: 'Invoice No',
        width: 200,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'view',
        headerName: 'View',
        width: 150,
        headerClassName: 'super-app-theme--header'
    }
];

const rows = [
    { id: 1, product: 'Post Consumer Plastics', order: 'WP-EPR-0122-001', invoice: 'INV-WP-EPR-001', view: 'Open File' },
    { id: 2, product: 'Post Consumer Plastics', order: 'WP-EPR-0122-002', invoice: 'INV-WP-EPR-002', view: 'Open File' },
    { id: 3, product: 'Post Consumer Plastics', order: 'WP-EPR-0122-003', invoice: 'INV-WP-EPR-003', view: 'Open File' }
];

const Invoice = () => {
    return (
        <>
            <Typography variant="h2" color="gray">
                Invoice
            </Typography>
            <Stack direction="row" spacing={10} sx={{ mt: 3 }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h6">From</Typography>
                    <DateComponent />
                </Stack>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h6">To</Typography>
                    <DateComponent />
                </Stack>
            </Stack>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                sx={{
                    mt: -10,
                    mx: -14,
                    '& .super-app-theme--header': {
                        backgroundColor: 'gray',
                        color: 'white'
                    }
                }}
            >
                <Box sx={{ height: 300, width: { xs: '60%', sm: '65%', md: '80%' } }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
                </Box>
                <Button variant="contained" sx={{ my: 2, background: 'green' }}>
                    Download Invoice
                </Button>
            </Box>
        </>
    );
};

export default Invoice;
