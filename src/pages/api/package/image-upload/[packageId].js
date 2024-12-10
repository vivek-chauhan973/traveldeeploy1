import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db'; // Adjust path as per your project structure
import PackageImage from '@/models/package/ImageUploading'; // Adjust path as per your project structure
import Package from '@/models/Package';


const uploadDirectory = './public/uploads/package/details'; // Updated upload directory

// Ensure upload directory exists
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
  await dbConnect(); // Ensure database connection

  const { packageId } = req.query;
  console.log("packageId74623873256374",packageId)

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === 'POST') {
    upload.array('files')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { titles, alts, ids } = req.body;

      try {
        const files = req.files.map((file, index) => ({
          title: titles[index] || '',
          alt: alts[index] || '',
          filename: file.filename,
          path: `/uploads/package/details/${file.filename}`,
        }));
        // console.log("filesfhbjfsfssjfhbasjh121312y3432y4",req.files);
        // Update or insert files into database
        await PackageImage.findOneAndUpdate(
          { packageId },
          { $set: { uploads: { $each: files } } },
          { upsert: true, new: true }
        );
        const imagesArray=files?.map(item=>item.path)
        // console.log()
        await Package.updateOne({_id:packageId},{
          $set:{uploads:imagesArray}
        },{
          new:true,
        })

        return res.status(200).json({ message: 'Files uploaded successfully' });
      } catch (error) {
        console.error('Error updating or saving files:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const packageImages = await PackageImage.find({ packageId });
      if (!packageImages || packageImages.length === 0) {
        return res.status(404).json({ error: 'No images found for the package' });
      }
      return res.status(200).json({ data: packageImages[0].uploads });
    } catch (error) {
      console.error('Error fetching images:', error);
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
    bodyParser: false, // Ensure to disable default bodyParser
  },
};