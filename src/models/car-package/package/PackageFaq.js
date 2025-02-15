// models/package/PackageFaqWise.js
import mongoose from 'mongoose';

const PackageFaqWiseSchema = new mongoose.Schema({
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarPackage1',
        required: true,
    },
    days: [
        {
            title: { type: String, required: true },
            information: { type: String, required: true },
        }
    ],
}, { timestamps: true });

 const CarPackageFaqWise= mongoose.models.CarPackageFaqWise || mongoose.model('CarPackageFaqWise', PackageFaqWiseSchema);
 export default CarPackageFaqWise
