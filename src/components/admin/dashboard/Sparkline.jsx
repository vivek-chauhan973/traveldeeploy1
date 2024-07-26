import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const customTooltipCSS = `
  .apexcharts-tooltip {
    background: #e6e6ff !important;
    border: 1px solid #ccc !important;
    color: #333 !important;
  }
  .apexcharts-tooltip-title {
    font-weight: bold !important;
  }
  .apexcharts-tooltip-title, .apexcharts-zaxistooltip-bottom.apexcharts-theme-light {
    display: none;
  }
`;

export default function SparklineChart() {
  return (
    <>
      <style>{customTooltipCSS}</style>
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
            },
          },
          stroke: {
            curve: "smooth",
            width: 1.5,
            colors: ["#F07B01"],
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
            colors: ["#D8EFFE"],
            opacity: 0.9,
            type: 'gradient',
            fillTo: 1,
          },
          dataLabels: { enabled: false },
          legend: { show: false },
          xaxis: { labels: { show: false } },
          yaxis: { labels: { show: false } },
          title: {
            text: "$424,000",
            offsetX: 0,
            style: {
              fontSize: '18px',
              color: '#333333',
              fontWeight:'bolder'
            }
          },
          subtitle: {
            text: "Package",
            offsetX: 0,
            style: {
              fontSize: '13px',
              color: ' #004080',
              fontWeight:'bold'
            }
          },
          tooltip: {
            enabled: true,
            theme: 'light' // Use 'dark', 'light', or 'bootstrap'
          }
        }}
        series={[
          {
            name: "Series 1",
            data: [30, 40, 25, 50, 49, 21, 70, 51, 30, 40, 25, 60],
            color:'#ffa31a'
          }
        ]}
        height="120"
        type="area"
      />
    </>
  );
}
