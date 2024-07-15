import mongoose from 'mongoose';
import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://vermapradhumn3:pradhumn@cluster0.xo2ekjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {

    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log('Connected to MongoDB');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}

export default connectToDatabase;
