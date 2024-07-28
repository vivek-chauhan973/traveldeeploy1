import mongoose, { Schema } from "mongoose"

const packagePriceSchema = new Schema({
    addguest:{
        type:String
    },
    singleRoom: {
        type: Number,
        required: true
    },
    twinSharingRoom: {
        type: Number,
        required: true
    },
    tripleSharingRoom: {
        type: Number,
        required: true
    },
    quadSharingRoom: {
        type: Number,
        required: true
    },
    infantSharingRoom: {
        type: Number,
        required: true
    },
    childUnderFive: {
        type: Number,
        required: true
    },
    childOverFive: {
        type: Number,
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true,
        unique: true
    }
}, {
    timestamps: true,
})

const PackagePrice = mongoose.models.PackagePrice || mongoose.model('PackagePrice', packagePriceSchema)

export default PackagePrice
