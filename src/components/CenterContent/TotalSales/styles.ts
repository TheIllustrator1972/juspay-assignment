export const totalSalesStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    height: "100%",
    padding: "24px",
  },
  title: {
    margin: 0,
    paddingTop: "24px",
    color: "var(--section-title)",
    fontSize: "16px",
    fontWeight: 600,
  },
  chartContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    flex: 1,
    // gap: "24px",
  },
  chartWrapper: {
    width: "100%",
    maxWidth: "140px",
    height: "140px",
  },
  legend: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    width: "100%",
  },
  legendItem: {
    display: "flex",
    alignItems: "center" as const,
    gap: "12px",
  },
  legendDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  legendContent: {
    display: "flex",
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    flex: 1,
  },
  legendLabel: {
    color: "var(--section-title)",
    fontSize: "14px",
    fontWeight: 400,
  },
  legendValue: {
    color: "var(--section-title)",
    fontSize: "14px",
    fontWeight: 600,
  },
};
