import City from "@/models/City";
import Package from "@/models/Package"; // Import your Category model
import connectToDatabase from "@/utils/db";
const packagePublicTour = async (req, res) => {
  await connectToDatabase()
  try {
    const { locationId } = req.query;
    let cities = [];
    if (locationId === "undefined") {
      cities = await City.find().limit(5).populate("state").exec();
    } else {
      cities = await City.find({ state: locationId }).populate("state").exec();
    }

    const cityIds = cities.map((city) => city._id);
    // Fetch packages and populate category details
    let packages = await Package.find({ location: { $in: cityIds } })
      .populate("category")
      .populate("icons") // Populate category details
      .exec();
    if (packages?.length === 0) {
      packages = await Package.find({ location: locationId });
      return res.status(200).json({ packages });
    }
    // console.log("packages is here -------> ",packages)
    return res.status(200).json({ packages, cities });
  } catch (error) {
    console.error("Error handling API request:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export default packagePublicTour;

// ihivgofjv

// import { NextApiRequest, NextApiResponse } from "next";
// import City from "@/models/City";
// import Package from "@/models/Package";

// const packagePublicTour = async (req, res) => {
//   try {
//     const { locationId } = req.query;

//     console.log('Location ID:', locationId);

//     if (!locationId || Array.isArray(locationId)) {
//       return res.status(400).json({ message: 'Valid Location ID is required' });
//     }

//     // Fetch cities based on locationId
//     const cities = await City.find({ state: locationId }).exec();
//     console.log('Fetched Cities:', cities);

//     if (cities.length === 0) {
//       return res.status(404).json({ message: 'No cities found for the given location ID' });
//     }

//     const cityIds = cities.map(city => city._id);
//     console.log('City IDs:', cityIds);

//     // Fetch top 5 packages sorted by price in descending order
//     const packages = await Package.find({ location: { $in: cityIds } })
//       .populate('category') // Populate category details
//       .sort({ price: -1 }) // Sort by price in descending order
//       .limit(5) // Limit to 5 results
//       .exec();

//     console.log('Fetched Packages:', packages);

//     return res.status(200).json({ packages, cities });
//   } catch (error) {
//     console.error('Error handling API request:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// export default packagePublicTour;
