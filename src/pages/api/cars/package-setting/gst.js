import CarGstRate from "@/models/CarGstRate";

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const gstList = await CarGstRate.find({});
            return res.status(200).json({ success: true, data: gstList });
        }

        if (req.method === 'POST') {
            const { action, gstId, gstRate } = req.body;

            if (action === 'add') {
                const gst = await CarGstRate.create({ gstRate });
                return res.status(201).json({ success: true, data: gst });
            }

            if (action === 'edit') {
                const updatedGst = await CarGstRate.findByIdAndUpdate(
                    gstId,
                    { gstRate },
                    { new: true }
                );
                return res.status(200).json({ success: true, data: updatedGst });
            }

            if (action === 'delete') {
                await CarGstRate.findByIdAndDelete(gstId);
                return res.status(200).json({ success: true, message: 'GST deleted successfully' });
            }

            return res.status(400).json({ success: false, message: 'Invalid action' });
        }

        return res.status(405).json({ success: false, message: 'Method not allowed' });
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }
}