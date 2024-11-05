import BlogDetail from "@/models/blog/BlogDetail";
import BlogQuestion from "@/models/blog/BlogQuestion";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data1 = await BlogQuestion.findOne({});
      let data;
      
      if (!data1) {
        data = await BlogQuestion.create({questions:req?.body});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await BlogQuestion.findOneAndReplace({ _id: data1._id }, {questions:req?.body});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      console.log("req---------req.body---------------->   ",data)
      
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    try {
      const data = await BlogQuestion.find({});
      if (!data) {
        return res.status(400).json({ message: "data is not found" });
      }
      return res
        .status(200)
        .json({ message: "Question is successfully found", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
};

export default blogquestionApi;
