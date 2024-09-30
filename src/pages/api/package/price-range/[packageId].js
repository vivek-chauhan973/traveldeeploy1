// pages/api/pricerange/[packageId].js
import PriceRange from '@/models/package/PriceRange';

import { eachDayOfInterval, format } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const { packageId } = req.query;

  if (!packageId) {
    return res.status(400).json({ message: 'Package ID is required' });
  }

  if (req.method === 'POST') {
    const { startDate, endDate, basePrice, percentage } = req.body;

    if (!startDate || !endDate || !basePrice) {
      return res.status(400).json({ message: 'Start date, end date, and base price are required' });
    }

    try {
      let calculatedPrices = [];
      let days = eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) });
      let basePriceValue = parseFloat(basePrice);
      let percentageValue = parseFloat(percentage);

      days.forEach((day, index) => {
        let adjustedPrice = basePriceValue;
        if (percentage) {
          adjustedPrice = basePriceValue * (1 + (percentageValue / 100) * Math.floor(index / 3));
        }
        calculatedPrices.push({
          date: day,
          price: adjustedPrice,
          dayOfWeek: format(day, 'EEEE')
        });
      });

      const updatedPriceRange = await PriceRange.findOneAndUpdate(
        { packageId },
        {
          packageId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          basePrice: basePriceValue,
          percentage: percentageValue,
          prices: calculatedPrices
        },
        { upsert: true, new: true }
      );

      res.status(201).json(updatedPriceRange);
    } catch (error) {
      console.error('Error handling API request:', error);
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const priceRange = await PriceRange.findOne({ packageId });

      if (!priceRange) {
        return res.status(404).json({ message: 'Price range not found' });
      }

      res.status(200).json(priceRange);
    } catch (error) {
      console.error('Error handling API request:', error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
