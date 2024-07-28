import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, { timestamps: true })

const Country = mongoose.models.Country || mongoose.model('Country', countrySchema)

export default Country;