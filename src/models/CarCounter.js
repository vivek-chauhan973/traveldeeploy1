import mongoose from "mongoose";

// Define the schema for storing sequence values
const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Name of the counter (e.g., 'users')
  sequence_value: { type: Number, default: 0 } // Sequence number
});

const CarCounter = mongoose.models.CarCounter|| mongoose.model('CarCounter', counterSchema);
export default CarCounter
