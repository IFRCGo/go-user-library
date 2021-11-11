export const ChartData = {
    "line": {
        title: 'DREF AND APPEALS (OVER THE LAST YEAR)',
        series: [
            {
                name: "DREFs",
                data: [0, 1, 2, 2, 5, 6]
            },
            {
                name: "APPEALS",
                data: [3, 5, 3, 7, 11, 10]
            }
        ],
        options: {
            colors: ['#FF9E00', '#F5333F'],
            chart: {
                height: 350,
                width: 450,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: true
            },
            title: {
                text: 'Page Statistics',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function(val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
                row: {
                    colors: ['#f3f4f5', '#fff'],
                    opacity: 1
                }
            },
        }
    },
    "bar": {
        title: 'EMERGENCIES BY TYPE (YTD)',
        series: [{
            data: [15, 7, 6, 5, 3, 2]
        }],
        grid: {
            borderColor: '#f1f1f1',
        },
        options: {
            height: 350,
            width: 450,
            fill: {
                colors: '#FF0000'
            },
            chart: {
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    borderRadius: 20,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: ['Cyclones', 'Earthquake', 'Flood', 'Pluvial / Flash Flood', 'Other', 'Epidemics'
                ],
            }
        }
    },
    "apexChart": {
        title: 'EMERGENCIES OVER TIME (YTD)',
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 248]
        }],
        options: {
            colors: ["#FF0000"],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                fill: {
                    colors: "#FFFF00",
                },
            },
            dataLabels: {
                enabled: true
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left'
            },
            grid: {
                borderColor: '#f1f1f1',
                row: {
                    colors: ['#f3f4f5', '#fff'],
                    opacity: 1
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        }
    }
}

export default ChartData;