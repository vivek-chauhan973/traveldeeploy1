import BlogDetail from "@/models/blog/BlogDetail";
import mongoose from "mongoose";
const blogFilter = async (req, res) => {
    try {
        const { selectType, category } = req.query;
        if (!selectType) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const pipeline = [];
        if (selectType) {
            pipeline.push({
                $match: {
                    blogType: selectType, 
                }
            });
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
        const packages = await BlogDetail.aggregate(pipeline).exec();
        if(packages?.length===0){
            return res.status(404).json({message:"not found"});
        }
        return res.status(200).json({data: packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
};

export default blogFilter;
