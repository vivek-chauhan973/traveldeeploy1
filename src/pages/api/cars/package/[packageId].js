import CarPackageHighlight from "@/models/car-package/package/PackageHighlight";
import CarPackageDayWise from "@/models/car-package/package/PackageDayWise";
import CarPackageFaqWise from "@/models/car-package/package/PackageFaq";
import CarInclusion from "@/models/car-package/package/TourInfo/Inclusion";
import CarPackageDeparture from "@/models/car-package/package/PackageDeparture";
import Country from "@/models/Country";
import State from "@/models/State";
import CarPackage1 from "../../../../models/CarPackage";
// find By Id And Update
 const packageIds= async (req, res) => {
    try {
        const { packageId } = req.query;
        if (!packageId) {
            return res.status(400).json({ message: 'Package ID is required' });
        }
        let updatedPackage
        switch (req.method) {
            case 'PUT':
                const {priority,selectedVicle, name, price, status, location,category,badges ,startcity,uploads, selectedState,
                    selectedCountry,packageRating, highlightedPackage} = req.body;
                const startcity1=startcity.split(",");
                const images=uploads?.data?.map(item=>item?.path)
                updatedPackage = await CarPackage1.findByIdAndUpdate(packageId, {priority, name,selectedVicle, price, status, location,category,badges,startcity:startcity1,uploads:images,country:selectedCountry,state:selectedState,packageRating,highlightedPackage }, { new: true });
           
                if (!updatedPackage) {
                    return res.status(404).json({ message: 'Package not found' });
                }
                break;

            default:
                updatedPackage = await CarPackage1.findById(packageId).populate('location').populate('state').populate('country').populate('tourinfo.tourInclusion')
                .populate('tourinfo.tourExclusion')
                .populate('tourinfo.tourPayment').populate('tourinfo.tourCancelationPolicy')
                .populate('tourinfo.tourNeedToKonow').populate("icons").populate("selectedVicle");
                const associateState = await State.findById(updatedPackage.location?.state);
                const associateCountry = await Country.findById(associateState?.country);
                const highlightDetails = await CarPackageHighlight.findOne({ package: updatedPackage._id }, 'highlights');
                const dayDetails = await CarPackageDayWise.findOne({ package: updatedPackage._id }, 'days');
                const faqs = await CarPackageFaqWise.findOne({ package: updatedPackage._id }, 'days');
                const inclusionDetails = await CarInclusion.findOne({ package: updatedPackage._id });
                const priceDeparture = await CarPackageDeparture.findOne({ package: updatedPackage._id });
                //inclusion code is here
                // console.log("inclusion details show is here",updatedPackage)
                updatedPackage._doc.highlights = highlightDetails ? highlightDetails.highlights : [];
                updatedPackage._doc.days = dayDetails ? dayDetails.days : [];
                updatedPackage._doc.titles = faqs ;
                updatedPackage._doc.prices =priceDeparture;
                updatedPackage._doc.inclusion = inclusionDetails; //inclusion code is here
                updatedPackage._doc.associateState = associateState;
                updatedPackage._doc.associateCountry = associateCountry;
                break;
        }

        return res.status(200).json({ updatedPackage, method: req.method });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageIds