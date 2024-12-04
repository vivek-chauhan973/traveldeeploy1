import BlogDetail from "@/models/blog/BlogDetail"; 

const packageNavLink = async (req, res) => {
    try {
        const { blogType, location } = req.query;

        // Check if blogType is provided
        if (!blogType) {
            return res.status(400).json({ message: 'Blog type is required' });
        }

        // Optional: Ensure location is provided, if it's required for your query
        if (!location) {
            return res.status(400).json({ message: 'Location is required' });
        }

        // Query to find blog posts with the specified blogType and location
        const blogPost = await BlogDetail.find({
            $and: [
                { blogType: blogType },
                { location: location }
            ]
        })
        .populate("blogSeo category writer table") 
        .populate({
            path: "blogQuestions", 
            populate: {
                path: "blogSubQuestion", 
            }
        });

        // If no blog posts are found
        if (!blogPost || blogPost.length === 0) {
            return res.status(404).json({ error: 'No blog posts found for the given parameters' });
        }

        // Return the blog posts if found
        return res.status(200).json({ data: blogPost });
        
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export default packageNavLink;
