import LocalDateGST from "@/models/car-package/CarLocationPricePopup/LocalDateGST";
import dbConnect from "@/utils/db";
const localdategst= async (req, res) => {
  await dbConnect();
  if (req.method === "POST") {
    try {
        const data=await LocalDateGST.findOne({});
        let resdata;
        if(!data){
            resdata=await LocalDateGST.create({localdatagst:req.body})
            if(!resdata){
                return res.status(304).json({message:"something went wrong on adding data"});
            }
            return res.status(201).json({message:"data is created successfully",resdata});
        }
        resdata=await LocalDateGST.findOneAndReplace({_id:data?._id},{localdatagst:req.body})
        if(!resdata){
            return res.status(304).json({message:"something went wrong on updating data"});
        }
        return res.status(200).json({message:"data is updated successfully",resdata});
    
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const departure = await LocalDateGST.findOne({});

      if (!departure) {
        return res.status(404).json({ message: "Departure not found" });
      }

      return res.status(200).json({data:departure});
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};
export default  localdategst
