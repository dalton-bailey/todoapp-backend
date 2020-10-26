const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

const categoryRoutes = require('./routes/category')
const todosRoutes = require('./routes/todos')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/categories', categoryRoutes)
app.use('/todos', todosRoutes)
app.use(express.static('src'))

mongoose.connect(
  "mongodb+srv://admin_user:HxkSk4DjUsf2pfUv@cluster0.wfrgb.mongodb.net/skis?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(port, () => {
  console.log("Server running on port 3000");
});




