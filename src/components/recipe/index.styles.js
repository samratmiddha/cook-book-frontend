export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.contrastText,
  }),
  title: (theme) => ({
    marginTop: "8rem",
    alignSelf: "center",
    fontFamily: "Oleo Script",
  }),
  descriptionContainer: (theme) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }),
  image: {
    width: "30rem",
    height: "30rem",
    margin: "4rem",
    borderRadius: "0.5rem",
  },
  smallImage: {
    width: "75vw",
    aspectRatio: "1 /1",
    margin: "2rem",
    borderRadius: "0.25rem",
  },
  extraSmallImage: {
    width: "75%",

    margin: "1rem",
    borderRadius: "0.25rem",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: (theme) => ({
    marginTop: "4rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  }),
  heading: (theme) => ({
    marginTop: "1rem",
    color: theme.palette.secondary.main,
  }),
  editButton: (theme) => ({
    width: "30rem",
    margin: "1rem 4rem",
    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      margin: "1rem 2rem",
    },
  }),
  deleteButton: (theme) => ({
    width: "30rem",
    margin: "1rem 4rem",
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.error.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      margin: "1rem 2rem",
    },
  }),
}
