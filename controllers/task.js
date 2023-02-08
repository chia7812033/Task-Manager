const Task = require('../models/Task')

const getAllTasks = (req, res) => {
  res.send("All tasks")
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).send({ task })
}

const getTask = (req, res) => {
  const { id } = req.params
  res.json({ id: id })
}

const updateTask = (req, res) => {
  const { id } = req.params
  res.send(`Update No.${id} task`)
}

const deleteTask = (req, res) => {
  const { id } = req.params
  res.send(`delete No.${id} task`)
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
