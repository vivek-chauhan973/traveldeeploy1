import Package from "@/models/Package";
import FlightBooking from "@/models/package/FlightBooking";
import connectToDatabase from "@/utils/db";

const flightBookingApi = async (req, res) => {
  const { packageId } = req.query;

  if (!packageId) {
    return res.status(400).json({
      status: false,
      message: "Package Id is required!",
    });
  }

  if (req.method === "POST") {
    try {
       await connectToDatabase()
      const { flights} = req.body;

      const updatedData = await FlightBooking.findOneAndUpdate(
        { _id: packageId },
        {
          $set: {
            flights,
            package:packageId
          },
        },
        {
          upsert: true,
          new: true,
        }
      );
if(!updatedData){
    return res.status(300).json({
        status: false,
        message: "Something went wrong to create to  flight data",
      });

}

await Package.findOneAndUpdate({_id:packageId},{set:{flight:updatedData?._id}},{
    upsert: true,
    new: true,
  })
      return res.status(200).json({
        status: true,
        message: "Flight Data saved successfully",
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
      const booking = await FlightBooking.findById(packageId);

      if (!booking) {
        return res.status(404).json({
          status: false,
          message: "No flight data found",
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
