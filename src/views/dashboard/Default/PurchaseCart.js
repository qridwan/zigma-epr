import { IconAccessPoint, IconArrowBarToDown, IconCheckbox, IconShoppingCartPlus } from '@tabler/icons';
import React from 'react';
import GreenCard from 'ui-component/cards/GreenCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';

const PurchaseCart = () => {
    return (
        <GreenCard title="Live Status Purchase Order" secondary={<IconAccessPoint />}>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0
                    }
                }}
                position="left-align"
            >
                <TimelineItem>
                    <TimelineSeparator>
                        {/* <TimelineConnector /> */}
                        <TimelineDot color="primary" variant="outlined">
                            <IconShoppingCartPlus />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Order Placed
                        </Typography>
                        <Typography>On 02/06/22</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <IconCheckbox />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="span">
                            Verified
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="primary">
                            <IconArrowBarToDown />
                        </TimelineDot>
                        {/* <TimelineConnector /> */}
                    </TimelineSeparator>
                    <TimelineContent sx={{ px: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="span">
                            Download
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Stack direction="row" justifyContent="end" mt={-6}>
                <Button color="secondary" variant="outlined">
                    Show More
                </Button>
            </Stack>
        </GreenCard>
    );
};

export default PurchaseCart;
