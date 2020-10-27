const express = require("express");
const router = express.Router();

const Todos = require("../models/todosModel");

//get all todos
router.get("/", (req, res, next) => {
  Todos.find({})
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create a category
router.post('/', (req, res) => {
  Todos.create({
    todo: req.query.todo,
    complete: req.query.complete,
    category: req.query.category
  })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
});

//delete a todo
router.delete("/", (req, res) => {
  Todos.deleteOne({ name: req.query.name }, (err, todos) => {
    Todos.find((err, todos) => {
      if (err) console.log(err);

      res.json(todos);
    });
  });
});

module.exports = router;
