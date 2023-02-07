const getAllTasks = (req, res) => {
  res.send("All tasks")
}

const createTask = (req, res) => {
  res.send('create items')
}

const getTask = (req, res) => {
  const { id } = req.params
  res.send(`${id} Task`)
}

const updateTask = (req, res) => {
  const { id } = req.params
  res.send(`Update ${id} task`)
}

const deleteTask = (req, res) => {
  const { id } = req.params
  res.send(`delete ${id} items`)
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
