// Import necessary modules and models
import Package from '@/models/Package';
import SeoData from '@/models/package/PackageSeo';
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
    const { title, description, canonicalUrl, priceValid, keyword} = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
      // Check if SEO data already exists for the packageId
      let seoData = await SeoData.findOne({ package: packageId });

      if (!seoData) {
        // If SEO data doesn't exist, create new
        seoData = new SeoData({
          title,
          description,
          canonicalUrl: canonicalUrl || `https://example.com/${title.replace(/\s+/g, '-').toLowerCase()}`,
          package: packageId,
          priceValid,
          keyword
        });
      } else {
        // Update existing SEO data
        seoData.title = title;
        seoData.description = description;
        seoData.canonicalUrl = canonicalUrl || `https://example.com/${title.replace(/\s+/g, '-').toLowerCase()}`;
        seoData.priceValid = priceValid;
        seoData.keyword = keyword;
      }

      // Save SEO data
      await seoData.save();
      if(seoData){
        await Package.findOneAndUpdate({_id:packageId},{$set:{seo:seoData?._id}});
      }

      return res.status(201).json(seoData);
    } catch (error) {
      console.error('Error saving/updating SEO data:', error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch SEO data for the packageId
      const seoData = await SeoData.findOne({ package: packageId });

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
