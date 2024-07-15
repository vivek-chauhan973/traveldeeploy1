import mongoose from 'mongoose';
import { Db, MongoClient } from 'mongodb';
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vermapradhumn3:pradhumn@cluster0.xo2ekjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Global is used here to maintain a cached connection across hot reloads in development. In production, a new connection is created for each deployment.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
