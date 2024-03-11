export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: "25rem",
    padding: "1rem",
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.contrastText,
  }),
  dataContainer: {
    width: "18rem",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dataHeading: (theme) => ({
    display: "inline",
    color: theme.palette.secondary.main,
  }),
  data: (theme) => ({
    display: "inline",
  }),
  logoutButton: (theme) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    transition: "transform 0.5s",
    width: "100%",
    marginTop: "1rem",

    "&:hover": {
      backgroundColor: theme.palette.error.main,
      transform: "scale(1.05)",
    },
  }),
}
