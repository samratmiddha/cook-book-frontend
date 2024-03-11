import {Box, Typography, TextField, Button} from "@mui/material"
import {useEffect, useState} from "react"
import BackendClient from "../../backendClient"
import illustration from "../../assets/illustration.svg"
import {useTheme} from "@mui/material"
import {Checkbox} from "@mui/material"
import {styles} from "./index.styles"
import {useDispatch} from "react-redux"
import {signUp, fetchUser} from "../../features/userSlice"
import {useNavigate} from "react-router"
import {openSnackbar} from "../../features/snackbarSlce"

export default function SignUp() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const onSubmit = () => {
    if (username != "" && password != "") {
      dispatch(signUp({username, password, email, firstName, lastName})).then(
        (res) => {
          if (res.meta.requestStatus == "fulfilled") {
            navigate("/")
          } else if (res.meta.requestStatus.status == "rejected") {
            dispatch(
              openSnackbar({
                open: true,
                message: "Error creating user",
                severity: "error",
              })
            )
          }
        }
      )
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: "Please enter username and password",
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
        <Typography variant="h3" sx={styles.loginText}>
          <span style={{color: theme.palette.secondary.main}}>S</span>ign Up
        </Typography>
        <Box sx={styles.form}>
          <Typography>Username</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={styles.textField}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
        </Box>
        <Box sx={styles.form}>
          <Typography>Email</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={styles.textField}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
        </Box>
        <Box sx={styles.form}>
          <Typography>First Name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={styles.textField}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
        </Box>
        <Box sx={styles.form}>
          <Typography>Last Name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={styles.textField}
            onChange={(e) => {
              setLastName(e.target.value)
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

        <Button variant="contained" sx={styles.loginButton} onClick={onSubmit}>
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}
