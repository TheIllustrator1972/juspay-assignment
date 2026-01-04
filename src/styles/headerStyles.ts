export const headerStyles = {
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "var(--primary)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    boxSizing: "border-box" as const,
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
  },
  iconButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    transition: "background-color 0.2s ease",
  },
  iconButtonClassName: "header-icon-button",
};

