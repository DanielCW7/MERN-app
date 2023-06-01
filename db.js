import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI;
const dbName = 'test';

let cachedClient = null;

export async function connectDB() {
    try {
        if(cachedClient && cachedClient.isConnected()) {
            return cachedClient;
        }

        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = client.db(dbName);
        cachedClient = client;

        return db        
    } catch(error) {
        console.error(error)
    }

}