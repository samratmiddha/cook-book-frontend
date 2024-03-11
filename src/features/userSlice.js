import {createSlice} from "@reduxjs/toolkit"
import {LOGIN, LOGOUT, SIGN_UP, USERS, WHOAMI} from "../constants/urls"
import {createAsyncThunk} from "@reduxjs/toolkit"
import BackendClient from "../backendClient"

export const login = createAsyncThunk(
  "user/login",
  ({username, password, rememberMe}) => {
    return BackendClient.post(LOGIN, {
      username: username,
      password: password,
      remember_me: rememberMe,
    }).then((response) => {
      return response.data
    })
  }
)
export const signUp = createAsyncThunk(
  "user/signUp",
  ({username, password, email, firstName, lastName}) => {
    return BackendClient.post(SIGN_UP, {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
    }).then((response) => {
      return response.data
    })
  }
)
export const logout = createAsyncThunk("user/logout", () => {
  return BackendClient.get(LOGOUT).then((response) => {
    return response.data
  })
})
export const fetchUser = createAsyncThunk("user/logout", () => {
  return BackendClient.get(WHOAMI).then((response) => {
    return response.data
  })
})
export const editUser = createAsyncThunk(
  "user/editUser",
  ({user, username, email, firstName, lastName, favourites}) => {
    return BackendClient.patch(`${USERS}${user}/`, {
      username: username,
      email: email,
      first_name: firstName,
      last_name: lastName,
      favourites: favourites,
    }).then((res) => {
      return res.data
    })
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
  },
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
