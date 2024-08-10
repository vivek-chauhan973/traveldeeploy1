// models/Review.js
import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  information: { type: String, required: true },
  rating: { type: Number, required: true },
  name: { type: String, required: true },
  selectDate: { type: Date, required: true },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
