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
  keyword:{
    type: String,
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

const SeoData= mongoose.models.SeoData || mongoose.model('SeoData', PackageSeoSchema);
export default SeoData
