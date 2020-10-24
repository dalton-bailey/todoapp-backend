const mongoose = require('mongoose');
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

})

const Todos = mongoose.model('Todos', TodosSchema)

module.exports = Todos