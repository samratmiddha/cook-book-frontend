import backgroundImage from "../../assets/recipe_table.webp"

export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.contrastText,
  }),
  heroContainer: {
    position: "relative",
    height: "100vh",
    width: "100%",
    // overflow: "hidden",
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url(${backgroundImage}) center/cover`,
    zIndex: 0,
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  subHeading: (theme) => ({
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
    marginBottom: "1.5rem",
  }),
  welcomeHeading: (theme) => ({
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
    fontFamily: "Oleo Script",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "1.5rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1rem",
    // },
  }),
  heading: {
    fontFamily: "Oleo Script",
    margin: "2rem",
    alignSelf: "center",
  },
  recipeCardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  aboutMeContainer: (theme) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    padding: "4rem",
    marginTop: "3rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }),
  aboutMeContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  avatar: {
    width: "15rem",
    height: "15rem",
  },
  searchBar: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "0.25rem",
    marginTop: "3rem",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }),
  searchBarInputProps: (theme) => ({
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  }),
  searchIcon: (theme) => ({
    color: theme.palette.secondary.main,
  }),
}
