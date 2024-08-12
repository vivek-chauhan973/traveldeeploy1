
import mongoose from 'mongoose';

const priceHikeSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  priceIncrease: { type: Number, required: true },
  isActive: { type: Boolean, default: true } ,
  svg:{type:String}
}, {
  timestamps: true 
});
const PriceHike = mongoose.models.PriceHike||mongoose.model('PriceHike', priceHikeSchema);
export default PriceHike
