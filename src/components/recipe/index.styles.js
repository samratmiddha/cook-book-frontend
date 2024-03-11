export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.contrastText,
  }),
  title: (theme) => ({
    marginTop: "8rem",
    alignSelf: "center",
    fontFamily: "Oleo Script",
  }),
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: "30rem",
    height: "30rem",
    margin: "4rem",
    borderRadius: "0.5rem",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    marginTop: "4rem",
    display: "flex",
    flexDirection: "column",
  },
  heading: (theme) => ({
    marginTop: "1rem",
    color: theme.palette.secondary.main,
  }),
  editButton: {
    width: "30rem",
    margin: "1rem 4rem",
  },
  deleteButton: (theme) => ({
    width: "30rem",
    margin: "1rem 4rem",
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.error.main,
    },
  }),
}
