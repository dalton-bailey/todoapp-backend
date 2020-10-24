const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todos',
    },
  ],
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;