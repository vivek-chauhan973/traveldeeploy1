import StaticPage from "@/models/Static/Static";
import path from "path";
import fs from "fs";

const uploadDirectory = "./public/uploads/images";

const staticPageApi = async (req, res) => {
  if (req.method === "POST") {
    const { topics, name ,contentSummary} = req.body;

    if (!name || !topics) {
      return res.status(400).json({ message: "'name' and 'topics' are required" });
    }

    try {
      const existingPage = await StaticPage.findOne({ name });
      let result;

      if (!existingPage) {
        // Create new page
        result = await StaticPage.create({ topics, name,contentSummary });
        return res.status(201).json({
          message: "Page created successfully",
          data: result,
        });
      }

      // Replace existing page
      result = await StaticPage.findOneAndReplace({ name }, { name, topics ,contentSummary});
      if (!result) {
        return res.status(500).json({ message: "Failed to update the page" });
      }

      return res.status(200).json({
        message: "Page updated successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error in POST:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } 
  else if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "'id' is required" });
    }

    try {
      const page = await StaticPage.findById(id);
      if (!page) {
        return res.status(404).json({ message: "Page not found" });
      }

      // Delete associated files
      const topics = page.topics || [];
      for (const topic of topics) {
        const filenames = topic?.filename || [];
        for (const filename of filenames) {
          const filePath = path.join(uploadDirectory, filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
      }

      // Delete the page from the database
      await StaticPage.findByIdAndDelete(id);

      return res.status(200).json({ message: "Page deleted successfully" });
    } catch (error) {
      console.error("Error in DELETE:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } 
  else if (req.method === "GET") {
    try {
      const data = await StaticPage.find({});
      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No pages found" });
      }

      return res.status(200).json({ message: "Pages retrieved successfully", data });
    } catch (error) {
      console.error("Error in GET:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } 
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default staticPageApi;
