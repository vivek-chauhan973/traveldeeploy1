// models/package/PackageState.js
import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
    title: { type: String, required: true },
    information: { type: String, required: true }
});

const packageStateSchema = new mongoose.Schema({
    relatedId: { type: mongoose.Schema.Types.ObjectId, required: true },
    relatedTo: { type: String, required: true },
    title: { type: String }, // Add title field
    alt: { type: String }, // Add alt field
    image: { type: String }, // Add image field
    description: { type: String, required: true },
    faq: [faqSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const PackageState = mongoose.models.PackageState || mongoose.model('PackageState', packageStateSchema);

export default PackageState;
