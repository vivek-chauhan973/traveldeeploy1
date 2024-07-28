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
        ref: "State",
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
 


const City = mongoose.models.City || mongoose.model('City', citySchema)

export default City;