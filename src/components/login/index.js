import {Box, Typography, TextField, Button} from "@mui/material"
import {useEffect, useState} from "react"
import BackendClient from "../../backendClient"
import illustration from "../../assets/illustration.svg"
import {useTheme} from "@mui/material"
import {Checkbox} from "@mui/material"
import {styles} from "./index.styles"
import {useDispatch, useSelector} from "react-redux"
import {fetchUser, login} from "../../features/userSlice"
import {useNavigate} from "react-router"
import {openSnackbar} from "../../features/snackbarSlce"

export default function Login() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const onSubmit = () => {
    if (username != "" && password != "") {
      dispatch(login({username, password, rememberMe})).then((res) => {
        if (res.meta.requestStatus == "fulfilled") {
          navigate("/")
        } else if (res.meta.requestStatus == "rejected") {
          dispatch(
            openSnackbar({
              open: true,
              message: "Invalid credentials provided",
              severity: "error",
            })
          )
        }
      })
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: "Please enter  both username and password",
          severity: "warning",
        })
      )
    }
  }
  useEffect(() => {
    dispatch(fetchUser()).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        navigate("/")
      }
    })
  }, [])

  return (
    <Box sx={styles.parentContainer}>
      <Box sx={styles.leftContainer}>
        <img
          src={illustration}
          style={{width: "69%", alignSelf: "center", marginBottom: "2rem"}}
        ></img>
      </Box>

      <Box sx={styles.rightContainer}>
        <Typography variant="headingLarge" sx={styles.appName}>
          CookBook
        </Typography>
        <Typography variant="h3" sx={styles.loginText}>
          <span style={{color: theme.palette.secondary.main}}>L</span>ogin
        </Typography>
        <Box sx={styles.form}>
          <Typography>Username</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={styles.textField}
            required
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
        </Box>
        <Box sx={styles.form}>
          <Typography>Password</Typography>
          <TextField
            id="outlined-password-input"
            type="password"
            required
            autoComplete="current-password"
            sx={styles.textField}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
        </Box>
        <Box sx={styles.rememberMeContainer}>
          <Box sx={styles.checkboxContainer}>
            <Checkbox
              checked={rememberMe}
              onChange={(e) => {
                setRememberMe(e.target.checked)
              }}
              color="secondary"
              sx={styles.checkBox}
            ></Checkbox>
            <Typography>Remember Me</Typography>
          </Box>
          <Typography color="secondary">Forgot password?</Typography>
        </Box>
        <Button variant="contained" sx={styles.loginButton} onClick={onSubmit}>
          Log In
        </Button>
        <Box sx={styles.noAccountContainer}>
          <Typography sx={styles.noAccountText}>
            Don't have an account?{" "}
            <Typography
              sx={styles.signUpLink}
              variant="body1"
              component="span"
              onClick={() => {
                navigate("/signUp")
              }}
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
