import React from "react";
import {
  Drawer,
  Box,
  TextField,
  Button,
  Checkbox,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  IconButton
} from "@mui/material";
import { LastPage } from "@mui/icons-material";

interface TaskEditorProps {
  editorOpen: boolean;
  setEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  setActiveTask: React.Dispatch<any>;
  handleEditTask: (e: React.FormEvent<HTMLFormElement>) => void;
  activeTask: any;
}

function isExistingTask(task: any) {
  return task?._id ? true : false;
}

const TaskEditor = ({
  editorOpen,
  setEditorOpen,
  handleAddTask,
  setActiveTask,
  handleEditTask,
  activeTask,
}: TaskEditorProps) => {

    const handleCancel = () => {
        setEditorOpen(false);
        setActiveTask(null);
    }

  return (
    <Drawer
      anchor="right"
      open={editorOpen}
      onClose={() => setEditorOpen(false)}
    >
      <Box p={2} bgcolor="background.paper" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h1">Shopping list</Typography>
        <IconButton size="small" onClick={handleCancel}>
            <LastPage />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& *": { marginBottom: 1 },
          padding: 2,
          minWidth: "400px",
          maxWidth: "50vw",
          flexBasis: "100%"
        }}
        component="form"
        onSubmit={isExistingTask(activeTask) ? handleEditTask : handleAddTask}
      >
        <Box mb={2}>
          {isExistingTask(activeTask) ? (
            <>
              <Typography variant="h3">Edit an item</Typography>
              <Typography variant="h4">Edit your item below</Typography>
            </>
          ) : (
            <>
              <Typography variant="h3">Add a new task</Typography>
              <Typography variant="h4">Add a new task below</Typography>
            </>
          )}
        </Box>
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth
          label="Title"
          name="title"
          value={activeTask?.title || ""}
          onChange={(e) =>
            setActiveTask({ ...activeTask, title: e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth
          label="Description"
          name="description"
          value={activeTask?.description || ""}
          multiline
          minRows={4}
          onChange={(e) =>
            setActiveTask({ ...activeTask, description: e.target.value })
          }
        />
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel id="quantity-label">How many?</InputLabel>
          <Select
            labelId="quantity-label"
            fullWidth
            label="quantity"
            placeholder="How many?"
            name="quantity"
            value={activeTask?.quantity || ""}
            onChange={(e) =>
              setActiveTask({ ...activeTask, quantity: e.target.value })
            }
          >
            {[1, 2, 3].map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          sx={{ color: "grey.400" }}
          label="Purchased"
          control={
            <Checkbox
              checked={activeTask?.completed}
              size="small"
              sx={{ color: "grey.400" }}
              onChange={(e) =>
                setActiveTask({ ...activeTask, completed: e.target.checked })
              }
            />
          }
        />
    <Box sx={{ flexBasis: "100%", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
        <Button variant="text" color="secondary" onClick={handleCancel}>
            Cancel
        </Button>
        <Button variant="contained" type="submit">
          {isExistingTask(activeTask) ? "Save item" : "Add task"}
        </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default TaskEditor;
