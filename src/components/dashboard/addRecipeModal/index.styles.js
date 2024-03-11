export const styles = {
  modalBox: (theme) => ({
    width: "70%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    overflowY: "scroll",
  }),
  textField: {
    width: "100%",
  },
  textFieldInput: (theme) => ({
    color: theme.palette.primary.contrastText,
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
  }),
  textFieldLabel: (theme) => ({
    color: theme.palette.primary.contrastText,
  }),
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    alignSelf: "flex-end",
  },
  label: {
    marginTop: "1rem",
  },
  multipleInputContainer: {
    marginTop: "1rem",
  },
}
