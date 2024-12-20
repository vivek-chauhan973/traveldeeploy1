import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import CarBanner from '@/models/car-package/CarHome/CarBanner';

const uploadDirectory = './public/uploads/carbanner';
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
    upload.single('file')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { title } = req.body;
      const fileData = req.file && {
        title,
        filename: req.file.filename,
        path: `/uploads/carbanner/${req.file.filename}`,
      };

      try {
        const existingFile = await CarBanner.findOne({});
        if (existingFile) {
          // Delete old file from directory
          if (existingFile.filename) {
            const oldFilePath = path.join(uploadDirectory, existingFile.filename);
            if (fs.existsSync(oldFilePath)) {
              fs.unlinkSync(oldFilePath);
            }
          }

          // Update the database entry
          const updatedFile = await CarBanner.findOneAndUpdate(
            { _id: existingFile._id },
            { $set: fileData },
            { new: true }
          );

          return res.status(200).json({ data: updatedFile });
        } else {
          // Create a new entry
          const file = new CarBanner(fileData);
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
      const files = await CarBanner.find({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const file = await CarBanner.findById(id);
      if (file) {
        const filePath = path.join(uploadDirectory, file.filename);

        // Delete the file from the directory
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }

        // Remove from the database
        await CarBanner.findByIdAndDelete(id);

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
