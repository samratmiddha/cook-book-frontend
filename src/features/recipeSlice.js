import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {RECIPES, SEARCH_RECIPE} from "../constants/urls"
import BackendClient from "../backendClient"

export const fetchRecipes = createAsyncThunk("recipe/fetchRecipes", () => {
  return BackendClient.get(RECIPES).then((response) => {
    return response.data
  })
})
export const searchRecipes = createAsyncThunk(
  "recipe/searchRecipes",
  ({value}) => {
    return BackendClient.get(SEARCH_RECIPE, {
      params: {
        value: value,
      },
    }).then((response) => {
      return response.data
    })
  }
)

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  ({recipe}) => {
    return BackendClient.get(`${RECIPES}${recipe}`).then((response) => {
      return response.data
    })
  }
)

export const createRecipe = createAsyncThunk(
  "recipe/createRecipe",
  ({title, description, ingredients, steps, owner, isPublic, image}) => {
    return BackendClient.post(RECIPES, {
      title: title,
      description: description,
      owner: owner,
      steps: steps,
      ingredients: ingredients,
      is_public: isPublic,
      image: image,
    }).then((response) => {
      return response.data
    })
  }
)
export const editRecipe = createAsyncThunk(
  "recipe/createRecipe",
  ({recipe, title, description, ingredients, steps, isPublic}) => {
    return BackendClient.patch(
      `${RECIPES}${recipe}/`,
      {
        title: title,
        description: description,
        steps: steps,
        ingredients: ingredients,
        is_public: isPublic,
      },
      {
        headers: {"Content-Type": "application/json"},
      }
    ).then((response) => {
      return response.data
    })
  }
)
export const deleteRecipe = createAsyncThunk(
  "recipe/deleteRecipe",
  ({recipe}) => {
    return BackendClient.delete(`${RECIPES}${recipe}/`)
  }
)

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    recipe: {},
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload
    },
    setRecipe: (state, action) => {
      state.recipe = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.recipes = action.payload
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(searchRecipes.pending, (state) => {
        state.loading = true
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.searchResults = action.payload
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.recipe = action.payload
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
      .addCase(createRecipe.pending, (state) => {
        state.loading = true
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.error = ""
        state.recipes.push(action.payload)
        state.season = action.payload
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.response
      })
  },
})

export const {setRecipes, setRecipe} = recipeSlice.actions
export default recipeSlice.reducer
