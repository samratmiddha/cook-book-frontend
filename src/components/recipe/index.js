import {useNavigate, useParams} from "react-router"
import NavBar from "../navBar"
import {styles} from "./index.styles"
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {fetchRecipe, deleteRecipe} from "../../features/recipeSlice"
import {fetchUser} from "../../features/userSlice"
import dummyImage from "../../assets/dummy-image-square.jpg"
import EditRecipeModal from "./editRecipeModal"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function Recipe() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {recipe} = useParams()
  const user = useSelector((state) => state.user.user)
  const recipe_data = useSelector((state) => state.recipe.recipe)
  const [editRecipeModalOpen, setEditRecipeModalOpen] = useState(false)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"))
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchRecipe({recipe}))
  }, [])
  const openEditRecipeModalOpen = () => {
    setEditRecipeModalOpen(true)
  }
  const handleDelete = () => {
    dispatch(deleteRecipe({recipe})).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        navigate("/")
      }
    })
  }

  return (
    <Box sx={styles.parentContainer}>
      <NavBar />
      <Typography variant="headingLarge" component="p" sx={styles.title}>
        {recipe_data.title}
      </Typography>
      <Box sx={styles.descriptionContainer}>
        <Box sx={styles.imageContainer}>
          <img
            src={recipe_data.image ? recipe_data.image : dummyImage}
            style={
              isSmallScreen
                ? isExtraSmallScreen
                  ? styles.extraSmallImage
                  : styles.smallImage
                : styles.image
            }
          />
          {recipe_data.owner && recipe_data.owner.id == user.id && (
            <>
              <Button
                variant="outlined"
                sx={styles.editButton}
                color="secondary"
                onClick={openEditRecipeModalOpen}
              >
                Edit recipe
              </Button>
              <Button
                variant="filled"
                sx={styles.deleteButton}
                color="error"
                onClick={handleDelete}
              >
                Delete Recipe
              </Button>
            </>
          )}
        </Box>
        <Box sx={styles.contentContainer}>
          <Typography sx={styles.description} variant="medium">
            {recipe_data.description}
          </Typography>
          <Typography variant="heading" sx={styles.heading}>
            Ingredients
          </Typography>
          <List component="ol" dense={true}>
            {recipe_data.ingredients &&
              recipe_data.ingredients.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${item}`} />
                </ListItem>
              ))}
          </List>
          <Typography variant="heading" sx={styles.heading}>
            Steps
          </Typography>
          <List component="ol" dense={true}>
            {recipe_data.steps &&
              recipe_data.steps.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${item}`} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Box>
      <EditRecipeModal
        open={editRecipeModalOpen}
        setOpen={setEditRecipeModalOpen}
        data={recipe_data}
      />
    </Box>
  )
}
