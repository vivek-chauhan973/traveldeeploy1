import Review from "../../../models/Reviews"

const reviewsApi=async (req,res)=>{
    
    const {title, author, summary, sdate, rating}=req.body;
    const bool=false;
    if([title, author, summary, sdate, rating].find(item=>item===""||item===0)){
        return res.status(301).json({message:"each field is required",bool})
    }
    if(req.method==="POST"){
        try {
           const res=await Review.create({title, author, summary, sdate, rating});

           if(!res){
            return res.status(301).json({message:"something went wrong"});
           }
           return res.status(201).json({message:"review successfully created",res});
        } catch (error) {
            return res.status(501).json({message:"Internal server Error"});
        }
    }
    else{
        try {
            const res=await Review.find();
 
            if(!res){
             return res.status(404).json({message:"reviews not found"});
            }
            return res.status(200).json({message:"review successfully retrived",res});
         } catch (error) {
             return res.status(501).json({message:"Internal server Error"});
         }

    }

}