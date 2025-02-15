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
        ref: 'CarPackage1',
        required: true
    }
}, {
    timestamps: true
});

const CarPackageDayWise = mongoose.models.CarPackageDayWise || mongoose.model('CarPackageDayWise', packageDayWiseSchema);

export default CarPackageDayWise;