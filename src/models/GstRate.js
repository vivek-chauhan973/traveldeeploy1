

import mongoose from 'mongoose';

const GstRateSchema = new mongoose.Schema({
    gstRate: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.GstRate || mongoose.model('GstRate', GstRateSchema);