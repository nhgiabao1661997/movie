const express = require('express')
const {getListUser }= require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/',getListUser)

module.exports = userRouter