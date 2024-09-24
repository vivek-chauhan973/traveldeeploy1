import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const itineraryFaqHeading = new mongoose.Schema({
    faqheading: {
        type: String,
        required: true
    }, 
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const CarItineraryFaqHeading = mongoose.models.CarItineraryFaqHeading || mongoose.model('CarItineraryFaqHeading', itineraryFaqHeading)

export default CarItineraryFaqHeading;