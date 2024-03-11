import {createSlice} from "@reduxjs/toolkit"

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    message: "",
    severity: "success",
    duration: 20000,
    open: false,
  },
  reducers: {
    closeSnackbar: (state) => {
      state.open = false
    },
    openSnackbar: (state, action) => {
      state.message = action.payload.message || "Some Error Occured"
      state.open = true
      state.severity = action.payload.severity || "success"
      state.duration = action.payload.duration || 2500
    },
  },
})

export const {openSnackbar, closeSnackbar} = snackbarSlice.actions
export default snackbarSlice.reducer
