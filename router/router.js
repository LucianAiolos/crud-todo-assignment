const router = require('express').Router()

const { 
  createTodo,
  getTodoList,
  updateTodo, 
  deleteTodo,
  findTodo,
  // deleteTodoFunction,
} = require('../controllers/TodoController')

// Don't need to install npm router.

router.get("/", (req, res) => {
  res.send("Welcome To my Todo List")

})

router.post('/todos', createTodo)
router.get('/todos', getTodoList)
router.get('/todo-edit/:id', findTodo)
router.post('/todo-edit/:id', updateTodo)
router.get('/delete-todo/:id', deleteTodo)
// router.delete('todo/:id', deleteTodoFunction)
router.get('/todoForm', (req, res ) => {
  res.render('todoForm')
})

module.exports = router