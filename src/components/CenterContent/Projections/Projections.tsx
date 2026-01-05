import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useAppContext } from "../../../contexts/AppContext";

const Projections = () => {
  const { theme } = useAppContext();

  const getCSSVariable = (variableName: string): string => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  };

  const axisLabelColor = getCSSVariable("--chart-axis-label");
  const lowerBarColor = getCSSVariable("--chart-bar-lower");
  const upperBarColor = getCSSVariable("--chart-bar-upper");
  const gridLineColor = getCSSVariable("--chart-grid-line");

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
          colors: axisLabelColor,
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
          colors: axisLabelColor,
        },
      },
      tickAmount: 3,
      min: 0,
      max: 30,
      forceNiceScale: false,
    },
    grid: {
      borderColor: gridLineColor,
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
    colors: [lowerBarColor, upperBarColor],
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

  return (
    <div style={{ width: "100%", height: "100%", paddingLeft: '8px'}}>
      <Chart
        key={theme}
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="100%"
      />
    </div>
  );
};

export default Projections;