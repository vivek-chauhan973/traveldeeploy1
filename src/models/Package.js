
import mongoose, { Schema } from "mongoose";
import "@/models/package/TourInfo/Inclusion";
import "@/models/package/TourInfo/Exclusion";
import "@/models/package/TourInfo/Cancellation";
import "@/models/package/TourInfo/NeedToKnow";
import "@/models/package/TourInfo/PaymentTerm";
import "@/models/City";
import "@/models/Country";
import "@/models/State";
import "@/models/package/PackageCategory";
import "@/models/package/PackagePrice";
import "@/models/package/PriceHike";
import "@/models/package/PackageDeparture";
import Counter from "./Counter";
import  "./selectedIcon/SelectedIcon";
import  "./package/PackageSeo";
async function getNextSequenceValueWithPrefix(sequenceName, prefix = 'BXP', padding = 3) {
  const sequenceDocument = await Counter.findOneAndUpdate(
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
      ref:"Inclusion"
    },
    tourExclusion:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Exclusion"
    },
    tourCancelationPolicy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Cancellation"
    },
    tourNeedToKonow:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"NeedToKnow"
    },
    tourPayment:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"PaymentTerm"
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
      ref:"PriceHike"
    },
    addguestPrices:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"PackagePrice"
    },
    fixedDeparturePrices:{
     type:mongoose.Schema.Types.ObjectId,
      ref:"PackageDeparture"
    },
    seo:{
      type:mongoose.Schema.Types.ObjectId,
       ref:"SeoData"
     },
    icons:{
      type:mongoose.Schema.Types.ObjectId,
       ref:"SelectedIcon"
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
    addguest: {
      type: String,
    },
    fixedfixeddepartureweightedprice: {
      type: Number,
    },
    startcity: {
      type: [String],
      default: [],
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
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
packageSchema.pre(/^find/, function (next) {
  this.populate("addguestPrices");
  next();
});
// Virtual field to calculate display price based on addguestPrices
packageSchema.virtual('displayPrice').get(function () {
  if (this.addguestPrices) {
    const basePrice = this.addguestPrices.twinSharingRoom + (this.addguestPrices.misc * (this.days || 0));
    const markupAmount = (basePrice * this.addguestPrices.markup) / 100;
    const priceWithMarkup = basePrice + markupAmount;
    const discountAmount = (priceWithMarkup * Math.abs(this.addguestPrices.diskHike)) / 100;
    const grandTotal = this.addguestPrices.diskHike < 0
      ? priceWithMarkup - discountAmount
      : priceWithMarkup + discountAmount;
    const gstAmount = (grandTotal * this.addguestPrices.gst) / 100;
    return (grandTotal + gstAmount) / 2;
  }
  return 0; // Return a default value if addguestPrices is not defined
});
packageSchema.virtual('alksdfjjkashdfjkashdfkas').get(function () {
  return this.days
  
});

packageSchema.virtual("pageUrl").get(function () {
  return `${this.url}-tour-package`;
});
packageSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("name")) {
    this.url = this.name.toLowerCase().replace(/\s+/g, "-");
  }
  if (this.isNew) {
    this.customId = await getNextSequenceValueWithPrefix('users', 'BXP'); // Generate ID like BXP001
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

const Package =
  mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Package;
