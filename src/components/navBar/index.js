import {Typography, Box, Button, IconButton} from "@mui/material"
import {styles} from "./index.styles"
import PersonIcon from "@mui/icons-material/Person"
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import ProfilePopover from "./profilePopover"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import {changeTheme} from "../../features/themeSlice"

export default function NavBar({homeRef, recipesRef, aboutMeRef}) {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const theme = useSelector((state) => state.theme.theme)
  const [profilePopoverAnchorEl, setProfilePopoverAnchorEl] = useState(null)
  const scrollToComponent = (targetRef) => {
    if (location.pathname != "/") {
      navigate("/")
    } else {
      targetRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }
  const toggleTheme = () => {
    if (theme == "light") {
      dispatch(changeTheme("dark"))
    } else {
      dispatch(changeTheme("light"))
    }
  }

  return (
    <>
      <Box sx={styles.parentContainer}>
        <Typography
          variant="heading"
          sx={styles.heading}
          onClick={() => {
            navigate("/")
          }}
        >
          CookBook
        </Typography>
        <Box sx={styles.linkContainer}>
          <Typography
            variant="mediumBold"
            onClick={() => {
              scrollToComponent(homeRef)
            }}
            sx={styles.link}
          >
            Home
          </Typography>
          <Typography
            variant="mediumBold"
            onClick={() => {
              scrollToComponent(recipesRef)
            }}
            sx={styles.link}
          >
            Recipes
          </Typography>
          <Typography
            variant="mediumBold"
            onClick={() => {
              scrollToComponent(aboutMeRef)
            }}
            sx={styles.link}
          >
            About Me
          </Typography>
        </Box>
        <Box sx={styles.buttonContainer}>
          {theme == "light" ? (
            <DarkModeIcon sx={styles.themeIcon} onClick={toggleTheme} />
          ) : (
            <LightModeIcon sx={styles.themeIcon} onClick={toggleTheme} />
          )}
          {user.username ? (
            <PersonIcon
              sx={styles.personIcon}
              onClick={(e) => {
                setProfilePopoverAnchorEl(e.target)
              }}
            />
          ) : (
            <Box sx={styles.loginButtonContainer}>
              <Button
                variant="outlined"
                color="secondary"
                sx={styles.signInButton}
                onClick={() => {
                  navigate("/login")
                }}
              >
                Sign In
              </Button>
              <Button
                variant="filled"
                color="secondary"
                sx={styles.signUpButton}
                onClick={() => {
                  navigate("/signUp")
                }}
              >
                {" "}
                Sign Up
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <ProfilePopover
        anchorEl={profilePopoverAnchorEl}
        setAnchorEl={setProfilePopoverAnchorEl}
      />
    </>
  )
}
