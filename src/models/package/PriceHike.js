const mongoose = require('mongoose');

const priceHikeSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceName: {
    type: String,
    required: true,
  },
});

const PriceHike = mongoose.model('PriceHike', priceHikeSchema);
