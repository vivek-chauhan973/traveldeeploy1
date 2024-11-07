import mongoose from "mongoose";
import CarPackage1 from "@/models/CarPackage";

const packagePublicFilter = async (req, res) => {
    const { price, locationId, days, category } = req.query;

    // Initialize the filter object
    const filter = {};

    // Add `locationId` filter if it’s provided
    const days1=days.split(",")
    const price1=price.split(",")
    const category1 = category 
    ? category.split(",").map(id =>new mongoose.Types.ObjectId(id))
    : null;

    console.log("days is here as -------> ",days1)
    console.log("price1 is here as -------> ",Number(price1?.[0]))

    console.log("category1 is here as -------> ",category1?.length)

    

    try {
        let data = await CarPackage1.find({location:locationId});
        if(Number(price1?.[0])>0 && category1?.length>0){
            data=await CarPackage1.find({$and:[{location:locationId},{category:{$in:category1}}]});
        }
        if(Number(price1?.[0])>0 && Number(price1?.[1])>0){
            data=await CarPackage1.find({$and:[{location:locationId},{price:{$gte:Number(price1?.[0]),$lte:Number(price1?.[1])}}]});
        }
        if(Number(days1?.[0])>0 && Number(days1?.[1])>0){
            data=await CarPackage1.find({$and:[{location:locationId},{days:{$gte:Number(days1?.[0]),$lte:Number(days1?.[1])}}]});
        }
        if(Number(price1?.[0])>0 && Number(price1?.[1])>0 &&Number(days1?.[0])>0 && Number(days1?.[1])>0 && category1?.length>0){
            data=await CarPackage1.find({$and:[{location:locationId},{days:{$gte:Number(price1?.[0]),$lte:Number(price1?.[1])}},{days:{$gte:Number(days1?.[0]),$lte:Number(days1?.[1])}},{category:{$in:category1}}]});
        }
        return res.status(200).json({ message: "everything is ok", data });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
};

export default packagePublicFilter;
