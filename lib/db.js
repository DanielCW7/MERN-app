// holds the script responsible for connecting to the database

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch(error){
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // exit process with failure
    }
};

export default connectDB;