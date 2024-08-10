import mongoose, { Schema } from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("db connected"));

const packageSchema = new Schema({
    priority:{
        type:Number,
        required:true
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
    badges: {
      type: [String],
      default: [],
    },
    days: {
      type: Number,
      default: 0,
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
