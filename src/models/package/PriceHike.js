
import mongoose from 'mongoose';
const hikeSchema=new mongoose.Schema({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  priceIncrease: { type: Number, required: true },
  isActive: { type: Boolean, default: true } ,
  svg:{type:String}
})
const priceHikeSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
 priceHiKe:[hikeSchema]
}, {
  timestamps: true 
});

const PriceHike = mongoose.models.PriceHike||mongoose.model('PriceHike', priceHikeSchema);
export default PriceHike
