import mongoose from 'mongoose';
console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI);

const exclusionSchema = new mongoose.Schema({
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

const CarExclusion = mongoose.models.CarExclusion || mongoose.model('CarExclusion', exclusionSchema);

export default CarExclusion;
