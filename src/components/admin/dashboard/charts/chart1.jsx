import React from 'react';
import dynamic from 'next/dynamic';
// Dynamically import the ApexChart component with no SSR
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class Chart1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Travel',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Car Rental',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Hotel',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 2],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            borderRadius: 2,
            colors: {
              ranges: [{
                from: -100,
                to: 100,
                color: '#004080'
              }]
            }
          }
        },
        fill: {
          opacity: [0.85, 1, 1],
          type: ['solid', 'solid', 'solid']
        },
        colors: ['#004080', '#fec180', '#FF4560'], // Customize the colors for column, area, and line
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart" >
          <ApexChart options={this.state.options} series={this.state.series} type="line" height={350}  className="md:w-[550px] xl:w-[450px]" />
        </div>
      </div>
    );
  }
}

export default Chart1;
