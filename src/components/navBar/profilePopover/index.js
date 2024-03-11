import {Popover, Box, Typography, Button} from "@mui/material"
import {styles} from "./index.styles"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router"
import {logout} from "../../../features/userSlice"

export default function ProfilePopover({anchorEl, setAnchorEl}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const open = anchorEl ? true : false
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    dispatch(logout()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") navigate("/login")
    })
  }
  const user = useSelector((state) => state.user.user)
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{vertical: "bottom", horizontal: "left"}}
    >
      <Box sx={styles.parentContainer}>
        <Box>
          <Typography sx={styles.dataHeading}>Username : </Typography>
          <Typography sx={styles.data}>{user.username}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.dataHeading}>Email : </Typography>
          <Typography sx={styles.data}>{user.email}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.dataHeading}>First Name : </Typography>
          <Typography sx={styles.data}>{user.first_name}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.dataHeading}>Last Name : </Typography>
          <Typography sx={styles.data}>{user.last_name}</Typography>
        </Box>
        <Button
          variant="filled"
          sx={styles.logoutButton}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Popover>
  )
}
