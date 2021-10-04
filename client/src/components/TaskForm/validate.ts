import Joi from 'joi'

const taskSchema = Joi.object().keys({
    title: Joi
        .string()
        .required(),
    description: Joi
        .string()
        .max(100)
        .required(),
    completed: Joi
        .boolean(),
    quantity: Joi
        .number()
        .min(1)
        .max(3)
        .required(),
})

export const validateTask = (task: any) => {
    return taskSchema.validate(task)
}