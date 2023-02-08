const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  console.log("Get all the tasks...")
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  console.log("Try to create a new task...")
}

const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOne({ _id: id })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  console.log('Get a single task...')
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true, runValidators: true })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  console.log("Try to update a task...")
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task: null, success: true })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  console.log("Try to delete a task...")
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
