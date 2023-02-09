const express = require('express')
const app = express()
const logger = require('morgan')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(logger('tiny'));

// routes
app.get('/', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()
