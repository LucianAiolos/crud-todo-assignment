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
  let id = req.params.id
  console.log('id is', id)
  Todo.findById(id, (err, todo) => {
    if(err) {
      res.redirect('/todos')
    } else {
      if(todo == null) {
        res.redirect('/')
      } else {
        res.render('update', {todo: todo})
      }
    }
  })
  // Todo.fintIdAndUpdate(
  //   { id: req.params.id },
  //   { $set: {
  //       title: req.body.title,
  //       description: req.body.description,
  //       isComplete: req.body.isCompleted
  //   }},
  //   { new: true },
  //   (err, Todo) => {
  //     if(err) {
  //       res.send(err, "There was an error updating your todo")
  //     } else {
  //       res.json(Todo)
  //     }
  //   }
  // )
}

// const deleteTodoFunction = (req, res) => {
//   Todo.deleteOne({ id: req.params.id })
//     .then(()=> res.json({ message: "Item has been deleted"}))
// }

const deleteTodo = (req, res) => {
  Todo.findByIdAndRemove({ _id: req.params.id})
    .then(()=> res.redirect('/todos'), console.log('deleted!!'))
}

module.exports = {
  createTodo, getTodoList, updateTodo, deleteTodo, 
  // deleteTodoFunction
}