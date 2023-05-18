// for handling api route related posts

import connectDB from "../../lib/db";

const Post = require('../../models/post');
// this function comes from connectDB^ and is responsible for establishing DB connection
connectDB();

// takes the request and checks for the type of request made
export default async function handler(req, res) {
    if (req.method === 'GET') {
        // retrieve all posts
        // responds with a 200 code and returns the posts in JSON format
        const posts = await Post.find();
        res.status(200).json(posts);
    }
    // } else if (req.method === 'POST') {
    //     // create a new post
    //     const { title, content } = req.body;
    //     const post = new Post({ title, content });
    //     await post.save();
    //     res.status(201).json(post);
    // }
}