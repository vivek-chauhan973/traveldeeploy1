import BlogDetail from "@/models/blog/BlogDetail";
import BlogQuestion from "@/models/blog/BlogQuestion";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const { questions, blog ,filename} = req.body;
    const { title, information } = questions;

    try {
      const data = await BlogQuestion.create({ title, information, blog ,filename});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await BlogDetail.findByIdAndUpdate(
        { _id: blog },
        { $push: { blogQuestions: data?._id } }
      );
      return res
        .status(201)
        .json({ message: "Question is successfully created", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
};

export default blogquestionApi;
