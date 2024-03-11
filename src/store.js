import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./features/themeSlice"
import userReducer from "./features/userSlice"
import recipeReducer from "./features/recipeSlice"
import snackbarReducer from "./features/snackbarSlce"

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    recipe: recipeReducer,
    snackbar: snackbarReducer,
  },
})
