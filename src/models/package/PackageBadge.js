import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMasterBadge = new mongoose.Schema({
    badge: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const PackageMasterBadge = mongoose.models.PackageMasterBadge || mongoose.model('PackageMasterBadge', packageMasterBadge)

export default PackageMasterBadge;