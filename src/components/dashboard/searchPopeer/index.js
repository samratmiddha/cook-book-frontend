// SearchPopper.js

import React from "react"
import {useSelector} from "react-redux"
import {
  Popper,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  ClickAwayListener,
  ListItemButton,
} from "@mui/material"
import {styles} from "./index.styles"
import {BACKEND_HOST} from "../../../constants/urls"
import {useNavigate} from "react-router"

const SearchPopper = ({open, anchorEl, setOpen}) => {
  const searchResults = useSelector((state) => state.recipe.searchResults)
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      placement="bottom-end"
      sx={styles.popper}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Paper sx={styles.popperPaper}>
          <List>
            {searchResults.map((result) => (
              <ListItemButton
                key={result.id}
                onClick={() => {
                  navigate(`/recipes/${result.id}/`)
                }}
              >
                <img
                  src={`${BACKEND_HOST}${result.image}`}
                  alt={result.title}
                  style={styles.image}
                />
                <ListItemText
                  primary={result.title}
                  secondary={
                    Array.isArray(result.ingredients) &&
                    result.ingredients.map((ingredient, index) => (
                      <Chip key={index} label={ingredient} sx={styles.chip} />
                    ))
                  }
                  primaryTypographyProps={{sx: styles.title}}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </ClickAwayListener>
    </Popper>
  )
}

export default SearchPopper
