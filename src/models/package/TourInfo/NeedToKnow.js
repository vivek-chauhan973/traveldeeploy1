import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const needToKnowSchema = new mongoose.Schema({
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

const NeedToKnow = mongoose.models.NeedToKnow || mongoose.model('NeedToKnow', needToKnowSchema);

export default NeedToKnow;
