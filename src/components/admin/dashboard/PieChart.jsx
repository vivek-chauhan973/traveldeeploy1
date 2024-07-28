import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'pie-chart',
      type: 'pie',
    },
    labels: ['Category A', 'Category B', 'Category C'], // Example labels
  });

  const [series, setSeries] = useState([30, 40, 50]); // Example series data

  return (
    <div>
      <ApexChart
        options={options}
        series={series}
        type="pie"
        width="100%"
      />
    </div>
  );
}

export default PieChart;
