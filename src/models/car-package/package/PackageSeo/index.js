import mongoose from 'mongoose';

const PackageSeoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priceValid: {
    type: Date,
    required: true,
  },
  canonicalUrl: {
    type: String,
    default: function() {
      return `https://example.com/${this.title.replace(/\s+/g, '-').toLowerCase()}`;
    }
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
  }
}, {
  timestamps: true,
});

const CarSeoData= mongoose.models.CarSeoData || mongoose.model('CarSeoData', PackageSeoSchema);
export default CarSeoData
