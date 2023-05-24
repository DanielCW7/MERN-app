// for handling api route related posts

import connectDB from "../../lib/db";
import mongoose from "mongoose";
import Todo from '../../models/post';
// const Todo = require('../../models/post');
// this function comes from connectDB^ and is responsible for establishing DB connection
connectDB();

// takes the request and checks for the type of request made
export default async function handler(req, res) {

    const database = mongoose.connection;

    if (req.method === 'GET') {
        // retrieve all posts
        // responds with a 200 code and returns the posts in JSON format
        const todos = await database.collection('todos').find().toArray();
        res.status(200).json(todos);
    } else if (req.method === 'POST') {
        // create a new post
        const { todo, description } = req.body;
        const post = new Todo({ todo, description });
        await post.save();
        res.status(201).json(post);
    }
}