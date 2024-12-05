import BlogDetail from "@/models/blog/BlogDetail"; 
const packageNavLink = async (req, res) => {
    try {
        const { blogType, location, id } = req.query;

        // Validate inputs
        if (!blogType) {
            return res.status(400).json({ message: 'Blog type is required' });
        }
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        if (!location) {
            return res.status(400).json({ message: 'Location is required' });
        }

        // Query to find blog posts with the specified blogType and location
        const blogPost = await BlogDetail.find({
            $and: [
                { blogType: blogType },
                { location: location }
            ]
        }).populate("blogSeo category writer table") 
        .populate({
            path: "blogQuestions", 
            populate: {
                path: "blogSubQuestion", 
            }
        });

        const blogPost1 = await BlogDetail.findOne({ _id: id }).populate("blogSeo category writer table") 
        .populate({
            path: "blogQuestions", 
            populate: {
                path: "blogSubQuestion", 
            }
        });;

        // Check if blog posts are found
        if (!blogPost || blogPost.length === 0) {
            return res.status(404).json({ error: 'No blog posts found for the given parameters' });
        }
        if (!blogPost1) {
            return res.status(404).json({ error: 'No blog post found for the given ID' });
        }

        // Filter out the blogPost1 from blogPost
        let filterBlogPost = blogPost?.filter(item => item?._id.toString() !== blogPost1?._id.toString());
        filterBlogPost.unshift(blogPost1);
        // Return the filtered blog posts
        return res.status(200).json({ data: filterBlogPost });

    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export default packageNavLink;
