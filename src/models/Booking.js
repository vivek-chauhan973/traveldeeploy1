import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const bookingSchema = new Schema({
    adult: {
        type: Number,
        required: true
    },
    child: {
        type: Number,
    },
    infant: {
        type: Number,
    },
    singleRoom: {
        type: Number,
    },
    twinRoom: {
        type: Number,
    },
    tripleRoom: {
        type: Number,
    },
    quardRoom: {
        type: Number,
    },
    packageDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
    },
    status: {
        type: Number,
        required: true
    }

}
,    {
        timestamps: true,
    }
);

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema )

export default Booking;



// you can send data in raw format in postman
// {
// "name": "John Doe",
// "number": 1234567890,
// "email": "john.doe@example.com",
// "address": "123 Main St, City",
// "start_date": "2024-03-01",
// "end_date": "2024-03-15",
// "code": 762877,
// "adult": 2,
// "child_dob": {
// "child_1": "2010-01-01",
// "child_2": "2012-05-15"
// },
// "singleRoom":2,
// "twinRoom":1,
// "tripleRoom":2,
// "quardRoom":3,
// "infant": 1,
// "total": 1500,
// "advance": 500
// }