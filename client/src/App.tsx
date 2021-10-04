import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import theme from "./theme";
import EmptyList from "./components/EmptyList";
import { Task } from "./types";
import TaskEditor from "./components/TaskEditor";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editorOpen, setEditorOpen] = React.useState(false);

  const [activeTask, setActiveTask] = React.useState<Task | null | any>(null);

  // Fetch tasks on initial render
  React.useEffect(() => {
    fetch("/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Create a new task
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send request to server
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...activeTask }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setActiveTask(null);
        setEditorOpen(false);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  };

  // Remove a task
  const handleDeleteTask = (task: Task) => {
    fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(tasks.filter((t) => t._id !== task._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update a task to completed
  const handleCompleteTask = (task: Task) => {
    fetch(`/api/tasks/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...task, completed: !task.completed }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(
          tasks.map((t) => {
            if (t._id === task._id) {
              return { ...t, completed: !t.completed };
            }
            return t;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update an existing task (all fields other than *completed* are editable)
  const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`/api/tasks/${activeTask._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...activeTask }),
    })
      .then((res) => res.json())
      .then(() => {
        setTasks(
          tasks.map((t) => {
            if (t._id === activeTask._id) {
              return { ...t, ...activeTask };
            }
            return t;
          })
        )
        setActiveTask(null);
        setEditorOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {tasks.length > 0 ? (
        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
            my: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Typography variant="h2">Your Items</Typography>
            <Button
              variant="contained"
              onClick={() => setEditorOpen(true)}
              sx={{ width: "fit-content", alignSelf: "flex-end" }}
            >
              Add item
            </Button>
          </Box>
          <TaskList
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            setActiveTask={setActiveTask}
            setEditorOpen={setEditorOpen}
          />
        </Box>
      ) : (
        <EmptyList setOpen={setEditorOpen} />
      )}

      <TaskEditor
        editorOpen={editorOpen}
        setEditorOpen={setEditorOpen}
        handleAddTask={handleAddTask}
        handleEditTask={handleEditTask}
        setActiveTask={setActiveTask}
        activeTask={activeTask}
      />
    </ThemeProvider>
  );
}

export default App;
