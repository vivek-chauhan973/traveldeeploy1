import BlogDetail from "@/models/blog/BlogDetail";
import BlogQuestion from "@/models/blog/BlogQuestion";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const {questions,blog}=req.body;
    // console.log("req---------req.body---------------->   ",questions)
    // console.log("blog---------req.body---------------->   ",blog)

    
    try {
      const data1 = await BlogQuestion.findOne({blog});
      let data;
      
      if (!data1) {
        data = await BlogQuestion.create({questions,blog});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{blogQuestions:data?._id}});
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await BlogQuestion.findOneAndReplace({ blog }, {questions,blog});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{blogQuestions:data?._id}});
      // console.log("req---------req.body---------------->   ",data)
      
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
