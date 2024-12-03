import City from "@/models/City";
import Package from "@/models/Package";
import State from "@/models/State";
import mongoose from "mongoose";
const packagePublicFilter = async (req, res) => {
  try {
    const { id, price, days, category } = req.query;
    if (!id) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const citydata = await City.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    const statedata = await State.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    const pipeline = [];
    if (citydata) {
      if (id) {
        pipeline.push({
          $match: {
            location: new mongoose.Types.ObjectId(id),
          },
        });
      }
    } else if (statedata) {
      if (id) {
        pipeline.push({
          $match: {
            state: new mongoose.Types.ObjectId(id),
          },
        });
      }
    }
    else{
        return res.status(404).json({message:"not found packages"})
    }

    if (price) {
        const priceRange = price.split(',').map(Number);
        if (priceRange[0] !== 5000 || priceRange[1] !== 200000) {
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
    }
    if (days) {
        const daysRange = days.split(',').map(Number); // Assuming days is in format "min,max"
        if (daysRange[0] !== 1 || daysRange[1] !== 100) {
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
    }

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
    pipeline.push({
      $lookup: {
          from: "selectedicons",        // The collection where the icons are stored
          localField: "icons",         // The field in 'Package' that holds the icon reference
          foreignField: "_id",         // The field in 'SelectedIcon' collection that corresponds to 'icons'
          as: "iconsPopulated"         // The alias for the populated field
      }
  });

    const packages = await Package.aggregate(pipeline).exec();
    if(packages?.length===0){
        return res.status(404).json({message:"not found"});
    }
    return res.status(200).json({ packages });
  } catch (error) {
    console.error("Error handling API request:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default packagePublicFilter;
