import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarCart = () => {
    const [data, setData] = useState(() => {
        return {
            series: [
                {
                    name: 'Inflation',
                    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 8.4, 4.8, 2.5, 6.2]
                }
            ],
            options: {
                chart: {
                    // height: 350,
                    height: '100%',
                    type: 'bar',
                    offsetY: 20
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#86C029', '#FFFFFF'], // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 30],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    color: '#86C029',
                                    opacity: 1
                                },
                                {
                                    offset: 0.6,
                                    color: '#86C029',
                                    opacity: 50
                                },
                                {
                                    offset: 100,
                                    color: '#FFFFFF',
                                    opacity: 1
                                }
                            ]
                        ]
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top' // top, center, bottom
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + '%';
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ['#304758']
                    }
                },

                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    position: 'bottom',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#86C029',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5
                            }
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + '%';
                        }
                    }
                }
                // title: {
                //     text: 'Monthly Inflation in Argentina, 2002',
                //     floating: true,
                //     offsetY: 140,
                //     align: 'center',
                //     style: {
                //         color: '#444'
                //     }
                // }
            }
        };
    });
    return (
        <div>
            <ReactApexChart options={data.options} series={data.series} type="bar" height={150} />
        </div>
    );
};

export default BarCart;
