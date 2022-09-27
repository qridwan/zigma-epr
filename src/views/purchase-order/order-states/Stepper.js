import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Typography } from '@mui/material';
import { IconArrowBarToDown, IconCheckbox, IconShoppingCartDiscount, IconUser, IconUsers } from '@tabler/icons';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: '#119639'
        }
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: '#119639'
        }
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1
    }
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    alignItems: 'center',
    ...(ownerState.active && {
        background: '#119639'
    }),
    ...(ownerState.completed && {
        background: '#119639'
    })
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <IconShoppingCartDiscount />,
        2: <IconUser />,
        3: <IconUsers />,
        4: <IconCheckbox />,
        5: <IconArrowBarToDown />
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node
};

const steps = [
    { text: 'Porder Placed', date: 'On 02/06/22' },
    { text: 'Reviewed by Admin', date: 'On 02/06/22' },
    { text: 'Approved by customer', date: '' },
    { text: 'Completed', date: '' },
    { text: 'Download', date: '' }
];

export default function PurchaseSteppers() {
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>{label.text}</Typography>
                            <Typography sx={{ fontSize: 12, fontWeight: 'medium' }}>{label?.date ?? ''}</Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
