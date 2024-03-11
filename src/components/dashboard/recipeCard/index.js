import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import {CardActionArea, Box} from "@mui/material"
import {styles} from "./index.styles"
import {useNavigate} from "react-router"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import {useDispatch, useSelector} from "react-redux"
import {editUser} from "../../../features/userSlice"
import dummyImage from "../../../assets/dummy-image-square.jpg"
import {BACKEND_HOST, MEDIA} from "../../../constants/urls"

export default function RecipeCard({data}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const handleToggleFavorite = (event, id) => {
    let favourites = [...user.favourites]
    const index = favourites.indexOf(id)
    if (index !== -1) {
      favourites.splice(index, 1)
    } else {
      favourites.push(id)
    }
    dispatch(
      editUser({
        user: user.id,
        username: user.username,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        favourites: favourites,
      })
    )
    event.stopPropagation()
  }
  return (
    <Card
      sx={styles.card}
      onClick={() => {
        navigate(`/recipes/${data.id}/`)
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.image ? `${BACKEND_HOST}${data.image}` : dummyImage}
          alt="green iguana"
        />
        <CardContent sx={styles.content}>
          <Typography variant="heading" sx={styles.heading}>
            {data.title}
          </Typography>
          <Typography variant="medium">{data.description}</Typography>
        </CardContent>
        <Box sx={{position: "absolute", top: 0, right: 0, padding: "8px"}}>
          {user.favourites && user.favourites.includes(data.id) ? (
            <FavoriteIcon
              color="error"
              onClick={(e) => {
                handleToggleFavorite(e, data.id)
              }}
            />
          ) : (
            <FavoriteBorderIcon
              color="disabled"
              onClick={(e) => {
                handleToggleFavorite(e, data.id)
              }}
            />
          )}
        </Box>
      </CardActionArea>
    </Card>
  )
}
