import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const cancellationSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const CarCancellation = mongoose.models.CarCancellation || mongoose.model('CarCancellation', cancellationSchema);

export default CarCancellation;
