import React, {useEffect, useState} from "react"
import {
  Box,
  Button,
  Checkbox,
  Modal,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material"
import {styles} from "./index.styles"
import {useDispatch, useSelector} from "react-redux"
import {editRecipe, fetchRecipe} from "../../../features/recipeSlice"
import {openSnackbar} from "../../../features/snackbarSlce"

export default function EditRecipeModal({open, setOpen, data}) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    ingredients: data.ingredients,
    steps: data.steps,
    isPublic: data.is_public,
  })
  useEffect(() => {
    setFormData({
      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
      steps: data.steps,
      isPublic: data.is_public,
    })
  }, [data])
  const user = useSelector((state) => state.user.user)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }))
  }

  const handleArrayChange = (index, value, type) => {
    setFormData((prevData) => {
      const newData = {...prevData}
      const updatedArray = [...newData[type]]
      updatedArray[index] = value
      newData[type] = updatedArray
      return newData
    })
  }

  const handleAddField = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], ""],
    }))
  }

  const handleRemoveField = (index, type) => {
    setFormData((prevData) => {
      const newData = {...prevData}
      newData[type].splice(index, 1)
      return newData
    })
  }

  const handleSubmit = () => {
    let requestData = {...formData}
    requestData.recipe = data.id
    requestData.owner = user.id

    dispatch(editRecipe(requestData)).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        dispatch(fetchRecipe({recipe: data.id}))
        dispatch(
          openSnackbar({
            open: true,
            message: "Changes Saved Successfully",
            severity: "success",
          })
        )
      } else if (res.meta.requestStatus == "rejected") {
        dispatch(
          openSnackbar({
            open: true,
            message: "Error Saving Changes",
            severity: "error",
          })
        )
      }
    })
    handleClose()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modal}>
      <Box sx={styles.modalBox}>
        <Typography variant="heading">Add Recipe</Typography>
        <FormControl fullWidth>
          <Typography variant="medium" sx={styles.label}>
            title
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            placeholder="write the title of recipe"
            name="title"
            type="text"
            fullWidth
            value={formData.title}
            onChange={handleChange}
            sx={styles.textField}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
          <Typography variant="medium" sx={styles.label}>
            description
          </Typography>
          <TextField
            margin="dense"
            placeholder="Enter recipe desciption"
            name="description"
            type="text"
            fullWidth
            value={formData.description}
            onChange={handleChange}
            sx={styles.textField}
            InputProps={{
              sx: styles.textFieldInput,
            }}
          />
          <Box sx={styles.multipleInputContainer}>
            <Typography variant="medium" sx={styles.label}>
              Ingredients:
            </Typography>
            {formData.ingredients &&
              formData.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <TextField
                    margin="dense"
                    type="text"
                    placeholder={`Enter the name of ingredient ${index + 1}`}
                    sx={styles.textField}
                    fullWidth
                    value={ingredient}
                    onChange={(e) =>
                      handleArrayChange(index, e.target.value, "ingredients")
                    }
                    InputProps={{
                      sx: styles.textFieldInput,
                    }}
                    InputLabelProps={{
                      sx: styles.textFieldLabel,
                    }}
                  />
                  <Button
                    onClick={() => handleRemoveField(index, "ingredients")}
                    color="secondary"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            <Button
              onClick={() => handleAddField("ingredients")}
              color="secondary"
              variant="contained"
            >
              Add Ingredient
            </Button>
          </Box>
          <Box sx={styles.multipleInputContainer}>
            <Typography variant="medium" sx={styles.label}>
              Steps:
            </Typography>
            {formData.steps &&
              formData.steps.map((step, index) => (
                <div key={index}>
                  <TextField
                    margin="dense"
                    placeholder={`write the description of step ${index + 1}`}
                    type="text"
                    sx={styles.textField}
                    fullWidth
                    value={step}
                    onChange={(e) =>
                      handleArrayChange(index, e.target.value, "steps")
                    }
                    InputProps={{
                      sx: styles.textFieldInput,
                    }}
                    InputLabelProps={{
                      sx: styles.textFieldLabel,
                    }}
                  />
                  <Button
                    onClick={() => handleRemoveField(index, "steps")}
                    color="secondary"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            <Button
              onClick={() => handleAddField("steps")}
              color="secondary"
              variant="contained"
            >
              Add Step
            </Button>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.is_public}
                onChange={handleCheckboxChange}
                color="secondary"
                name="isPublic"
              />
            }
            label=" Make Public"
          />
        </FormControl>
        <Box sx={styles.buttonContainer}>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
