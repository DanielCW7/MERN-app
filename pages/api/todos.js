// database connection
import { connectDB } from '../../db';

// takes the request and checks for the type of request made
export default async function handler(req, res) {
    
    try {
        const db = await connectDB();
        const collection = db.collection('todos');


        if(req.method === 'GET') {
            // get all todos
            const todos = await collection.find({}).toArray();
            res.status(200).json(todos);
        } else if (req.method === 'POST') {
            // create a todo
            const todo  = req.body;
            const result = await collection.insertOne(todo);
            res.status(201).json(result.ops[0]);
        } else if (req.method === 'PUT') {
            // update a todo
            const { id, ...updates } = req.body;
            const result = await collection.updateOne({ _id: id}, { $set: updates });
            res.status(200).json(result.modifiedCount)
        } else if(req.method === 'DELETE') {
            // delete a todo
            const { id } = req.body;
            const result = await collection.deleteOne({ _id: id });
            res.status(200).json(result.deleteCount);
        }} catch (error) {
            console.error(error)
        }
}