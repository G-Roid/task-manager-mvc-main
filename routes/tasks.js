const express = require('express')
const app = express()
const router = express.Router()
const taskController = require('../controllers/tasks.js')


router.get('/', taskController.getTasks)
router.post('/addTask', taskController.addTask)
router.delete('/deleteTask', taskController.deleteTask)

module.exports = router