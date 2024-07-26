import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const inclusionSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
},
{
    timestamps: true,
    toJSON: { virtuals: true }
});

const Inclusion = mongoose.models.Inclusion || mongoose.model('Inclusion', inclusionSchema);

export default Inclusion;
