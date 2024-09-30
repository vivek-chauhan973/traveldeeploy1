import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const cancellationSchema = new mongoose.Schema({
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

const Cancellation = mongoose.models.Cancellation || mongoose.model('Cancellation', cancellationSchema);

export default Cancellation;
