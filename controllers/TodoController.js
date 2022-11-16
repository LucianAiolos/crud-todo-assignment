const Todo = require('../model/TodoModel')

const createTodo = (req, res) => {
  const todoItem = new Todo({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    isCompleted: req.body.isCompleted
  })

  todoItem.save()
    .then(todoItem => {
    res.redirect('/todos')
    })
    .catch(err => {
      res.status(400).send("unable to save to database")
    })
  
}

// const todoForm = (req, res) => {
//   const
// }

const getTodoList = (req, res) => {
  Todo.find((err, todos) => {
    // const todoList = todos
    // console.log(todoList)
    if(err) {
      res.send(err)
    }
    // res.json(todos)

    res.render('index', { todos: todos })
  })
}

const updateTodo = (req, res) => {
  Todo.fintOneAndUpdate(
    { id: req.params.id },
    { $set: {
        title: req.body.title,
        description: req.body.description,
        isComplete: req.body.isCompleted
    }},
    { new: true },
    (err, Todo) => {
      if(err) {
        res.send(err)
      } else {
        res.json(Todo)
      }
    }
  )
}

const deleteTodo = (req, res) => {
  Todo.deleteOne({ id: req.params.id })
    .then(()=> res.json({ message: "Item has been deleted"}))
}

module.exports = {
  createTodo, getTodoList, updateTodo, deleteTodo
}