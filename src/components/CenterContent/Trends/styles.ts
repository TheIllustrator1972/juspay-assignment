export const trendsStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "24px",
    height: "100%",
    width: "100%",
  },
  cardBase: {
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "sans-serif",
    padding: "16px 24px",
  } as const,
};

export const statCardStyles = {
  title: { fontSize: "14px", fontWeight: "600" },
  textContainer: { display: "flex", alignItems: "center", gap: "15px" },
  value: { fontSize: "24px", fontWeight: "600", margin: 0 },
  trend: { fontSize: "12px", fontWeight: "400" },
};
