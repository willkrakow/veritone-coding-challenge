const express = require('express')
const Task = require('../models/task')
const router = express.Router()


router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/tasks', async (req, res) => {
    const task = new Task({
        description: req.body.description,
        completed: req.body.completed,
        title: req.body.title,
        quantity: req.body.quantity,
    })
    await task.save()
    res.json({
        status: 'Task saved'
    })
})

router.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {
            completed: req.body.completed,
            title: req.body.title,
            quantity: req.body.quantity,
            description: req.body.description
        })
        res.json({
            status: 'Task updated'
        })
    } catch (error) {
        res.json({
            status: 'Task not updated'
        })
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task)
    }
    catch (e) {
        res.json({
            status: 'Task not found'
        })
    }
})


module.exports = router