import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const FlexibleTimeSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    }
   
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const CarFlexibleTime = mongoose.models.CarFlexibleTime || mongoose.model('CarFlexibleTime', FlexibleTimeSchema);

export default CarFlexibleTime;
