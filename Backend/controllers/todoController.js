const mongoose = require("mongoose")
const Todo = require('../models/todoModels')


const getTodos = async (req, res) => {

    const allTodos = await Todo.find()
    res.json(allTodos)

}
const createTodos = async (req, res) => {
    // console.log(req.body)
    const { title, description, isComplete } = req.body
    if (!title || !description) {
        // res.send("Please fill all Details...")

        res.status(400)
        throw new Error("please fill all details...")
    }

    const newTodo = await Todo.create({
        title,
        description,


    })
    if (newTodo) {
        res.status(200).json(newTodo)

    }
    else {
        res.status(401)
        throw new Error("Something wents wrong...")
    }

}
const updateTodos = async (req, res) => {

    const newUpdatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updateTodos) {
        res.status(400)
        throw new Error("Cannot Update todo")

    }
    res.status(200).json(newUpdatedTodo)
    // res.send("Todo updated..")
}
const deleteTodos = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json(
        { msg: "todo deleted" })
    // res.send("Todo deleted..")


}

const getSingleTodo = async (req,res)=>{
    const singleTodo = await Todo.findById(req.params.id)
    if(!singleTodo){
        res.status(404)
        throw new Error("Todo not get")
    }
    res.status(200).json(singleTodo)

}
module.exports = { getTodos, createTodos, updateTodos, deleteTodos,getSingleTodo }