import {Request, Response} from 'npm:express'
import Task from '../models/taskModel.ts'

export const getTasks = async (req: Request, res: Response) => {
        const tasks = await Task.find()
        return res.json(tasks)
}

export const getTask = async (req: Request, res: Response) => {
        const task = await Task.findById(req.params.id)
        return res.json(task)
}

export const createTask = async (req: Request, res: Response) => {
        const newTask = await Task.create(req.body)
        return res.json(newTask)
}

export const updateTask = async (req: Request, res: Response) => {
        const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
                new: true
        })
        return res.json(taskUpdated)
}

export const deleteTask = async (req: Request, res: Response) => {
        const task = await Task.findByIdAndDelete(req.params.id)
        return res.json(task)
}
