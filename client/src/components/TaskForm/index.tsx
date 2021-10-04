/// <reference path=""

import React, { ReactNode } from 'react'
import { TextField, Select, MenuItem, InputLabel, Button, SelectChangeEvent, FormControl, FormHelperText } from '@mui/material'
import { Task } from '../../types'
import {validateTask} from './validate'
import { ValidationError } from 'joi'
import { capitalizeFirstLetter, removeQuotes } from '../../utils'

interface Props {
  task?: Task;
  onSubmit: (task: Task) => void;
}

const TaskForm = ({
    task,
    onSubmit
}: Props) => {  
  const [ title, setTitle ] = React.useState(task ? task.title : '')
  const [ description, setDescription ] = React.useState(task ? task.description : '')
  const [completed, setCompleted ] = React.useState(task ? task.completed : false)
  const [quantity, setQuantity] = React.useState(task ? task.quantity : '')
  const [ errorMessages, setErrorMessages ] = React.useState<any>({})

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleCompletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked)
  }

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(parseInt((event.target.value as string)))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask = validateTask({
      title: title,
      description: description || '',
      completed: completed || false,
      quantity: quantity || undefined
    })
    if (newTask.error) {
      setErrorMessages(newTask.error.details)
      return
    }
    onSubmit(newTask.value)
  }
  console.log(errorMessages)
return (
<form onSubmit={handleSubmit} >
  <TextField
    name="title"
    value={title}
    onChange={handleTitleChange}
    label="Item name"
    variant="outlined"
    fullWidth
    sx={{ marginBottom: "18px" }}
  />
  <FormHelperText error={!!errorMessages.title}>{errorMessages.title}</FormHelperText>
  <TextField
    name="description"
    value={description}
    onChange={handleDescriptionChange}
    label="Description"
    variant="outlined"
    fullWidth
    multiline
    minRows={4}
  />
  <FormHelperText error={!!errorMessages.description}>{errorMessages.description}</FormHelperText>
  <FormControl fullWidth>
  <InputLabel id="quantity-label">How many?</InputLabel>
  <Select labelId="quantity-label" name="quantity" value={typeof quantity === 'number' ? quantity : parseInt(quantity)} label="How many?" onChange={handleQuantityChange}>
    {[1, 2, 3].map((q) => (
      <MenuItem value={q} key={q}>
        {q}
      </MenuItem>
    ))}
  </Select>
  <FormHelperText error={!!errorMessages.quantity}>{errorMessages.quantity}</FormHelperText>
  </FormControl>
  <Button type="submit" variant="contained" color="primary" fullWidth>
      Add task
    </Button>
</form>

)}


export default TaskForm