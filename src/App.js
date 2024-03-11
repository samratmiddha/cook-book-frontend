import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useSelector} from "react-redux"
import {ThemeProvider} from "@emotion/react"
import {createTheme} from "@mui/material"
import {defaultTheme} from "./theme"
import {palettes} from "./palette"
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import SignUp from "./components/signUp"
import Recipe from "./components/recipe"
import "@fontsource/oleo-script/400.css"
import "@fontsource/oleo-script/700.css"
import {CustomSnackbar} from "./components/customSnackbar"

function App() {
  const themeName = useSelector((state) => state.theme.theme)
  const theme = createTheme({
    ...defaultTheme,
    palette: palettes[themeName],
  })
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="recipes/:recipe/" element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
      <CustomSnackbar />
    </ThemeProvider>
  )
}

export default App
