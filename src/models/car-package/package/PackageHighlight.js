import mongoose, { Schema } from "mongoose"

const packageHighlightSchema = new Schema({
    highlights: {
        type: [],
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarPackage1',
        required: true
    }
}, {
    timestamps: true,
})

const CarPackageHighlight = mongoose.models.CarPackageHighlight || mongoose.model('CarPackageHighlight', packageHighlightSchema)

export default CarPackageHighlight