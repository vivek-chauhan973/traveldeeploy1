import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const LimitedTimeSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    }
   
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const CarLimitedTime = mongoose.models.CarLimitedTime || mongoose.model('CarLimitedTime', LimitedTimeSchema);

export default CarLimitedTime;
