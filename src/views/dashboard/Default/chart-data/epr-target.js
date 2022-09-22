const eprTargetData = {
    series: [80],
    options: {
        chart: {
            type: 'radialBar'
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
            text: 'EPR Target',
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
        labels: ['EPR Target']
    }
};

export default eprTargetData;
