import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useAppContext } from "../../../contexts/AppContext";
import { commonStyles } from "../../../commonStyles";

const Revenue = () => {
  const { theme, leftCollapsed, rightCollapsed } = useAppContext();

  // Month-wise data points based on image analysis:
  // Current Period: starts ~8M (Jan), peaks ~18M (Mar), drops to ~10M (Apr), rises to ~24M (Jun)
  // Previous Period: starts ~13M (Jan), drops to ~8M (Mar), rises to ~21M (May), ends ~20M (Jun)
  const currentPeriodData = [8, 15, 18, 10, 17, 24];
  // Split previous period into two parts: solid (Jan-Apr) and dotted (Apr-Jun)
  const previousPeriodDataSolid = [13, 10, 8, 13, null, null]; // Jan to Apr (solid), nulls for May-Jun
  const previousPeriodDataDotted = [null, null, null, 13, 21, 20]; // Apr to Jun (dotted), nulls for Jan-Mar

  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2, 2],
      dashArray: [0, 0, 5], // solid, solid, dotted
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "var(--chart-axis-label)",
        },
        offsetX: 0,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          return `${value}M`;
        },
        style: {
          colors: "var(--chart-axis-label)",
        },
      },
      tickAmount: 3,
      min: 0,
      max: 30,
      forceNiceScale: false,
    },
    grid: {
      borderColor: "var(--chart-grid-line)",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["var(--chart-line-current)", "var(--chart-line-previous)", "var(--chart-line-previous)"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: "",
      data: currentPeriodData,
    },
    {
      name: "",
      data: previousPeriodDataSolid,
    },
    {
      name: "",
      data: previousPeriodDataDotted,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: '100%', height: '100%' }}>
      <div style={{ 
          display: 'flex', 
          gap: '24px', 
          padding: '16px 0px 0px 0px',
          alignItems: 'center'
        }}>
          <span style={{...commonStyles.sectionTitle, paddingLeft: '24px'}}>Revenue</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--chart-line-current)'
          }} />
          <span style={{ 
            color: 'var(--section-title)',
            fontSize: '12px',
            fontWeight: 400
          }}>Current Week</span>
          <span style={{ 
            color: 'var(--section-title)',
            fontSize: '12px',
            fontWeight: 600,
            marginLeft: '4px'
          }}>$58,211</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--chart-line-previous)'
          }} />
          <span style={{ 
            color: 'var(--section-title)',
            fontSize: '12px',
            fontWeight: 400
          }}>Previous Week</span>
          <span style={{ 
            color: 'var(--section-title)',
            fontSize: '12px',
            fontWeight: 600,
            marginLeft: '4px'
          }}>$68,768</span>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%", paddingLeft: "8px" }}>
        <Chart
          key={`${theme}-${leftCollapsed}-${rightCollapsed}`}
          options={chartOptions}
          series={chartSeries}
          type="line"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Revenue;
