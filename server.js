const express = require('express')
const app = express()
const PORT = 8000
const connectDB = require('./config/dataBase')
const homeRoutes = require('./routes/home')
const taskRouters = require('./routes/tasks')

require('dotenv').config({path: './config/.env'})

connectDB()

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/tasks', taskRouters)



app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})