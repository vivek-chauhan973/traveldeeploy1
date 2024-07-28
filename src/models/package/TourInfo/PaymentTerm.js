import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const PaymentTermSchema = new mongoose.Schema({
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

const PaymentTerm = mongoose.models.PaymentTerm || mongoose.model('PaymentTerm', PaymentTermSchema);

export default PaymentTerm;
