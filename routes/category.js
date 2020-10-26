const express = require('express')
const router = express.Router()

const Category = require('../models/categoryModel')
const Todos = require('../models/todosModel')


//create a category
router.post('/', (req, res) => {
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
  router.get('/', (req, res) => {
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
  router.post('/:id', (req, res) => {
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
  router.get('/:id', (req, res) => {
    Category.findById({ _id: req.params.id })
    .populate('todos')
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
  })

  module.exports = router