const express = require('express')
const userRouter = require('./userRouter')
const movieRouter = require('./movieRouter')

const rootRouter = express.Router()

rootRouter.use('/users',userRouter)
rootRouter.use('/movies',movieRouter)

module.exports = rootRouter