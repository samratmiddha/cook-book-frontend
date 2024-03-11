export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    // magin: "0rem 2rem",
    position: "fixed",
    zIndex: "10",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  }),
  heading: (theme) => ({
    color: theme.palette.secondary.main,
    fontFamily: "Oleo Script",
  }),
  linkContainer: (theme) => ({
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
  loginButtonContainer: (theme) => ({
    display: "flex",
    gap: "1rem",
    padding: "0rem 2rem",
    [theme.breakpoints.down("md")]: {
      gap: "0.5rem",
      padding: "0rem 1rem",
    },
  }),
  signUpButton: (theme) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  activeLink: (theme) => ({
    color: theme.palette.secondary.main,
    cursor: "pointer",
  }),
  link: (theme) => ({
    "&:hover": {
      color: theme.palette.secondary.light,
    },

    cursor: "pointer",
  }),
  personIcon: {
    marginRight: "3rem",
  },
  themeIcon: (theme) => ({
    marginRight: "1rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0.5rem",
    },
  }),
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
}
