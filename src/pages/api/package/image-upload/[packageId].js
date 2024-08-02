import formidable from 'formidable';
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

const apiRoute = async (req, res) => {
  await dbConnect(); // Ensure database connection

  const { packageId } = req.query;

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: uploadDirectory,
      keepExtensions: true, // Keep file extensions
      filename: (name, ext, path) => `${name}-${Date.now()}${ext}`,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Formidable error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { titles = [], alts = [] } = fields;
      const uploadedFiles = Array.isArray(files.files) ? files.files : [files.files];

      try {
        const filesData = uploadedFiles.map((file, index) => ({
          title: titles[index] || '',
          alt: alts[index] || '',
          filename: path.basename(file.filepath),
          path: `/uploads/package/details/${path.basename(file.filepath)}`,
        }));

        // Update or insert files into database
        await PackageImage.findOneAndUpdate(
          { packageId },
          { $push: { uploads: { $each: filesData } } },
          { upsert: true, new: true }
        );

        const imagesArray = filesData.map(item => item.path);

        await Package.updateOne(
          { _id: packageId },
          { $set: { uploads: imagesArray } },
          { new: true }
        );

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
