import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const websiteSchema = new mongoose.Schema({

    schemaName: {
        type: String,
        required: true
    },
    schemaCode: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

const websiteSchemaModel = mongoose.models.WebsiteSchema || mongoose.model('WebsiteSchema', websiteSchema)

export default websiteSchemaModel;