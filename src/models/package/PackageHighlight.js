import mongoose, { Schema } from "mongoose"

const packageHighlightSchema = new Schema({
    highlights: {
        type: [],
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    }
}, {
    timestamps: true,
})

const PackageHighlight = mongoose.models.PackageHighlight || mongoose.model('PackageHighlight', packageHighlightSchema)

export default PackageHighlight