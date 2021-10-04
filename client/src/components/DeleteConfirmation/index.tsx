import React from "react";
import { DialogActions, Dialog, DialogContent, Button, Typography } from "@mui/material";
import { Task } from "../../types";

interface Props {
  handleDelete: (task: Task) => void;
  task: Task;
  open: boolean;
  handleClose: () => void;
}

const DeleteConfirmation = ({
  handleDelete,
  task,
  open,
  handleClose,
}: Props) => {
  return (
    <Dialog sx={{ p: 4, }} open={open} onClose={handleClose}>
      <DialogContent sx={{ p: 4 }}>
          <Typography variant="h2">Delete?</Typography>
          <Typography variant="subtitle1">Are you sure you want to delete this item? This cannot be undone.
            </Typography>
          </DialogContent>
      <DialogActions sx={{ mt: 4, p: 4 }}>
        <Button onClick={handleClose} color="primary" variant="text" sx={{ color: "text.primary" }} >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleDelete(task);
            handleClose();
          }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmation;