import React, { Suspense, lazy, useState } from 'react'
import { Typography, Paper } from '@mui/material'
const Chart = lazy(() => import('react-apexcharts'))

export function ChartsOperator()
{
    

    const [operator, setOperator] = useState({ 
        options: {
            chart: {
                width: 350,
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        }
                    }
                }
            },
            colors: ['#FED966', '#F2B082', '#8FAADC', '#AACF8D'],
            labels: ['Билайн', 'МТС', 'Мегафон', 'Теле2'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'right',
                offsetX: 160,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                    color: '#000',
                },
                markers: {
                    size: 0
                },
                formatter: function(seriesName: string, opts: any) {
                    return seriesName + ":  -" + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    vertical: 2
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
					legend: {
						show: false
					}
                }
            }]
        },
        series: [76, 67, 61, 90]
    })

    const header = {
        m: 0, 
        p: 0, 
        fontWeight: 500, 
        fontSize: '22px',
        color: '#7C7C7C'
    }

    return (
        <div>
            <Typography variant="h6" sx={header}>Степень информирования</Typography>
            <Paper sx={{ width: '400px', my: 3, bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Chart 
                        options={operator.options} 
                        series={operator.series} 
                        type={operator.options.chart.type}
                        width={operator.options.chart.width}
                        height={operator.options.chart.height}
                    />
                </Suspense>
            </Paper>            
        </div>
    )
}