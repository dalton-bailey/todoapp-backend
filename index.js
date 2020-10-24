const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server running on port 3000");
});

mongoose.connect(
  "mongodb+srv://admin_user:HxkSk4DjUsf2pfUv@cluster0.wfrgb.mongodb.net/skis?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Todos = require('./models/todosModel')
const Category = require('./models/categoryModel')

//create a category
app.post('/categories', (req, res) => {
  Category.create({
    name : req.query.name
  })
  .then((category) => {
    res.json(category)
  })
  .catch((err) => {
    res.json(err)
  })
})

//get all categories with their todos
app.get('/categories', (req, res) => {
  Category.find({})
  .populate('todos')
  .then((categories) => {
    res.json(categories)
  })
  .catch((err) => {
    res.json(err)
  })
})

//create todo and update category
app.post('/categories/:id', (req, res) => {
  Todos.create({
    todo: req.query.todo,
    complete: req.query.complete,
  })
  .then((todo) => {
    return Category.updateOne(
      { _id: req.params.id },
      { $addToSet: { todos: todo._id } }
    )
  })
  .then((category) => {
    res.json(category)
  })
  .catch((err) => {
    res.json(err)
  })
})

//get category by id and populating it's todos
app.get('/categories/:id', (req, res) => {
  Category.findById({ _id: req.params.id })
  .populate('todos')
  .then((category) => {
    res.json(category)
  })
  .catch((err) => {
    res.json(err)
  })
})


//get all todos
app.get('/todos', (req, res) => {
  Todos.find({})
  .then((todos) => {
    res.json(todos)
  })
  .catch((err) => {
    res.json(err)
  })
})