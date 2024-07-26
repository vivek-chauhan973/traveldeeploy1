import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMapSchema = new mongoose.Schema({
    mapCode: {
        type: String,
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    }
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const PackageMap = mongoose.models.PackageMap || mongoose.model('PackageMap', packageMapSchema);

export default PackageMap;
