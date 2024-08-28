import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Car name is required'],
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
  },
  ac: {
    type: Number,
    required: [true, 'AC type is required'],
  },
  seatingCapacity: {
    type: Number,
    required: [true, 'Seating capacity is required'],
  },
  vehicleType: {
    type: String,
    enum: ['Sedan', 'SUV', 'Hatchback'],
    required: [true, 'Vehicle type is required'],
  },
  dailyLimit: {
    type: Number,
    required: [true, 'Daily limit is required'],
  },
  rate: {
    type: Number,
    required: [true, 'Rate is required'],
  },
  outStationBasePrice: {
    type: Number,
    required: [true, 'Out station base price is required'],
  },
  perKmRate: {
    type: Number,
    required: [true, 'Per KM rate is required'],
  },
  markup: {
    type: Number,
    required: [true, 'Markup is required'],
  },
  imageDetails: [{
    url: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    title: {
      type: String,
      required: [true, 'Image title is required'],
    },
    alt: {
      type: String,
      required: [true, 'Image alt text is required'],
    }
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Car || mongoose.model('Car', CarSchema);
