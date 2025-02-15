
import mongoose, { Schema } from "mongoose";
import "@/models/car-package/package/TourInfo/Inclusion";
import "@/models/car-package/package/TourInfo/Exclusion";
import "@/models/car-package/package/TourInfo/Cancellation";
import "@/models/car-package/package/TourInfo/NeedToKnow";
import "@/models/car-package/package/TourInfo/PaymentTerm";
import "@/models/City";
import "@/models/Country";
import "@/models/State";
import "@/models/car-package/package/PackageCategory";
import "@/models/car-package/package/PriceHike";
import "@/models/car-package/package/PackageDeparture";
import CarCounter from "./CarCounter";
import "./car-package/cars";
async function getNextSequenceValueWithPrefix(sequenceName, prefix = 'BXC', padding = 3) {
  const sequenceDocument = await CarCounter.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } }, // Increment the sequence value
    { new: true, upsert: true } // Return the updated document or insert if it doesn't exist
  );
  
  const paddedSequence = String(sequenceDocument.sequence_value).padStart(padding, '0');
  return `${prefix}${paddedSequence}`; // Combine prefix and sequence
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("db connected"));

  const tourInfoSchema=new mongoose.Schema({
    tourInclusion:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarInclusion"
    },
    tourExclusion:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarExclusion"
    },
    tourCancelationPolicy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarCancellation"
    },
    tourNeedToKonow:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarNeedToKnow"
    },
    tourPayment:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarPaymentTerm"
    },
  })
const packageSchema = new Schema({
    priority:{
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    selectedVicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PackageMasterCategory",
        required: true,
      },
    ],
    priceHike:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CarPriceHike"
    },
    fixedDeparturePrices:{
     type:mongoose.Schema.Types.ObjectId,
      ref:"CarPackageDeparture"
    },
    icons:{
      type:mongoose.Schema.Types.ObjectId,
       ref:"CarSelectedIcon"
     },
    tourinfo:tourInfoSchema,
    badges: {
      type: [String],
      default: [],
    },
    days: {
      type: Number,
    },
    uploads: [String],
    startcity: {
      type: [String],
      default: [],
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    highSave:{
      type:String,
    },

    country:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    customId: { type: String, unique: true },
    tableData:[{}],
    tableColumn:[String],
    state:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    about: { type: String, trim: true },
    dayWiseInformation: { type: String, trim: true },
    packageRating:{
      type:String,
      required:true
    },
    highlightedPackage:{
      type:String,
      required:true
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// Virtual field to calculate display price based on addguestPrices

packageSchema.virtual("pageUrl").get(function () {
  return `${this.url}-car-hire`;
});
packageSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("name")) {
    this.url = this.name.toLowerCase().replace(/\s+/g, "-");
  }
  if (this.isNew) {
    this.customId = await getNextSequenceValueWithPrefix('users', 'BXC'); // Generate ID like BXP001
  }
  try {
    await this.validate();
    next();
  } catch (error) {
    next(error);
  }
});
packageSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.name) {
    update.url = update.name.toLowerCase().replace(/\s+/g, "-");
  }
  next();
});

const CarPackage1 =
  mongoose.models.CarPackage1 || mongoose.model("CarPackage1", packageSchema);

export default CarPackage1;
