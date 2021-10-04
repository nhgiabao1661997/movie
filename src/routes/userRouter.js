const express = require('express')
const {getListUser, getListUserByid, createNewuser, deleteUser, updateUser }= require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/',getListUser)
userRouter.get('/:id',getListUserByid)
userRouter.post('/',createNewuser)
userRouter.delete('/:id',deleteUser)
userRouter.put('/:id',updateUser)

module.exports = userRouter