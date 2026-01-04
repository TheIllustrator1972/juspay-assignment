export const DROPDOWN_CONSTANTS = {
  sectionTitle: {
    fontSize: "14px",
    fontWeight: 600,
    margin: "0 0 16px 0",
    padding: 0,
    opacity: 0.7,
  },

  container: {
    width: "100%",
  },

  list: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },

  itemWrapper: {
    display: "flex",
    flexDirection: "column" as const,
  },

  baseItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px 16px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease",
    borderRadius: "8px",
    position: "relative" as const,
    width: "100%",
    textAlign: "left" as const,
    fontSize: "14px",
    fontWeight: 500,
  },

  activeItem: {
    position: "relative" as const,
  },

  activeBar: {
    position: "absolute" as const,
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "3px",
    height: "60%",
    borderRadius: "4px",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "20px",
    height: "20px",
  },

  label: {
    flex: 1,
  },

  chevron: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
    flexShrink: 0,
  },

  children: {
    display: "flex",
    flexDirection: "column" as const,
    paddingLeft: "32px",
    gap: "2px",
    marginTop: "4px",
  },
};
