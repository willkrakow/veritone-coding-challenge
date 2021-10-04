import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { Task } from "../../types";
import DeleteConfirmation from "../DeleteConfirmation";

interface Props {
  task: Task;
  handleEditTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
  handleCompleteTask: (task: Task) => void;
}

const TaskListItem = ({
  task,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
}: Props): JSX.Element => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <ListItem
      sx={{
        borderWidth: "0.5px",
        borderColor: "grey.100",
        borderStyle: "solid",
        borderRadius: "5px",
        pt: 3,
        pb: 2.5,
        px: 0,
        mb: 2.5,
        backgroundColor: task.completed ? "info.100" : "inherit",
      }}
      disablePadding
      secondaryAction={
        <>
          <IconButton size="small" onClick={() => handleEditTask(task)}>
            <EditOutlined />
          </IconButton>
          <IconButton size="small" onClick={() => setModalOpen(true)}>
            <DeleteOutline />
          </IconButton>
        </>
      }
    >
      <DeleteConfirmation
        task={task}
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleDelete={handleDeleteTask}
      />
      <ListItemButton
        dense
        role={undefined}
        onClick={() => handleCompleteTask(task)}
        sx={{ py: 0 }}
      >
        <ListItemIcon>
          <Checkbox
            color="secondary"
            checked={task.completed}
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={task.title}
          primaryTypographyProps={{
            variant: "h3",
            sx: {
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "secondary.main" : "inherit",
            },
          }}
          secondary={task.description}
          secondaryTypographyProps={{
            variant: "h4",
            sx: {
              textDecoration: task.completed ? "line-through" : "none",
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TaskListItem;
