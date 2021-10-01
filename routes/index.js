const express = require("express");
const Task = require("../models/task");
const router = express.Router();
const Joi = require("joi");
const { validateTask } = require("../utils");

// Get all tasks from the database
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create a new task and save it to the database
router.post("/tasks", async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const task = new Task({
    description: req.body.description,
    completed: req.body.completed,
    title: req.body.title,
    quantity: req.body.quantity,
  });
  await task.save();
  res.json({
    status: "Task saved",
  });
});

// Update a task in the database
router.patch("/tasks/:id", async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    await Task.findByIdAndUpdate(req.params.id, {
      completed: req.body.completed,
      title: req.body.title,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    res.json({
      status: "Task updated",
    });
  } catch (error) {
    res.json({
      status: "Task not updated",
    });
  }
});

// Get a task by id
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (e) {
    res.json({
      status: "Task not found",
    });
  }
});


// Delete a task by id
router.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      status: "Task deleted",
    });
  } catch (e) {
    res.json({
      status: "Task not deleted",
    });
  }
});

module.exports = router;
