export const styles = {
  popper: (theme) => ({
    zIndex: "10",
    width: "40%",
    maxHeight: "30rem",
    overflowY: "auto",

    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }),
  popperPaper: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  chip: (theme) => ({
    margin: "0.5rem",
    color: theme.palette.secondary.main,
  }),
  title: (theme) => ({
    fontFamily: "Oleo Script",
  }),
  image: {
    width: "3rem",
    marginRight: "1rem",
  },
}
