function validateTask(task) {

    const taskSchema = Joi.object({
        description: Joi.string().max(500),
        completed: Joi.boolean(),
        title: Joi.string().max(100).min(2).required(),
        quantity: Joi.number().integer().min(1).max(100).required(),
    })
    return taskSchema.validate(task)
}

module.exports = {
    validateTask
}