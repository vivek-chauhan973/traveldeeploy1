// models/PriceHike.js
import mongoose from 'mongoose';
import Package from './Package'; // Ensure correct path to Package model

const priceHikeSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true }, // Reference to Package
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  priceIncrease: { type: Number, required: true },
  isActive: { type: Boolean, default: true } // Toggle feature on or off
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const PriceHike = mongoose.models.PriceHike || mongoose.model('PriceHike', priceHikeSchema);

export default PriceHike;
