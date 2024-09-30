import Country from "@/models/Country";
import Package from "@/models/Package"
import State from "@/models/State";
import PackageDayWise from "@/models/package/PackageDayWise";
import PackageDeparture from "@/models/package/PackageDeparture";
import PackageFaqWise from "@/models/package/PackageFaq";
import PackageHighlight from "@/models/package/PackageHighlight";
import PackagePrice from "@/models/package/PackagePrice";
import Inclusion from "@/models/package/TourInfo/Inclusion";//inclusion code is here
import SelectedIcon from "@/models/selectedIcon/SelectedIcon";
import { NextApiRequest, NextApiResponse } from "next";
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
                const {priority, name, price, status, location,category,badges ,startcity,uploads, selectedState,
                    selectedCountry,packageRating, highlightedPackage} = req.body;
                const startcity1=startcity.split(",");
                const images=uploads?.data?.map(item=>item?.path)
                // console.log("startcity 134346387453465347534",badges);
                updatedPackage = await Package.findByIdAndUpdate(packageId, {priority, name, price, status, location,category,badges,startcity:startcity1,uploads:images,country:selectedCountry,state:selectedState,packageRating,highlightedPackage }, { new: true });

                if (!updatedPackage) {
                    return res.status(404).json({ message: 'Package not found' });
                }
                break;

            default:
                updatedPackage = await Package.findById(packageId).populate('location').populate('state').populate('country').populate('tourinfo.tourInclusion')
                .populate('tourinfo.tourExclusion')
                .populate('tourinfo.tourPayment').populate('tourinfo.tourCancelationPolicy')
                .populate('tourinfo.tourNeedToKonow').populate("icons");
                const associateState = await State.findById(updatedPackage.location?.state);
                const associateCountry = await Country.findById(associateState?.country);
                const highlightDetails = await PackageHighlight.findOne({ package: updatedPackage._id }, 'highlights');
                const dayDetails = await PackageDayWise.findOne({ package: updatedPackage._id }, 'days');
                const faqs = await PackageFaqWise.findOne({ package: updatedPackage._id }, 'days');
                const priceDetails = await PackagePrice.findOne({ package: updatedPackage._id });
                const inclusionDetails = await Inclusion.findOne({ package: updatedPackage._id });
                const priceDeparture = await PackageDeparture.findOne({ package: updatedPackage._id });
                //inclusion code is here
                // console.log("inclusion details show is here",updatedPackage)
                updatedPackage._doc.highlights = highlightDetails ? highlightDetails.highlights : [];
                updatedPackage._doc.days = dayDetails ? dayDetails.days : [];
                updatedPackage._doc.titles = faqs ;
                updatedPackage._doc.prices = priceDetails||priceDeparture;
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