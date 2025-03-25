import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db';
import CarCrouselStatic from '@/models/car-package/CarHome/CarCrouselStatic';
import connectToDatabase from '@/utils/db';
const uploadDirectory = './uploads/CarHomeCrouselStatic';
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

  await connectToDatabase()
  if (req.method === 'POST'||req.method === 'PUT') {
    upload.single('file')(req, File, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }
      const { title,description,url } = req.body;
      const fileData = req.file && {
        title,
        description,
        url,
        filename:req.file.filename,
        path: `/api/uploads/CarHomeCrouselStatic/${req.file.filename}`,
      }
      try {
          const file = new CarCrouselStatic(fileData);
          await file.save();
          return res.status(200).json({ data: file });
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    const { id } = req.query;
    try {
      if(id){
        const files1 = await CarCrouselStatic.find({_id:id});
        return res.status(200).json({ data: files1 });
      }
      const files = await CarCrouselStatic.find({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    
    try {
      const file = await CarCrouselStatic.findById({_id:id});
      if (file) {
        // console.log("file image id by selected logo ",file);
        fs.unlinkSync(path.join(uploadDirectory, file.filename));
        await CarCrouselStatic.findByIdAndDelete({_id:id});
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
