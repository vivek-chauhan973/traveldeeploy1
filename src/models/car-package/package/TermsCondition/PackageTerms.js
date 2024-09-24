import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const PackageTermsSchema = new mongoose.Schema({
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

const CarPackageTerms = mongoose.models.CarPackageTerms || mongoose.model('CarPackageTerms', PackageTermsSchema);

export default CarPackageTerms;
