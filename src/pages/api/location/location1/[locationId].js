import CarState from "@/models/CarState";

 const CarlocationIds= async (req, res) => {

    try {

        const {locationId } = req.query;
        if (!locationId) {
            return res.status(400).json({ message: 'Location ID is required' });
        }
        let updatedLocation
        switch (req.method) {
            case 'PUT':
                const { name, description } = req.body;
                updatedLocation = await CarState.findByIdAndUpdate(locationId, { name, description }, { new: true });

                if (!updatedLocation) {
                    return res.status(404).json({ message: 'Location not found' });
                }
                break;

            default:
                updatedLocation = await CarState.findById(locationId);
                break;
        }

        return res.status(200).json({ updatedLocation });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default CarlocationIds