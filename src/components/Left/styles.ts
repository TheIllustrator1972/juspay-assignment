export const profileStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as const,
  avatar: {
    width: "24px",
    height: "24px",
  },
  textContainer: {
    marginLeft: "12px",
  },
  name: {
    margin: 0,
    fontSize: "14px",
    color: "var(--icon-fill)",
  },
};

export const favouritesAndRecentlyStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
  } as const,
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
  } as const,
  favouritesText: {
    color: "var(--dark-highlight)",
  },
  recentlyText: {
    color: "var(--light-highlight)",
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    paddingLeft: "4px",
  } as const,
  itemContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "8px",
  } as const,
  dot: {
    width: "6px",
    height: "6px",
    backgroundColor: "var(--dot-highlight)",
    borderRadius: "50%",
  },
  itemText: {
    margin: "0px",
    padding: "4px",
    color: "var(--icon-fill)",
  },
};
