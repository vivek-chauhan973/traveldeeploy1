import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import for ApexCharts
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const OverviewChart = () => {
    // Check if window is defined before using it
    if (typeof window !== 'undefined') {
        const options = {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            series: [
                {
                    name: 'Sales',
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                },
            ],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
        };

        // Custom styles for rounded corners
        const customStyles = `
            .apexcharts-bar-area path {
                border-radius: 10px;
            }
        `;

        return (
            <div>
                <style jsx global>{customStyles}</style>
                <ReactApexChart options={options} series={options.series} type="bar" height={350} />
            </div>
        );
    } else {
        // Return null during SSR
        return null;
    }
};

export default OverviewChart;
