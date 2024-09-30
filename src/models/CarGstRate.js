import mongoose from 'mongoose';

const GstRateSchema = new mongoose.Schema({
    gstRate: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const CarGstRate= mongoose.models.CarGstRate || mongoose.model('CarGstRate', GstRateSchema);
export default CarGstRate;