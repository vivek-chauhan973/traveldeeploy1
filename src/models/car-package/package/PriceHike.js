
import mongoose from 'mongoose';
const hikeSchema=new mongoose.Schema({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  priceIncrease: { type: Number, required: true },
  isActive: { type: Boolean, default: true } ,
  svg:{type:String}
})
const priceHikeSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'CarPackage1', required: true },
 priceHiKe:[hikeSchema]
}, {
  timestamps: true 
});

const CarPriceHike = mongoose.models.CarPriceHike||mongoose.model('CarPriceHike', priceHikeSchema);
export default CarPriceHike
