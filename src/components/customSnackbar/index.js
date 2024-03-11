import {Alert, IconButton, Snackbar} from "@mui/material"
import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {closeSnackbar} from "../../features/snackbarSlce"
import CloseIcon from "@mui/icons-material/Close"

export const CustomSnackbar = () => {
  const data = useSelector((state) => state.snackbar)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeSnackbar())
  }

  return (
    <Snackbar
      open={data.open}
      onClose={handleClose}
      autoHideDuration={data.duration}
      action={
        <IconButton size="small" aria-label="close" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert severity={data.severity}>{data.message}</Alert>
    </Snackbar>
  )
}
