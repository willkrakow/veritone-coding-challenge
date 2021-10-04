import React from 'react'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Checkbox, IconButton} from '@mui/material'
import { EditOutlined, DeleteOutline } from '@mui/icons-material'
import { Task } from '../../types'
import TaskListItem from './TaskListItem'

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
      {tasks.map((task: Task) => (
        <TaskListItem key={task?._id || Math.random()} task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />
      ))}
    </List>
  );
}

export default TaskList;

