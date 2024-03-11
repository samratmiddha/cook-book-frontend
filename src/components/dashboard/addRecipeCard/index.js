import React from "react"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import AddIcon from "@mui/icons-material/Add"
import {CardActionArea} from "@mui/material"
import {styles} from "./index.styles"

export default function AddRecipeCard({openModal}) {
  return (
    <Card sx={styles.card}>
      <CardActionArea sx={styles.cardActionArea} onClick={openModal}>
        <Typography variant="heading" sx={styles.heading} component="div">
          Add Recipe
        </Typography>
        <Typography variant="medium" component="div">
          Click the button below to add a new recipe.
        </Typography>
        <AddIcon sx={styles.addIcon} />
      </CardActionArea>
    </Card>
  )
}
