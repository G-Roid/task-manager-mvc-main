const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    thing: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('tasks', projectSchema )