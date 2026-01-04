export const commonStyles = {
  container: {
    minHeight: "100vh",
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "var(--primary)",
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
    "line-height": "20px",
    "letter-spacing": "0%",
    color: "var(--section-title)",
  },
};
