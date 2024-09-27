import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMasterCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
);

const CarPackageMasterCategory = mongoose.models.CarPackageMasterCategory || mongoose.model('CarPackageMasterCategory', packageMasterCategorySchema)

export default CarPackageMasterCategory;