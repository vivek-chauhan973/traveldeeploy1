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

const Outstation = mongoose.models.Outstation || mongoose.model('Outstation', GroupDepartureTermsSchema);

export default Outstation;
