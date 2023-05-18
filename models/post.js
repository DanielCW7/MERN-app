// data structure for individual posts.
// required dependencies, in this case 'mongoose'.
import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

postSchema.methods.echo = function echo() {
    const title = this.title 
    ? 'this title is: ' + this.title
    : 'this book has no title';
    console.log(title)
}

const Post = mongoose.model('Post', postSchema);

module.exports = Post;