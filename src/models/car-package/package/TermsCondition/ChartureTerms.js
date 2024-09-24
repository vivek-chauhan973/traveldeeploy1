import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const ChartureTermsSchema = new mongoose.Schema({
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

const CarChartureTerms = mongoose.models.CarChartureTerms || mongoose.model('CarChartureTerms', ChartureTermsSchema);

export default CarChartureTerms;
