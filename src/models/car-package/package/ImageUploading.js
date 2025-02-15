import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI).then(res=>console.log("db connected"));

const packageImageSchema = new mongoose.Schema({
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarPackage1',
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

const CarPackageImage= mongoose.models.CarPackageImage || mongoose.model('CarPackageImage', packageImageSchema);
export default  CarPackageImage
