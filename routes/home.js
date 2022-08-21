const express = require('express')
const app = express()
const router = express.Router()
const homeController = require('../controllers/home.js')


router.get('/', homeController.getIndex)

module.exports = router