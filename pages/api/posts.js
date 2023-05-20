// for handling api route related posts

import connectDB from "../../lib/db";
import mongoose from "mongoose"

// const Todo = require('../../models/post');
// this function comes from connectDB^ and is responsible for establishing DB connection
connectDB();

// takes the request and checks for the type of request made
export default async function handler(req, res) {

    const database = mongoose.connection;

    if (req.method === 'GET') {
        // retrieve all posts
        // responds with a 200 code and returns the posts in JSON format
        const todos = await database.collection('posts').find().toArray();
        res.status(200).json(todos);
    } else if (req.method === 'POST') {
        // create a new post
        const { title, content } = req.body;
        const post = new Todo({ title, content });
        await post.save();
        res.status(201).json(post);
    } else {
        
    }
}