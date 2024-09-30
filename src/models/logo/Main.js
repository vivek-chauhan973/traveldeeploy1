import mongoose from 'mongoose';

const logoSchema1 = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.LogoSchema || mongoose.model('LogoSchema', logoSchema1);
