import Package from "@/models/Package";
import mongoose from "mongoose";

const packagePublicFilter = async (req, res) => {
    try {
        const { price, days, category } = req.query;
        const pipeline = [];

        // Price filter
        if (price) {
            const priceRange = price.split(',').map(Number);
            if (priceRange.length === 2) {
                pipeline.push({
                    $match: {
                        price: { $gte: priceRange[0], $lte: priceRange[1] }
                    }
                });
            } else {
                return res.status(400).json({ message: 'Invalid price range format' });
            }
        }

        // Days filter
        if (days) {
            const daysRange = days.split(',').map(Number);
            if (daysRange.length === 2) {
                pipeline.push({
                    $match: {
                        days: { $gte: daysRange[0], $lte: daysRange[1] }
                    }
                });
            } else {
                return res.status(400).json({ message: 'Invalid days range format' });
            }
        }

        // Category filter
        const addMatchCondition = (field, valueArray) => {
            if (valueArray?.length > 0 && valueArray?.[0] !== '') {
                pipeline.push({
                    $match: {
                        [field]: { $in: valueArray }
                    }
                });
            }
        };

        const categoryArray = category ? category.split(",").map(c => new mongoose.Types.ObjectId(c)) : [];
        addMatchCondition("category", categoryArray);

        // $lookup to populate icons (single ObjectId reference)
        pipeline.push({
            $lookup: {
                from: "selectedicons",        // The collection where the icons are stored
                localField: "icons",         // The field in 'Package' that holds the icon reference
                foreignField: "_id",         // The field in 'SelectedIcon' collection that corresponds to 'icons'
                as: "iconsPopulated"         // The alias for the populated field
            }
        });

        // Execute the aggregation pipeline
        const packages = await Package.aggregate(pipeline).exec();
        if (packages?.length === 0) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
};

export default packagePublicFilter;
