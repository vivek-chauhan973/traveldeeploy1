import Package from "@/models/Package";
import FlightBooking from "@/models/package/FlightBooking";
import connectToDatabase from "@/utils/db";

const flightBookingApi = async (req, res) => {
  await connectToDatabase(); // Ensure DB is connected

  const { packageId } = req.query;

  if (!packageId) {
    return res.status(400).json({
      status: false,
      message: "Package ID is required!",
    });
  }

  if (req.method === "POST") {
    try {
      const { flights } = req.body;

      if (!flights || !Array.isArray(flights)) {
        return res.status(400).json({
          status: false,
          message: "Flights data must be an array.",
        });
      }

      // Create or update flight booking
      const updatedData = await FlightBooking.findOneAndUpdate(
        { package: packageId },
        {
          $set: {
            flights,
            package: packageId,
          },
        },
        {
          upsert: true,
          new: true,
        }
      );

      // Update the Package model to reference the flight booking
      await Package.findByIdAndUpdate(packageId, {
        $set: { flight: updatedData._id },
      });

      return res.status(200).json({
        status: true,
        message: "Flight data saved successfully.",
        data: updatedData,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  if (req.method === "GET") {
    try {
      const booking = await FlightBooking.findOne({ package: packageId });

      if (!booking) {
        return res.status(404).json({
          status: false,
          message: "No flight data found.",
        });
      }

      return res.status(200).json({
        status: true,
        booking,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    status: false,
    message: "Method not allowed",
  });
};

export default flightBookingApi;
