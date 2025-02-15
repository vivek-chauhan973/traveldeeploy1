import mongoose from 'mongoose';
const connectToDatabase = async () => {

    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log("mogo db atlas connected successfully")
        return conn;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}

export default connectToDatabase;
