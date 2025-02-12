import Package from "@/models/Package";
const searchApi = async (req, res) => {
  if (req.method === "GET") {
    try {
        const data=await Package.find().populate("seo");
        return res.status(200).json({ message: "ok",data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default searchApi;
