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

const PackageTerms = mongoose.models.PackageTerms || mongoose.model('PackageTerms', PackageTermsSchema);

export default PackageTerms;
