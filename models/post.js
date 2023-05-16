// data structure for individual posts
// required dependencies, in this case 'mongoose'
const mongoose = require('mongoose');

/*
postSchema is a variable representing the data structure and validations for 
an individual post in a MongoDB collection
*/
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

/*
Post is a variable representing a Mongoose model that interacts 
with the MongoDB collection for individual posts.
*/
const Post = mongoose.model('Post', postSchema);

/*
module.exports is used to export the Post model 
as the default export from the module.
*/
module.exports = Post;