// models/package/PackageState.js
import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  title: { type: String, required: true },
  information: { type: String, required: true },
});
const seoSchema=new mongoose.Schema({
  seoTags:{
    type:String
  },
  seoTitle:{
    type:String,
  },
  seoDescription:{
    type:String
  },
  seoKeywords:{
    type:String
  },
  seoCanonical:{
    type:String
  }
})
const packageStateSchema = new mongoose.Schema({
  relatedId: { type: mongoose.Schema.Types.ObjectId, required: true },
  relatedTo: { type: String, required: true },
  title: { type: String }, // Add title field
  alt: { type: String }, // Add alt field
  image: { type: String }, // Add image field
  description: { type: String, required: true },
  faq: [faqSchema],
  tableData:[{}],
 seoField:seoSchema,
 selectType:{
  type:String,
  required:true
 },
 tableColumn:[String],
 selectedItem:{
  type:String,
  required:true
 },
 posterPath:{
  type:String
 },
 posterTitle:{
  type:String
 },
 posterAlt:{
  type:String
 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PackageState =
  mongoose.models.PackageState ||
  mongoose.model("PackageState", packageStateSchema);

export default PackageState;
