import {createTheme} from "@mui/material"

export const defaultTheme = createTheme({
  pallete: {},
  typography: {
    fontFamily: "Public Sans",
    medium: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    mediumBold: {
      fontSize: "1rem",
      fontWeight: 700,
      fontFamily: "",
    },
    heading: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    headingLarge: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
  },
})
