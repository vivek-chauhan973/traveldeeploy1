import mongoose from 'mongoose';

const packageImageSchema = new mongoose.Schema({
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
  },
  uploads: [{
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
  }],
});

export default mongoose.models.PackageImage || mongoose.model('PackageImage', packageImageSchema);
