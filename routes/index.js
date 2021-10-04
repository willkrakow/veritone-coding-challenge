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
// router.post("/tasks", async (req, res) => {
//   console.log(req.body);
//   const tasks = req.body;
//   tasks.forEach(async (task) => {
//     try {
//       // const { error } = validateTask(task);
//       // if (error) return res.status(400).send(error.details[0].message);
//       const newTask = new Task({
//         title: task.title,
//         description: task.description,
//         completed: task.completed,
//       });

//       if (task._id) {
//         await Task.findByIdAndUpdate(task._id, newTask);
//       } else {
//         await newTask.save();
//       }      
//     }
//     catch (ex) {
//       console.log(ex.message);
//     }
//   })

// });

router.post("/tasks", async(req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.send(task);
})

// Update a task in the database
router.patch("/tasks/:id", async (req, res) => {

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
