import mongoose from "mongoose";
import "../package/PackageCategory";
import "./BlogQuestion";
import "./BlogSeoDetail";
import "./Table";
import "./SubQuestions";
import  "../State";
import "../Country";
import "../City";
import "./BlogWriter";
const BlogDetailSchema = new mongoose.Schema(
  {
    blogType: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim:true
    },
    filename: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    contentsummary: {
      type: String,
    },
    videoPath: {
      type: String,
      required: true,
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
    state:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogTable",
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogWriter",
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PackageMasterCategory",
      },
    ],
    blogQuestions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "BlogQuestion" },
    ],
    blogSeo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogSeoDetail",
    },
  },
  { timestamps: true }
);

const BlogDetail =
  mongoose.models.BlogDetail || mongoose.model("BlogDetail", BlogDetailSchema);

export default BlogDetail;
