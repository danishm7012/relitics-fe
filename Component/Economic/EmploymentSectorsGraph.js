import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class EmploymentSectorsGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Number of jobs (in thousands) in OCTOBER",
                data: [400, 1200, 430, 1100, 448, 870, 540, 580, 690, 1380, 690, 330, 345],
                color: '#022945',
            }],
            options: {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                        barHeight: '110',
                    }
                },
                grid: {
                    show: false,
                },
                stroke: {
                    width: 3,
                    lineCap: 'round',
                    colors: ["#fff"]
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16'
                },
                dataLabels: {
                    enabled: false,
                    fontSize: '16'
                },
                xaxis: {
                    categories: ['Total Nonfarm', 'Mining and Logging', 'Construction', 'Manufacturing',
                        'Trade, Transportation and Utilities', 'Information', 'Financial Activities',
                        'Professional and Business', 'Education and Health Services', 'Leisure and Hospitality', 'Other Services', 'Government'
                    ],
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>


        );
    }
}

export default EmploymentSectorsGraph