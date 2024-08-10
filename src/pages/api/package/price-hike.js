import PriceHike from '@/models/package/PriceHike';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { priceHikeData, packageId, isActive } = req.body;

    if (!packageId || !priceHikeData || !Array.isArray(priceHikeData)) {
      return res.status(400).json({ error: 'Invalid request payload' });
    }

    try {
      const now = new Date();
      const endDate = new Date(now);
      endDate.setMonth(now.getMonth() + 2);

      // Clear existing price hikes for the package within the date range
      await PriceHike.deleteMany({
        packageId,
        date: { $gte: now, $lte: endDate }
      });

      // Insert new price hikes
      const priceHikesToInsert = priceHikeData.map(hike => ({
        packageId,
        date: new Date(hike.date),
        priceIncrease: hike.price,
        isActive
      }));

      await PriceHike.insertMany(priceHikesToInsert);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error applying price hike:', error);
      res.status(500).json({ error: 'Failed to apply price hike' });
    }
  } else if (req.method === 'GET') {
    const { packageId, startDate, endDate } = req.query;

    if (!packageId) {
      return res.status(400).json({ error: 'Package ID is required' });
    }

    try {
      const priceHikes = await PriceHike.find({
        packageId,
        date: { $gte: new Date(startDate), $lte: new Date(endDate) }
      }).exec();

      res.status(200).json({ priceHikes });
    } catch (error) {
      console.error('Error fetching price hikes:', error);
      res.status(500).json({ error: 'Failed to fetch price hikes' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
