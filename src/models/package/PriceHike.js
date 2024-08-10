// models/PriceHike.js
import mongoose from 'mongoose';// Ensure correct path to Package model

const priceHikeSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true }, // Reference to Package
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  priceIncrease: { type: Number, required: true },
  isActive: { type: Boolean, default: true } ,// Toggle feature on or off
  svg:{type:String}
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const PriceHike = mongoose.model('PriceHike', priceHikeSchema);
