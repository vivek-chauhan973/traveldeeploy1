import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const GaugeChart = () => {
  // Define chart options
  const options = {
    chart: {
      id: 'gauge-chart',
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          }
        },
        track: {
          background: '#e0e0e0',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          shadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          }
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return val;
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'solid',
      colors: ['#4680ff']
    },
    series: [75], // Example value for the gauge chart
    labels: ['Average Speed'],
  };

  return (
    <div>
      <ApexChart options={options} series={options.series} type="radialBar" width="100%" />
    </div>
  );
};

export default GaugeChart;
