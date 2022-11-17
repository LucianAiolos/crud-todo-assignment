
const router = require('express').Router()

const { 
  createTodo,
  getTodoList,
  updateTodo, 
  deleteTodo,
  // deleteTodoFunction,
  todoForm,
} = require('../controllers/TodoController')

// Don't need to install npm router.

router.get("/", (req, res) => {
  res.send("Welcome To my Todo List")

})

// router.get and try to dispaly an ejs file

router.post('/todos', createTodo)
router.get('/todos', getTodoList)
router.get('/todo-edit/:id', updateTodo)
// router.post('/todo-edit/:id'), updateTodo)
router.get('/delete-todo/:id', deleteTodo)
// router.delete('todo/:id', deleteTodoFunction)
router.get('/todoForm', (req, res ) => {
  res.render('todoForm')
})

module.exports = router