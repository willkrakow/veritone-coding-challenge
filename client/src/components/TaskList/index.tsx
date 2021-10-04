import React from 'react'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Checkbox, IconButton} from '@mui/material'
import { EditOutlined, DeleteOutline } from '@mui/icons-material'
import { Task } from '../../types'

interface TaskListProps {
  tasks: Task[];
  handleDeleteTask: (task: Task) => void;
  handleCompleteTask: (task: Task) => void;
  setActiveTask: (task: Task) => void;
  setEditorOpen: (isOpen: boolean) => void;
}

const TaskList = ({
  tasks,
  handleDeleteTask,
  handleCompleteTask,
  setActiveTask,
  setEditorOpen
}: TaskListProps) => {

    const handleEditTask = (task: Task) => {
        setActiveTask(task)
        setEditorOpen(true)
    }

  return (
    <List>
      {tasks.map((task) => (
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
              backgroundColor: task.completed ? "info.100" : "inherit"
           }}
          disablePadding
          key={task._id || Math.random()}
          secondaryAction={
            <>
              <IconButton size="small" onClick={() => handleEditTask(task)}>
                <EditOutlined />
              </IconButton>
              <IconButton size="small" onClick={() => handleDeleteTask(task)}>
                <DeleteOutline />
              </IconButton>
            </>
          }
        >
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
                  color: task.completed ? "secondary.main" : "inherit"
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
      ))}
    </List>
  );
}

export default TaskList;