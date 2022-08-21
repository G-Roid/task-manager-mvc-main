const { response } = require('express')
const Tasks = require('../models/Tasks')

module.exports = {
    getTasks: async (request, response) => {
        try {
            const projectTasks = await Tasks.find()
            console.log(projectTasks)
            response.render('tasks.ejs', {tasks: projectTasks})
            
        } catch (error) {
            console.log(error)
        }
    },

    addTask: async (req, res)=>{
        try{
            await Tasks.create({thing: req.body.newTask, completed: false})
            console.log('New task has been added!')
            res.redirect('/tasks')
        }catch(err){
            console.log(err)
        }
    },

    deleteTask: async (req, res) => {
        console.log(req.body.taskFromJSFile)
        try {
            await Tasks.deleteOne({thing: req.body.taskFromJSFile})
            res.json('thing were deleted')
        } catch (error) {
            console.log(error)
        }
    }
}