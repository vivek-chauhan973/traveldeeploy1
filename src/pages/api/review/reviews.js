import Review from "../../../models/Reviews";
import mongoose from "mongoose";
// mongoose.connect(process.env.MONGODB_URI).then(res=>console.log("mondb connected suucessfully"));
const reviewsApi = async (req, res) => {
  const { title, author, summary, sdate, rating } = req.body;
  console.log(req.body);
  const bool = true;
  if (
    [title, author, summary, sdate, rating].some(
      (item) => item === "" || item === 0
    )
  ) {
    return res.status(301).json({ message: "each field is required", bool });
  }
  if (req.method === "POST") {
    try {
      const res1 = await Review.create({
        author,
        rating,
        sdate,
        summary,
        title,
      });

      if (!res1) {
        return res.status(301).json({ message: "something went wrong" });
      }
      return res
        .status(201)
        .json({ message: "review successfully created", res1 });
    } catch (error) {
      return res.status(501).json({ message: "Internal server Error", error });
    }
  } else {
    try {
      const res1 = await Review.find({});
      if (!res1) {
        return res.status(404).json({ message: "reviews not found" });
      }
      return res
        .status(200)
        .json({ message: "review successfully retrived", res1 });
    } catch (error) {
      return res.status(501).json({ message: "Internal server Error" });
    }
  }
}

export default reviewsApi


