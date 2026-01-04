export const notificationsStyles = {
  itemsContainer: { paddingTop: "8px" },
  notificationItem: {
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
  },
  iconContainer: {
    borderRadius: "8px",
    backgroundColor: "var(--notification-icon-background)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "24px",
    height: "24px",
    padding: "4px",
  },
  textContainer: {
    marginLeft: "12px",
  },
  notificationText: {
    margin: 0,
    fontSize: "14px",
    color: "var(--icon-fill)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "190px",
  },
  timeText: {
    fontSize: "12px",
    color: "gray",
  },
};
