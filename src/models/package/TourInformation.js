import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TourDetailSchema = new Schema({
  groupName: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TourInformationSchema = new Schema({
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  cancellation: { type: TourDetailSchema, required: true },
  paymentTerm: { type: TourDetailSchema, required: true },
  inclusion: { type: TourDetailSchema, required: true },
  exclusion: { type: TourDetailSchema, required: true },
  needToKnow: { type: TourDetailSchema, required: true }
}, { timestamps: true });

const TourInformation = mongoose.models.TourInformation || mongoose.model('TourInformation', TourInformationSchema);

export default TourInformation;
