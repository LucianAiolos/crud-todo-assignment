const router = require('express').Router()
const { 
  createTodo,
  getTodoList,
  updateTodo, 
  deleteTodo
} = require('../controllers/TodoController')

// Don't need to install npm router?

router.get("/", (req, res) => {
  res.send("Welcome To my Todo List")

})

// router.get and try to dispaly an ejs file

router.post('/todos', createTodo)
router.get('/todos', getTodoList)
router.put('/todo/"id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router