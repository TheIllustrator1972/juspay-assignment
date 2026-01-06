export const revenueByLocationStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    height: "100%",
    padding: "24px 24px",
  },
  title: {
    margin: 0,
    paddingTop: "24px",
  },
  mapContainer: {
    width: "100%",
    height: "140px",
    borderRadius: "8px",
    overflow: "hidden" as const,
    position: "relative" as const,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  geography: {
    default: { outline: "none" },
    hover: { outline: "none" },
    pressed: { outline: "none" },
  } as const,
  pinGlow: {
    filter: "blur(4px)",
  },
  pin: {
    filter: "drop-shadow(0 0 6px var(--map-pin-glow))",
  },
  locationList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
    flex: 1,
  },
  locationItem: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  locationHeader: {
    display: "flex",
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
  },
  locationName: {
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  locationRevenue: {
    color: "var(--section-title)",
    fontSize: "12px",
    fontWeight: 400,
  },
  progressBarContainer: {
    width: "100%",
    height: "4px",
    backgroundColor: "var(--light-highlight)",
    borderRadius: "2px",
    overflow: "hidden" as const,
  },
  getProgressBar: (percentage: number) => ({
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: "var(--progress-bar-color)",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  }),
};
