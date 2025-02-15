import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMapSchema = new mongoose.Schema({
    mapCode: {
        type: String,
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarPackage1',
        required: true
    }
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const CarPackageMap = mongoose.models.CarPackageMap || mongoose.model('CarPackageMap', packageMapSchema);

export default CarPackageMap;
