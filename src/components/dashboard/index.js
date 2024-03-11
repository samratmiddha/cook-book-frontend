import {Avatar, Box, TextField, Typography, InputAdornment} from "@mui/material"
import {
  ABOUT_ME,
  WELCOME_HEADING,
  WELCOME_SUB_HEADING,
} from "../../constants/text"
import {styles} from "./index.styles"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useRef, useState} from "react"
import {fetchRecipes, searchRecipes} from "../../features/recipeSlice"
import RecipeCard from "./recipeCard"
import myImage from "../../assets/my_image.jpeg"
import NavBar from "../navBar"
import {useTheme} from "@emotion/react"
import SearchIcon from "@mui/icons-material/Search"
import {fetchUser} from "../../features/userSlice"
import AddRecipeCard from "./addRecipeCard"
import AddRecipeModal from "./addRecipeModal"
import SearchPopper from "./searchPopeer"

export default function Dashboard() {
  const dispatch = useDispatch()

  const recipes = useSelector((state) => state.recipe.recipes)
  const user = useSelector((state) => state.user.user)
  const userRecipes = recipes.filter(
    (recipe) => recipe.owner && recipe.owner.id == user.id
  )
  const userFavourites = recipes.filter(
    (recipe) => user.favourites && user.favourites.includes(recipe.id)
  )
  const [addRecipeModalOpen, setAddRecipeModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [searchPopperOpen, setSearchPopperOpen] = useState(false)
  const [searchPopperAnchorEl, setSearchPopperAnchorEl] = useState(null)
  const openAddRecipeModal = () => {
    setAddRecipeModalOpen(true)
  }
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setSearchPopperOpen(false)
      setSearchPopperAnchorEl(null)
      setSearchValue("")
    } else {
      setSearchValue(e.target.value)
      setSearchPopperAnchorEl(e.target)
      setSearchPopperOpen(true)
      dispatch(searchRecipes({value: e.target.value}))
    }
  }

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch, user])
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  const recipesRef = useRef(null)
  const aboutMeRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <Box sx={styles.parentContainer}>
      <NavBar
        recipesRef={recipesRef}
        aboutMeRef={aboutMeRef}
        homeRef={homeRef}
      />
      <Box sx={styles.heroContainer} ref={homeRef}>
        <Box sx={styles.heroBackground}></Box>
        <Box sx={styles.heroOverlay}></Box>
        <Box sx={styles.heroContent}>
          <Typography variant="mediumBold" sx={styles.subHeading}>
            {WELCOME_SUB_HEADING}
          </Typography>
          <Typography variant="headingLarge" sx={styles.welcomeHeading}>
            {WELCOME_HEADING}
          </Typography>
          <TextField
            sx={styles.searchBar}
            label=""
            placeholder="Search by recipe name or ingredients"
            value={searchValue}
            onChange={handleSearch}
            InputLabelProps={{
              sx: styles.searchBarInputProps,
            }}
            inputProps={{
              sx: styles.searchBarInputProps,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={styles.searchIcon} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
      </Box>
      <SearchPopper
        open={searchPopperOpen}
        anchorEl={searchPopperAnchorEl}
        setOpen={setSearchPopperOpen}
      />
      {user.username && (
        <>
          <Typography
            variant="headingLarge"
            sx={styles.heading}
            ref={recipesRef}
          >
            Your Recipes
          </Typography>
          <Box sx={styles.recipeCardsContainer}>
            {recipes &&
              userRecipes.map((recipe, id) => <RecipeCard data={recipe} />)}
            <AddRecipeCard openModal={openAddRecipeModal} />
          </Box>
          <AddRecipeModal
            open={addRecipeModalOpen}
            setOpen={setAddRecipeModalOpen}
          />
          <Typography
            variant="headingLarge"
            sx={styles.heading}
            ref={recipesRef}
          >
            Your favourites
          </Typography>
          <Box sx={styles.recipeCardsContainer}>
            {recipes &&
              userFavourites.map((recipe, id) => <RecipeCard data={recipe} />)}
          </Box>
        </>
      )}
      <Typography variant="headingLarge" sx={styles.heading} ref={recipesRef}>
        Popular Recipes
      </Typography>
      <Box sx={styles.recipeCardsContainer}>
        {recipes && recipes.map((recipe, id) => <RecipeCard data={recipe} />)}
      </Box>
      <Box sx={styles.aboutMeContainer} ref={aboutMeRef}>
        <Avatar alt="profile image" src={myImage} sx={styles.avatar}></Avatar>
        <Box sx={styles.aboutMeContent}>
          <Typography variant="heading" sx={styles.aboutMeHeading}>
            About Me
          </Typography>
          <Typography variant="medium">{ABOUT_ME}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
