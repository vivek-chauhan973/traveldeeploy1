// models/package/PackageFaqWise.js
import mongoose from 'mongoose';

const PackageFaqWiseSchema = new mongoose.Schema({
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true,
    },
    days: [
        {
            title: { type: String, required: true },
            information: { type: String, required: true },
        }
    ],
}, { timestamps: true });

const PackageDayWise= mongoose.models.PackageFaqWise || mongoose.model('PackageFaqWise', PackageFaqWiseSchema);
export default PackageDayWise;
