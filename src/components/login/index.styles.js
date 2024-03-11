export const styles = {
  parentContainer: (theme) => ({
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  leftContainer: (theme) => ({
    width: "45vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
  rightContainer: (theme) => ({
    width: "55vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  }),
  appName: (theme) => ({
    color: theme.palette.secondary.main,
    fontFamily: "Oleo Script",
    marginBottom: "2rem",
    alignSelf: "center",
  }),
  loginText: {
    marginBottom: "2rem",
  },
  form: (theme) => ({
    width: "50%",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }),
  textField: {
    marginBottom: "0.5rem",
    width: "100%",
  },
  textFieldInput: (theme) => ({
    color: theme.palette.primary.contrastText,
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
  }),
  rememberMeContainer: (theme) => ({
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }),
  checkboxContainer: {
    display: "flex",
  },
  checkBox: {
    padding: "0px",
  },
  loginButton: (theme) => ({
    height: "2.8rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  noAccountContainer: {
    width: "50%",
  },
  noAccountText: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    marginTop: "0.5rem",
  },
  signUpLink: (theme) => ({
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
}
