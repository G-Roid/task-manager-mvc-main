const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
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
app.use(cors())

app.use('/', homeRoutes)
app.use('/tasks', taskRouters)




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})