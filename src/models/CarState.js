import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarCountry",
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
stateSchema.virtual('PackageStates', {
    ref: 'PackageState',
    localField: '_id',
    foreignField: 'relatedId',
    justOne: false,
    options: { sort: { createdAt: -1 } },
  });
  

stateSchema.virtual('pageUrl').get(function () {
    return `${this.url}-Car-packages`;
});

stateSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update.name) {
        update.url = update.name.toLowerCase().replace(/\s+/g, '-');
    }
    next();
});

const CarState = mongoose.models.CarState || mongoose.model('CarState', stateSchema)

export default CarState;