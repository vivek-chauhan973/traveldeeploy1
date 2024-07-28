import mongoose, { Schema } from "mongoose";

const packageDayWiseSchema = new Schema({
    days: [
        {
            title: { type: String, required: true },
            information: { type: String, required: true },
        }
    ],
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    }
}, {
    timestamps: true
});

const PackageDayWise = mongoose.models.PackageDayWise || mongoose.model('PackageDayWise', packageDayWiseSchema);

export default PackageDayWise;