// models/Rating.js
import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
  ratingValue: {
    type: Number,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Rating = mongoose.models.Rating || mongoose.model('Rating', RatingSchema);

export default Rating;
