import mongoose, { Schema } from "mongoose";
const departureSchema=new Schema({
  Date: {
    type: String,
    required: true,
  },
  Hike: {
    type: Number
  },
  Save: {
    type: Number,
  },
  GST: {
    type: String,
  },
})
const packageDepartureSchema = new Schema(
  {
   departureData:[departureSchema],
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarPackage1",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarPackageDeparture =
  mongoose.models.CarPackageDeparture ||
  mongoose.model("CarPackageDeparture", packageDepartureSchema);

export default CarPackageDeparture;
