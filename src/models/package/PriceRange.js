// models/PriceRange.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PriceSchema = new Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  dayOfWeek: { type: String, required: true }
});

const PriceRangeSchema = new Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  basePrice: { type: Number, required: true },
  percentage: { type: Number, default: 0 },
  prices: [PriceSchema]
});

const PriceRange = mongoose.models.PriceRange || mongoose.model('PriceRange', PriceRangeSchema);

export default PriceRange;
