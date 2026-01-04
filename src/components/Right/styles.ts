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
    color: "var(--time-text)",
  },
};

export const activitiesStyles = {
  itemsContainer: { paddingTop: "8px" },
  activityItem: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "8px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  } as const,
  image: {
    width: "24px",
    height: "24px",
  },
  textContainer: {
    marginLeft: "12px",
  },
  activityText: {
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
  verticalDivider: {
    width: "1px",
    height: "14px",
    backgroundColor: "var(--vertical-divider)",
    borderRadius: "999px",
  },
};

export const contactsStyles = {
  itemsContainer: {
    paddingTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  } as const,
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  } as const,
  image: {
    width: "24px",
    height: "24px",
  },
  textContainer: {
    marginLeft: "12px",
  },
  contactName: {
    margin: 0,
    fontSize: "14px",
    color: "var(--icon-fill)",
  },
};
