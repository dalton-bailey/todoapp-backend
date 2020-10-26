const mongoose = require('mongoose');
const Category = require('./categoryModel');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }

})

const Todos = mongoose.model('Todos', TodosSchema)

module.exports = Todos