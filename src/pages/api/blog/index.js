import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import Banner from '@/models/Home/Bannner';
import BlogPromoBanner from '@/models/blog/BlogPromoBanner';
const uploadDirectory = './public/uploads/blogpromo';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const apiRoute = async (req, res) => {
  await dbConnect();

  if (req.method === 'POST') {
    upload.single('file')(req, File, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { title,description } = req.body;
      // console.log("title --> ",title)
      // console.log("req.file.filename---->",req.file.filename)
      const fileData = req.file && {
        title,
        description,
        filename: req.file.filename,
        videoPath: `/uploads/blogpromo/${req.file.filename}`,
      }
      try {
        const existingFile = await BlogPromoBanner.findOne({});
        if (existingFile) {
          const updatedFile = await BlogPromoBanner.findOneAndUpdate(
            { _id: existingFile._id },
            { $set: fileData },
            { new: true }
          );
          const file = await BlogPromoBanner.findById(existingFile._id);
          if(file){
            fs.unlinkSync(path.join(uploadDirectory, file.filename));
          }
          return res.status(200).json({ data: updatedFile });
        } else {
          const file = new BlogPromoBanner(fileData);
          await file.save();
          return res.status(200).json({ data: file });
        }
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const files = await BlogPromoBanner.findOne({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    console.log("file image id by selected logo ",path.join(uploadDirectory));
    try {
      const file = await BlogPromoBanner.findById(id);
      if (file) {
        fs.unlinkSync(path.join(uploadDirectory, file.filename));
        await BlogPromoBanner.findByIdAndDelete(id);
        return res.status(200).json({ message: 'File removed successfully' });
      } else {
        return res.status(404).json({ error: 'File not found' });
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
