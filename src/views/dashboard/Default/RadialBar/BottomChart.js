import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BottomCart = ({ point, fillcolor }) => {
    const [data, setData] = useState(() => {
        return {
            series: [point * 10],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: 0
                },
                fill: {
                    colors: [fillcolor]
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '50%',
                            position: 'front'
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: false
                            },
                            value: {
                                show: true,
                                fontSize: '16px',
                                fontWeight: 600,
                                color: undefined,
                                offsetY: 8,
                                formatter: function (val) {
                                    return val / 10;
                                }
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
                }
                // title: {
                //     text: title,
                //     align: 'center',
                //     margin: -40,
                //     offsetX: 0,
                //     offsetY: 180,
                //     floating: false,
                //     style: {
                //         fontSize: '14px',
                //         fontWeight: 'Bold',
                //         fontFamily: undefined,
                //         color: '#86C029'
                //     }
                // },
                // labels: [label]
            }
        };
    });
    return (
        <div>
            <ReactApexChart options={data.options} series={data.series} type="radialBar" height={130} width={130} />
        </div>
    );
};

export default BottomCart;
