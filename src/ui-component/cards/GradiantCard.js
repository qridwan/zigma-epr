import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import theme from 'themes';

// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0, color: 'white' },
    '& .MuiCardHeader-title': { mr: 0, color: '' },
    background: '#86C029',
    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.3)'

    // borderRadius: '30px 30px 0px 0px'
};
const GradiantCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                {...others}
                sx={{
                    background: 'linear-gradient(180deg, #94DC45 0%, rgba(255, 255, 255, 0) 100%)',
                    borderColor: theme.palette.primary[200] + 75,
                    height: '100%',
                    minHeight: '60vh',
                    boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0, 0, 0, 0.2)',
                    ':hover': {
                        boxShadow: boxShadow
                            ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            : '-5px -5px 10px rgba(255, 255, 255, 1), 5px 5px 10px rgba(0, 0, 0, 0.5)'
                    },
                    ...sx
                }}
            >
                {/* card header and action */}
                {title && (
                    <CardHeader
                        title={
                            <Typography variant="h2" color="green">
                                {title}
                            </Typography>
                        }
                        action={secondary}
                    />
                )}
                {darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={
                            <Typography variant="h2" color="green">
                                {title}
                            </Typography>
                        }
                        action={secondary}
                    />
                )}

                {/* card content */}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

GradiantCard.propTypes = {
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    contentSX: PropTypes.object,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    shadow: PropTypes.string,
    sx: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default GradiantCard;
