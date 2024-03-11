export const styles = {
  card: (theme) => ({
    width: "25rem",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    minHeight: "20rem",
  }),
  cardActionArea: {
    width: "100%",
    height: "100%",
  },
  addIcon: (theme) => ({
    fontSize: 60,
    color: theme.palette.secondary.main,
    marginTop: "1rem",
  }),
  heading: {
    marginBottom: "1rem",
  },
}
