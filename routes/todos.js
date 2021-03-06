const express = require("express");
const router = express.Router();
const cors = require('cors')

router.use(cors())

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

//create a todo
router.post('/', (req, res) => {
  console.log(req);
  Todos.create({
    todo: req.body.todo,
    complete: req.body.complete,
    category: req.body.category
  })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);


    Todos.find((err, todos) => {
      if (err) console.log(handleError(err));
      res.json(todos);
    });
    });

});

//delete a todo
router.delete('/:id', (req, res) => {
  Todos.deleteOne({ _id: req.params.id}, (err, todos) => {
    if(err) console.log(err)

    Todos.find((err, todos) => {
      if (err) console.log(handleError(err));
      res.json(todos);
    });

  })
});

//update a todo
router.put('/:id', (req, res) => {
    Todos.findById({ _id: req.params.id}, (err, todos) => {
      if(err) console.log(err)

    todos.update(req.query, (err, todos) => {
      if(err) console.log(err)


    Todos.find((err, todos) => {
      if (err) console.log(handleError(err));
      res.json(todos);
    });

    })
  })
})

module.exports = router;
