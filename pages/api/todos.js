// database connection
import clientPromise from '../../db';

// takes the request and checks for the type of request made
export default async function handler(req, res) {
    
        const client = await clientPromise();
        const db = client.db("test")

        switch(req.method) {
            case "POST":
                let bodyObject = JSON.parse(req.body);
                let myPost = await db.collection("todos").insertOne(bodyObject);
                res.json(myPost.ops[0]);
                break;

            case "GET":
                const allPosts = await db.collection.find({}).toArray();
                res.json({ status: 200, data: allPosts});
                break;
        }
}