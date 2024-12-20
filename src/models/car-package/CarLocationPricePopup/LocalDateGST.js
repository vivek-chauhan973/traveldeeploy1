import mongoose, { Schema } from "mongoose";
const departureSchema=new Schema({
  Date: {
    type: String,
    required: true,
  },
  Additional_Markup: {
    type: Number
  },
  GST: {
    type: String,
  },
})
const packageDepartureSchema = new Schema(
  {
   localdatagst:[departureSchema],
  },
  {
    timestamps: true,
  }
);

const LocalDateGST =
  mongoose.models.LocalDateGST ||
  mongoose.model("LocalDateGST", packageDepartureSchema);

export default LocalDateGST;
