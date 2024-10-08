// Import necessary modules and models
import CarSeoData from '@/models/car-package/package/PackageSeo';
import dbConnect from '@/utils/db';

import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  await dbConnect();

  const { packageId } = req.query;

  if (!packageId) {
    return res.status(400).json({ message: 'Package ID is required' });
  }

  if (req.method === 'POST') {
    const { title, description, canonicalUrl, priceValid } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
      // Check if SEO data already exists for the packageId
      let seoData = await CarSeoData.findOne({ package: packageId });

      if (!seoData) {
        // If SEO data doesn't exist, create new
        seoData = new CarSeoData({
          title,
          description,
          canonicalUrl: canonicalUrl || `https://example.com/${title.replace(/\s+/g, '-').toLowerCase()}`,
          package: packageId,
          priceValid
        });
      } else {
        // Update existing SEO data
        seoData.title = title;
        seoData.description = description;
        seoData.canonicalUrl = canonicalUrl || `https://example.com/${title.replace(/\s+/g, '-').toLowerCase()}`;
        seoData.priceValid = priceValid;
      }

      // Save SEO data
      await seoData.save();

      return res.status(201).json(seoData);
    } catch (error) {
      console.error('Error saving/updating SEO data:', error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch SEO data for the packageId
      const seoData = await CarSeoData.findOne({ package: packageId });

      if (!seoData) {
        return res.status(404).json({ message: 'SEO data not found' });
      }

      return res.status(200).json(seoData);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}