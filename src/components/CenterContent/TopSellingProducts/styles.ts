export const topSellingProductsStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    height: "100%",
    padding: "24px",
  },
  title: {
    margin: 0,
    paddingBottom: "24px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    backgroundColor: "var(--section-background)",
    borderRadius: "8px",
    overflow: "hidden" as const,
  },
  tableHeader: {
    backgroundColor: "var(--section-background)",
  },
  headerCell: {
    padding: "12px 16px",
    textAlign: "left" as const,
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 600,
    borderBottom: "1px solid var(--light-highlight)",
  },
  tableBody: {
    backgroundColor: "var(--section-background)",
  },
  tableRow: {
    borderBottom: "1px solid var(--light-highlight)",
  },
  tableRowLast: {
    borderBottom: "none",
  },
  tableCell: {
    padding: "12px 16px",
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  nameCell: {
    padding: "12px 16px",
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  priceCell: {
    padding: "12px 16px",
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  quantityCell: {
    padding: "12px 16px",
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  amountCell: {
    padding: "12px 16px",
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
};

