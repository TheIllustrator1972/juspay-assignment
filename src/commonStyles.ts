export const commonStyles = {
  container: {
    height: "100vh",
    maxHeight: "100vh",
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "var(--primary)",
    borderLeft: `1px solid var(--main-content-border)`,
    borderRight: `1px solid var(--main-content-border)`,
    overflow: "scroll",
  },
  leftSidebar: {
    height: "100vh",
    width: "280px",
    transition: "width 0.3s ease",
    overflow: "hidden",
    backgroundColor: "var(--sidebar-bg)",
  },
  leftSidebarCollapsed: {
    width: "0",
    overflow: "hidden",
  },
  rightSidebar: {
    height: "100vh",
    width: "280px",
    transition: "width 0.3s ease",
    overflow: "hidden",
    backgroundColor: "var(--sidebar-bg)",
  },
  rightSidebarCollapsed: {
    width: "0",
    overflow: "hidden",
  },
  sidebarContent: {
    height: "100%",
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: "16px",
    // "line-height": "20px",
    "letter-spacing": "0%",
    color: "var(--section-title)",
  },
  mainContentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "24px",
    padding: "24px",
  } as const,
};

export const mainContentGridStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 30%)",
    gap: "36px",
    width: "100%",
    height: "100%",
  } as const,
  baseItem: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    minHeight: "318px",
  },
  half: {
    gridColumn: "span 2",
  },
  threeQuarters: {
    gridColumn: "span 3",
  },
  oneQuarter: {
    gridColumn: "span 1",
  },
};
