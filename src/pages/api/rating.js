import Rating from '@/models/Rating';  // Adjust the path as needed

export default async function handler(req, res) {
  // Connect to the database

  if (req.method === 'GET') {
    try {
      const data = await Rating.findOne(); // Use the Rating model
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: 'No data found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else if (req.method === 'POST') {
    try {
      const body = req.body;
      // Upsert: Update if exists, otherwise insert
      const data = await Rating.updateOne({}, { $set: body }, { upsert: true });
      res.status(200).json({ message: 'Data saved successfully', data});
    } catch (error) {
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
