import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import BlogDetail from '@/models/blog/BlogDetail';
const uploadDirectory = './public/uploads/blogdetail';
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
const {post}=req.query;
  if (req.method === 'PUT') {
    upload.single('file')(req, File, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { title,description ,blogType,category,contentsummary} = req.body;
      // console.log("title --> ",title)
      // console.log("req.file.filename---->",req.file.filename)
      const fileData = req.file && {
        blogType,
        title,
        contentsummary,
        description,
        category,
        filename: req.file.filename,
        videoPath: `/uploads/blogdetail/${req.file.filename}`,
      }
      try {
        const existingFile = await BlogDetail.findOne({_id:post});
        if (existingFile) {
          const updatedFile = await BlogDetail.findOneAndUpdate(
            { _id: existingFile._id },
            { $set: fileData },
            { new: true }
          );
          const file = await BlogDetail.findById(existingFile._id);
          if(file){
            fs.unlinkSync(path.join(uploadDirectory, file.filename));
          }
          return res.status(200).json({ data: updatedFile });
        }
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const files = await BlogDetail.findOne({_id:post}).populate("blogSeo blogQuestions table");
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
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
