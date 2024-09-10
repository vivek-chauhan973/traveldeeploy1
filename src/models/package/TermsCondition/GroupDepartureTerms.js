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

const GroupDepartureTerms = mongoose.models.GroupDepartureTerms || mongoose.model('GroupDepartureTerms', GroupDepartureTermsSchema);

export default GroupDepartureTerms;
