import mongoose from 'mongoose';
import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb://localhost:27017/ToursTravels";

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
