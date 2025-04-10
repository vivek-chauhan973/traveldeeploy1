import mongoose, { Schema } from "mongoose";
// Define flight schema
const flightSchema = new Schema({
    start: {
        to: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    end: {
        to: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    flightNo:{
        type:String,
        required:true
    },
    selectedImg:{
        type:String,
        required:true
    }
});

// Define flight booking schema
const flightBookingSchema = new Schema({
    flights: [flightSchema],
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package',
        required: [true,"Package Id is required !"]
    },
   
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

// Create and export flight booking model
const FlightBooking = mongoose.models.FlightBooking || mongoose.model('FlightBooking', flightBookingSchema);



export default FlightBooking;