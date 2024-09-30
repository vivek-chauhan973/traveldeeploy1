import mongoose, { Schema } from "mongoose";

// Connect to MongoDB (ensure this is done once in your application)
if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

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
    }
});

// Define flight booking schema
const flightBookingSchema = new Schema({
    flights: [flightSchema],
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    flightNo:{
        type:String,
        required:true
    },
    selectedImage:{
        type:String,
        required:true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

// Create and export flight booking model
const FlightBookingSchema = mongoose.models.FlightBooking || mongoose.model('FlightBooking', flightBookingSchema);



export default FlightBookingSchema;