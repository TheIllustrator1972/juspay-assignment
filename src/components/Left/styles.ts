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
