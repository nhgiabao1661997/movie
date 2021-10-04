
const express = require('express');
const { getListMovie, getListMovierByid, createNewMovie, movieDelete, updateMovie } = require('../controllers/movieController');

const userRouter = express.Router()


movieRouter.get("/",getListMovie);

// get by id
movieRouter.get("/:id",getListMovierByid);

// Creat New User 
movieRouter.post("/", createNewMovie);

//Delete
movieRouter.delete("/:id", movieDelete);

movieRouter.put("/:id",updateMovie)

module.exports ={
    movieRouter
}