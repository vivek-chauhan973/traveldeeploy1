import mongoose, { Schema } from "mongoose";

const reviewSchema=new Schema({
    author:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    sdate:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
},
{timestamps:true})

const Review=mongoose.models.Review ||mongoose.model("Review",reviewSchema);

export default Review;