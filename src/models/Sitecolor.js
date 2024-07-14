import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const siteColorSchema = new mongoose.Schema({

    button: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const SiteColor = mongoose.models.SiteColor || mongoose.model('SiteColor', siteColorSchema)

export default SiteColor;