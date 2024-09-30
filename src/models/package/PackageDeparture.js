import mongoose, { Schema } from "mongoose";
const departureSchema=new Schema({
  Date: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Start_drop_down: {
    type: Number
  },
  End_drop_down: {
    type: Number,
  },
  GST: {
    type: String,
  },
  Weight: {
    type: Number,
  },
  Avilability:{
    type: Number,
  }

})
const packageDepartureSchema = new Schema(
  {
   departureData:[departureSchema],
    departure1:{
      type:String,
      required:true
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
