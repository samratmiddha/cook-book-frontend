import {createSlice} from "@reduxjs/toolkit"
import Cookies from "js-cookie"

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: Cookies.get("theme") || "light",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
      Cookies.set("theme", action.payload)
    },
  },
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
