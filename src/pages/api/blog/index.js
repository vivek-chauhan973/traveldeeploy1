import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import BlogPromoBanner from '@/models/blog/BlogPromoBanner';

// Set up the upload directory
const uploadDirectory = './public/uploads/blogpromo';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// API route handler
const apiRoute = async (req, res) => {
  await dbConnect();

  if (req.method === 'POST') {
    // Use multer middleware to handle the file upload
    upload.single('file')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      // Check if the file exists and extract form data
      const { title, description, selectType } = req.body;
      if (!selectType || !title || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const fileData = req.file ? {
        selectType,
        title,
        description,
        filename: req.file.filename,
        videoPath: `/uploads/blogpromo/${req.file.filename}`,
      } : null;

      if (fileData) {
        try {
          const existingFile = await BlogPromoBanner.findOne({ selectType });

          if (existingFile) {
            // Update existing file
            const updatedFile = await BlogPromoBanner.findOneAndUpdate(
              { _id: existingFile._id },
              { $set: fileData },
              { new: true }
            );

            // Remove the old file if it exists
            if (existingFile.filename) {
              fs.unlinkSync(path.join(uploadDirectory, existingFile.filename));
            }

            return res.status(200).json({ data: updatedFile });
          } else {
            // Create a new entry if no existing file is found
            const file = new BlogPromoBanner(fileData);
            await file.save();
            return res.status(200).json({ data: file });
          }
        } catch (error) {
          console.error('Error updating or saving file:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        return res.status(400).json({ error: 'File upload failed' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const { selectType } = req.query;
      if (!selectType) {
        return res.status(400).json({ error: 'Missing selectType' });
      }

      const files = await BlogPromoBanner.findOne({ selectType }).populate("seo");
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable body parser for multer to handle the file
  },
};
