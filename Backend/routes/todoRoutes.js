const express = require("express")
const { getTodos, createTodos, updateTodos, deleteTodos, getSingleTodo } = require("../controllers/todoController")
const router = express.Router()

router.get("/contact", getTodos)
router.post("/about", createTodos)
router.put("/:id", updateTodos)
router.get('/:id', getSingleTodo)
router.delete("/:id", deleteTodos)

module.exports = router