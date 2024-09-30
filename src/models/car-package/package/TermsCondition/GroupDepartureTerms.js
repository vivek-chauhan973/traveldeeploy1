import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const GroupDepartureTermsSchema = new mongoose.Schema({
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

const CarGroupDepartureTerms = mongoose.models.CarGroupDepartureTerms || mongoose.model('CarGroupDepartureTerms', GroupDepartureTermsSchema);

export default CarGroupDepartureTerms;
