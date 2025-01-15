import OTPModel from "@/models/Otp"; // Ensure this path is correct and OTPModel is properly defined
import connectToDatabase from "@/utils/db";


const googleApi = async (req, res) => {
   await connectToDatabase();
  if (req.method === "POST") {
    const { email, accessToken } = req.body;

    // Validate input
    if (!email || !accessToken) {
      return res.status(400).json({ message: "Email and accessToken are required." });
    }

    try {

      const data = await OTPModel.findOneAndUpdate(
        { email },
        { email, accessToken,isGoogleVerified:true }, 
        { upsert: true, new: true }
      );
      return res.status(200).json({
        success:true,
        message: "Successfully updated or created the record.",
        email, accessToken
      });
    } catch (error) {
      console.error("Error updating record:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
};

export default googleApi;
