
import PackageState from '@/models/package/PackageState';
import connectToDatabase from '@/utils/db';


const handler = async (req, res) => {
    await connectToDatabase()
    const { id } = req.query;
    try {
        const packageState = await PackageState.findOne({ relatedId: id });
        if (!packageState) {
            return res.status(404).json({ success: false, message: 'Package state not found' });
        }
        res.status(200).json({ success: true, data: packageState });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
  
};

export default handler;
