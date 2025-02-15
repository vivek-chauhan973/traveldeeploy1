import Car from "@/models/car-package/cars";
import multer from 'multer';
import nextConnect from 'next-connect';

// Set up multer for file handling
const upload = multer({ dest: 'public/uploads/' });

const handler = nextConnect()
  .use(upload.array('images'))
  .post(async (req, res) => {
    try {
      // Create a car with image URLs
      const carData = req.body;
      const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

      // Add the image URLs to the carData
      carData.imageUrls = imageUrls;

      const car = await Car.create(carData);
      res.status(201).json({ success: true, data: car });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.query;
      const carData = req.body;
      const imageUrls = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

      // Update the car with new image URLs if provided
      if (imageUrls.length > 0) {
        carData.imageUrls = imageUrls;
      }

      const car = await Car.findByIdAndUpdate(id, carData, { new: true });
      if (!car) {
        return res.status(404).json({ success: false, error: "Car not found" });
      }
      res.status(200).json({ success: true, data: car });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  })
  .delete(async (req, res) => {
    try{
      const { id } = req.query;
      const car = await Car.findByIdAndDelete(id);
      if (!car) {
        return res.status(404).json({ success: false, error: "Car not found" });
      }
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  })
export default handler;
