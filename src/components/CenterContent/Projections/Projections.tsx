import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useAppContext } from "../../../contexts/AppContext";
import { commonStyles } from "../../../commonStyles";

const Projections = () => {
  const { theme, leftCollapsed, rightCollapsed } = useAppContext();

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
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
      },
      axisTicks: {
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
    colors: ["var(--chart-bar-lower)", "var(--chart-bar-upper)"],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: "Primary",
      data: [16, 20, 17, 21, 14, 20], // Bottom segment (darker)
    },
    {
      name: "Secondary",
      data: [4, 4, 4, 5, 4, 4], // Top segment (lighter)
    },
  ];

  // Create a unique key that changes when sidebar collapse state changes
  const reRender = `${theme}-${leftCollapsed}-${rightCollapsed}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <span
        style={{ ...commonStyles.sectionTitle, padding: "24px 0px 0px 24px" }}
      >
        Projections vs Actuals
      </span>
      <div style={{ width: "100%", height: "100%", paddingLeft: "8px" }}>
        <Chart
          key={reRender}
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Projections;
