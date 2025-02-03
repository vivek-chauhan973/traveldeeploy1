import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMasterCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
},
    {
        timestamps: true,
    }
);

const PackageMasterCategory = mongoose.models.PackageMasterCategory || mongoose.model('PackageMasterCategory', packageMasterCategorySchema)

export default PackageMasterCategory;