import CarPackageState from '@/models/car-package/package/PackageState';
import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

const packagePublicPackageStateTest= async (req, res) => {
    try {
        const { locationId } = req.query;
        const packageStates = await CarPackageState.find({ state: locationId }).populate('state').exec();
        // console.log("packgeStates in test",packageStates)
        const packageStatesIds = packageStates.map(city => city._id);
        const packages = await Package.find({ location: { $in: packageStatesIds } })

        return res.status(200).json({ packages, packageStatesIds });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packagePublicPackageStateTest