import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarCountry",
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})


const CarState = mongoose.models.CarState || mongoose.model('CarState', stateSchema)

export default CarState;