import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function TestChart() {
  return (
    <Chart
      options={{
        chart: {
          type: "area",
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        stroke: {
            curve: "smooth",
            width: 4,
            colors: ["#98C13C"],
            opacity: 0.3
          },
        grid: {
          xaxis: { lines: { show: false } },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          colors: ["#A3AAB7"]
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: { labels: { show: false } },
        yaxis: { labels: { show: false } },
        title: {
          text: "Sparkline Chart Title",
          offsetX: 0,
          style: {
            fontSize: '18px',
            color: '#333' // You can adjust the color as needed
          }
        },
        subtitle: {
          text: "Sparkline Chart Subtitle",
          offsetX: 0,
          style: {
            fontSize: '14px',
            color: '#666' // You can adjust the color as needed
          }
        }
      }}
      series={[
        {
          name: "Series 1",
          data: [30, 40, 25, 50, 49, 21, 70, 51, 30, 40, 25, 60]
        }
      ]}
      width="265px"
      height="auto"
      type="area"
    />
  );
}
