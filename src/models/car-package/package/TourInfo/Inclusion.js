import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const inclusionSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const CarInclusion = mongoose.models.CarInclusion || mongoose.model('CarInclusion', inclusionSchema);

export default CarInclusion;
