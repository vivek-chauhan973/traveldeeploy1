import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarState",
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
}, { timestamps: true })
 


const CarCity = mongoose.models.CarCity || mongoose.model('CarCity', citySchema)

export default CarCity;