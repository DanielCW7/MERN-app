// data structure for individual posts.
// required dependencies, in this case 'mongoose'.
import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    description: { type: String, required: true }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;