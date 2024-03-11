export const styles = {
  heading: {
    fontFamily: "Oleo Script",
  },
  card: (theme) => ({
    width: "25rem",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
}
