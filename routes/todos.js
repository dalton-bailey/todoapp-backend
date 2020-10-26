const express = require('express')
const router = express.Router()

const Todos = require('../models/todosModel')

//get all todos
router.get('/', (req, res) => {
    Todos.find({})
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      res.json(err)
    })
  })

  module.exports = router