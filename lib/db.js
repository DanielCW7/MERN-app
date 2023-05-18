// holds the script responsible for connecting to the database


/* 
say we want like books and want to record every book that we see in mongodb
we must include mongoose in our project and open a connection to the 'xyz' 
database on our locally running instance of mongodb

*/
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Access the desired database and collection
    const db = mongoose.connection;
    const collection = db.collection('COMIC BOOK DATABASE');

    // Example: Fetch all documents from the collection
    const documents = await collection.find().toArray();
    console.log('Documents:', documents);

    // Close the database connection
    db.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
