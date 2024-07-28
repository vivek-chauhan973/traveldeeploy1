import mongoose, { Schema } from "mongoose";

const textSchema = new Schema(
  {
    text: { type: String, required: true },
    edit: { type: Boolean, required: true },
  },
  { _id: false }
);

const packageDepartureSchema = new Schema(
  {
    basePrice: {
      type: Number,
      required: true,
    },
    perRate: {
      type: Number,
      required: true,
    },
    inventory: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    agePolicy: {
      type: [textSchema],
      required: true,
    },
    notes: {
      type: [textSchema],
      required: true,
    },
    departure1:{
      type:String
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const PackageDeparture =
  mongoose.models.PackageDeparture ||
  mongoose.model("PackageDeparture", packageDepartureSchema);

export default PackageDeparture;
