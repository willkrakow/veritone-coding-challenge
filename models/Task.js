const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: String,
    title: String,
    quantity: Number,
    completed: Boolean,
})

module.exports = mongoose.model('Task', taskSchema);