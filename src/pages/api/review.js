// pages/api/review.js
import Review from "@/models/Review";

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const reviews = await Review.find({});
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews' });
    }
  } else if (req.method === 'POST') {
    try {
      const review = new Review(req.body);
      const result = await review.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error creating review' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    try {
      const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
      if (updatedReview) {
        res.status(200).json(updatedReview);
      } else {
        res.status(404).json({ message: 'Review not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating review' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      const deletedReview = await Review.findByIdAndDelete(id);
      if (deletedReview) {
        res.status(200).json({ message: 'Review deleted' });
      } else {
        res.status(404).json({ message: 'Review not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting review' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
