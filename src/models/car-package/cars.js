const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  ac: { type: String, required: true, enum: ['AC', 'Non AC'] },
  seatingCapacity: { type: Number, required: true },
  vehicleType: { type: String, required: true, enum: ['Sedan', 'SUV', 'Hatchback'] },
  dailyLimit: { type: Number, required: true },
  rate: { type: Number, required: true },
  outStationBasePrice: { type: Number, required: true },
  perKmRate: { type: Number, required: true },
  markup: { type: Number, required: true },
  categories: { type: [String], required: true},
  imageUrl: { type: String }
}, { timestamps: true });

const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);
export default Car;
