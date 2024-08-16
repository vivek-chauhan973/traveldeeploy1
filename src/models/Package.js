
import mongoose, { Schema } from "mongoose";

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
    tableData:[{}],
    tableColumn:[String],
    state:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    about: { type: String, trim: true },
    dayWiseInformation: { type: String, trim: true },
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
    const basePrice = this.addguestPrices.twinSharingRoom + (this.addguestPrices.misc * this.days);
    const markupAmount = (basePrice * this.addguestPrices.markup) / 100;
    const priceWithMarkup = basePrice + markupAmount;
    const discountAmount = (priceWithMarkup * Math.abs(this.addguestPrices.diskHike)) / 100;
    const grandTotal = this.addguestPrices.diskHike < 0
      ? priceWithMarkup - discountAmount
      : priceWithMarkup + discountAmount;
    const gstAmount = (grandTotal * this.addguestPrices.gst) / 100;
    return (grandTotal + gstAmount) / 2;
  }
  
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
