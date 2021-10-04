import React from "react";
import {
  Card,
  CardContent,
  Select,
  CardHeader,
  Drawer,
  Typography,
} from "@mui/material";
import {Task} from '../../types'
import TaskForm from "../TaskForm";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  task?: Task;
}



const EditTask = ({ open, setOpen, task }: Props) => {
  const handleSubmit = (task: Task) => {
    setOpen(false);
  }
  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Card
        sx={{
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          bgcolor: "background.default",
        }}
      >
        <CardHeader
          title="Shopping list"
          titleTypographyProps={{ variant: "h1" }}
          sx={{ borderRadius: "0", bgcolor: "background.paper" }}
        />
        <CardContent sx={{ flex: "1" }}>
          <Typography variant="h2">{task ? "Edit item" : "Add an item"}</Typography>
          <Typography variant="subtitle1">{task ? "Edit your item below" : "Add your item below"}</Typography>
         <TaskForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </Drawer>
  );
};



export default EditTask;
