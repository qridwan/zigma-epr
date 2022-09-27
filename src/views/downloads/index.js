import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Invoice from './Invoice';
import Documents from './Documents';

const Downloads = () => {
    const [isDocumentClicked, setIsDocumentClicked] = useState(false);
    const [isInvoiceClicked, setIsInvoiceClicked] = useState(true);
    const [invoiceVariant, setInvoiceVariant] = useState('contained');
    const [documentVariant, setDocumentVariant] = useState('outlined');

    const handleDocumentClick = () => {
        setIsInvoiceClicked(false);
        setIsDocumentClicked(true);
        setInvoiceVariant('outlined');
        setDocumentVariant('contained');
    };

    const handleInvoiceClick = () => {
        setIsDocumentClicked(false);
        setIsInvoiceClicked(true);
        setDocumentVariant('outlined');
        setInvoiceVariant('contained');
    };

    return (
        <>
            <Stack direction="row" spacing={{ xs: 20, sm: 30, md: 50 }} sx={{ mt: 2, mb: 5, display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleInvoiceClick} variant={invoiceVariant}>
                    Invoice
                </Button>
                <Button onClick={handleDocumentClick} variant={documentVariant}>
                    Document
                </Button>
            </Stack>
            <MainCard sx={{ mx: 4, height: '80%' }}>{isInvoiceClicked ? <Invoice /> : <Documents />}</MainCard>
        </>
    );
};

export default Downloads;
