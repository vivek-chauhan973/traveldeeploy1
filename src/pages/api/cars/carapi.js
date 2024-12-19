import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Car from '@/models/car-package/cars'; // Adjust the path as needed

const uploadDirectory = path.join(process.cwd(), 'public/uploads/cars');

// Ensure the upload directory exists
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

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing for file uploads
  },
};

export default async function handler(req, res) {
  
  switch (req.method) {
    case 'POST':
      return handlePost(req, res);
    case 'PUT':
      return handlePut(req, res);
    case 'DELETE':
      return handleDelete(req, res);
    case 'GET':
      return handleGetAll(req, res);
    default:
      res.setHeader('Allow', ['POST', 'PUT', 'DELETE', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function handlePost(req, res) {
  // console.log("req body --------------------->",req?.body)
  upload.array('images')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error uploading files' });
    }
    try {
      const { misc, capacity,bags,locationrate, ac, seatingCapacity, vehicleType, dailyLimit, rate, outStationBasePrice, perKmRate, markup, imageDetails } = req.body;
      

      // Process image details
      const processedImageDetails = imageDetails.map((img, index) => ({
        url: req.files[index] ? `/uploads/cars/${req.files[index].filename}` : img.url,
        title: img.title,
        alt: img.alt
      }));

      const car = await Car.create({ 
        misc, 
        capacity, 
        ac,
        bags, 
        locationrate,
        seatingCapacity, 
        vehicleType, 
        dailyLimit, 
        rate, 
        outStationBasePrice, 
        perKmRate, 
        markup, 
        imageDetails: processedImageDetails 
      });

      res.status(201).json({ success: true, data: car });
    } catch (error) {
      console.error('Error creating car:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
}

function handlePut(req, res) {
  upload.array('images')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error uploading files' });
    }
    try {
      const { id } = req.query;
      const { name, capacity,bags, ac,locationrate, seatingCapacity, vehicleType, dailyLimit, rate, outStationBasePrice, perKmRate, markup, imageDetails } = req.body;
      // Process image details
      const processedImageDetails = imageDetails.map((img, index) => ({
        url: req.files[index] ? `/uploads/cars/${req.files[index].filename}` : img.url,
        title: img.title,
        alt: img.alt
      }));

      

      const car = await Car.findByIdAndUpdate(id, {
        name,
        capacity,
        ac,
        bags,
        locationrate,
        seatingCapacity,
        vehicleType,
        dailyLimit,
        rate,
        outStationBasePrice,
        perKmRate,
        markup,
        imageDetails: processedImageDetails
      }, { new: true });

      if (!car) {
        return res.status(404).json({ success: false, error: 'Car not found' });
      }

      res.status(200).json({ success: true, data: car });
    } catch (error) {
      console.error('Error updating car:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
}

async function handleDelete(req, res) {
  try {
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ success: false, error: 'Car ID is required' });
    }

    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.status(200).json({ success: true, data: car });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

async function handleGetAll(req, res) {
  try {
    const cars = await Car.find();
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
