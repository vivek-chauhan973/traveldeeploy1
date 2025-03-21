import Car from "@/models/car-package/cars";
import connectToDatabase from "@/utils/db";
export default async function handler(req, res) {
  await connectToDatabase()
  if (req.method === 'GET') {
    try {
      const cars = await Car.find({});
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
