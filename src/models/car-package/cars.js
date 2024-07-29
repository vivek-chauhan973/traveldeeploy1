import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  ac: {
    type: String,
    enum: ['AC', 'Non AC'],
    required: true,
  },
  seatingCapacity: {
    type: Number,
    required: true,
  },
  vehicleType: {
    type: String,
    enum: ['Sedan', 'SUV', 'Hatchback'],
    required: true,
  },
  dailyLimit: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  outStationBasePrice: {
    type: Number,
    required: true,
  },
  perKmRate: {
    type: Number,
    required: true,
  },
  markup: {
    type: Number,
    required: true,
  },
  imageUrls: [
    {
      type: String, // This can store the URL or base64 encoded image data
    }
  ],
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export default mongoose.models.Car || mongoose.model('Car', CarSchema);
