import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useAppContext } from "../../../contexts/AppContext";
import { totalSalesStyles } from "./styles";

const TotalSales = () => {
  const { theme } = useAppContext();

  const salesData = [
    { name: "Direct", value: 300.56 },
    { name: "Affiliate", value: 135.18 },
    { name: "Sponsored", value: 154.02 },
    { name: "E-mail", value: 48.96 },
  ];

  const total = salesData.reduce((sum, item) => sum + item.value, 0);
  const affiliatePercentage = ((salesData[1].value / total) * 100).toFixed(1);

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: [
      "var(--sales-direct)",
      "var(--sales-affiliate)",
      "var(--sales-sponsored)",
      "var(--sales-email)",
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              label: affiliatePercentage + "%",
              fontSize: "24px",
              fontWeight: 600,
              color: "var(--section-title)",
              formatter: () => affiliatePercentage + "%",
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
  };

  const chartSeries = salesData.map((item) => item.value);

  return (
    <div style={totalSalesStyles.container}>
      <h3 style={totalSalesStyles.title}>Total Sales</h3>
      <div style={totalSalesStyles.chartContainer}>
        <div style={totalSalesStyles.chartWrapper}>
          <Chart
            key={theme}
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height="100%"
          />
        </div>
        <div style={totalSalesStyles.legend}>
          {salesData.map((item, index) => {
            const colors = [
              "var(--sales-direct)",
              "var(--sales-affiliate)",
              "var(--sales-sponsored)",
              "var(--sales-email)",
            ];
            return (
              <div key={index} style={totalSalesStyles.legendItem}>
                <div
                  style={{
                    ...totalSalesStyles.legendDot,
                    backgroundColor: colors[index],
                  }}
                />
                <div style={totalSalesStyles.legendContent}>
                  <span style={totalSalesStyles.legendLabel}>{item.name}</span>
                  <span style={totalSalesStyles.legendValue}>
                    ${item.value.toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
