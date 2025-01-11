import OTPModel from "@/models/Otp"; // Ensure this path is correct and OTPModel is properly defined
const googleApi = async (req, res) => {
  if (req.method === "POST") {
    const { email, accessToken } = req.body;

    // Validate input
    if (!email || !accessToken) {
      return res.status(400).json({ message: "Email and accessToken are required." });
    }

    try {
      console.log("Request body:", req.body);

      // Find and update or insert the document
      const data = await OTPModel.findOneAndUpdate(
        { email }, // Query to find the document
        { email, accessToken,isGoogleVerified:true }, // Data to update
        { upsert: true, new: true } // Options
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
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
};

export default googleApi;
