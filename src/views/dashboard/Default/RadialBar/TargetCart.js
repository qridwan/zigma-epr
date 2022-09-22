import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TargetCart = ({ title, label, point }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('lg'));
    const [data, setData] = useState(() => {
        return {
            series: [point],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: isMd ? 0 : 30
                },
                fill: {
                    colors: ['#86C029']
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '50%',
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 0,
                                left: 0,
                                blur: 3,
                                opacity: 0.5
                            }
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '13px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 'bold',
                                color: '#86C029'
                            }
                        }
                    }
                },
                DataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'medium',
                        colors: ['#86C029']
                    }
                },
                title: {
                    text: title,
                    align: 'center',
                    margin: -40,
                    offsetX: 0,
                    offsetY: 180,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'Bold',
                        fontFamily: undefined,
                        color: '#86C029'
                    }
                },
                labels: [label]
            }
        };
    });
    return (
        <div>
            <ReactApexChart options={data.options} series={data.series} type="radialBar" height={230} />
        </div>
    );
};

export default TargetCart;
