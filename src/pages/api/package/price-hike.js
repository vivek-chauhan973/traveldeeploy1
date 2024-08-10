// pages/api/applyPriceHike.js
import PriceHike from '@/models/package/PriceHike';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { startDate, endDate, priceIncrease, isActive, packageId } = req.body;

    if (!packageId) {
      return res.status(400).json({ error: 'Package ID is required' });
    }

    try {
      // Save or update the price hike in the database
      const existingHike = await PriceHike.findOne({ packageId, startDate, endDate });

      if (existingHike) {
        // Update existing price hike
        existingHike.priceIncrease = priceIncrease;
        existingHike.isActive = isActive;
        await existingHike.save();
      } else {
        // Create new price hike
        await PriceHike.create({ packageId, startDate, endDate, priceIncrease, isActive });
      }

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to apply price hike' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
