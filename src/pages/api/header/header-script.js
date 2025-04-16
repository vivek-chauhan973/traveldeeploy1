import HeaderScript from "@/models/Header/HeaderScript";
import connectToDatabase from "@/utils/db";

const headerScriptApi = async (req, res) => {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const { headertitle, headercode } = req.body;
console.log(headertitle)
      if (!headertitle || !headercode) {
        return res.status(400).json({
          status: false,
          message: "Both 'headertitle' and 'headercode' are required",
        });
      }

      const newScript = await HeaderScript.create({ headertitle, headercode });

      return res.status(201).json({
        status: true,
        message: "Script successfully added",
        data: newScript,
      });
    } catch (error) {
      console.error("Error creating header script:", error);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  else if (req.method === "GET") {
    try {
      const scripts = await HeaderScript.find({});

      if (scripts.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No scripts found",
        });
      }

      return res.status(200).json({
        status: true,
        message: "Scripts retrieved successfully",
        data: scripts,
      });
    } catch (error) {
      console.error("Error fetching header scripts:", error);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({
      status: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
};

export default headerScriptApi;
