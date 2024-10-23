import CarPackageDayWise from "@/models/car-package/package/PackageDayWise";
import CarPackageDeparture from "@/models/car-package/package/PackageDeparture";
import CarPackageFaqWise from "@/models/car-package/package/PackageFaq";
import CarPackageHighlight from "@/models/car-package/package/PackageHighlight";
import CarPackageMap from "@/models/car-package/package/PackageMap";
import CarSeoData from "@/models/car-package/package/PackageSeo";
import CarTourInformation from "@/models/car-package/package/TourInformation";
import CarPackage1 from "@/models/CarPackage";

const packagePublicPackageUrl = async (req, res) => {
  const { method, query } = req;
  const newPackageUrl = query?.packageUrl.replace("-tour-package", " ");
// console.log("newPackageURL======. >>>   ",newPackageUrl);

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${method} not allowed` });
  }

  try {
    const packageDetails = await CarPackage1.findOne({ url: newPackageUrl })
      .populate("location country state category priceHike fixedDeparturePrices")
      .populate('tourinfo.tourInclusion')
      .populate('tourinfo.tourExclusion')
      .populate('tourinfo.tourPayment') 
      .populate('tourinfo.tourCancelationPolicy')
      .populate('tourinfo.tourNeedToKonow').populate("icons").populate("selectedVicle");

    if (!packageDetails) {
      return res.status(404).json({ message: 'Package not found.' });
    }

    const highlightDetails = await CarPackageHighlight.findOne({ package: packageDetails?._id }, 'highlights');
    const dayDetails = await CarPackageDayWise.findOne({ package: packageDetails?._id }, 'days');
    const faqs = await CarPackageFaqWise.findOne({ package: packageDetails?._id }, 'days');
    const map = await CarPackageMap.findOne({ package: packageDetails?._id });
    const seoDataDetails = await CarSeoData.findOne({ package: packageDetails?._id });
    const packageDepartures = await CarPackageDeparture.findOne({ package: packageDetails?._id });
    const packageTourInformations = await CarTourInformation.findOne({ package: packageDetails?._id });

    packageDetails._doc.highlights = highlightDetails ? highlightDetails?.highlights : [];
    packageDetails._doc.days = dayDetails ? dayDetails?.days : [];
    packageDetails._doc.map = map;
    packageDetails._doc.faqs = faqs;
    packageDetails._doc.prices = packageDepartures;
    packageDetails._doc.seoData = seoDataDetails;
    packageDetails._doc.TourInformations = packageTourInformations;

    return res.status(200).json(packageDetails);
  } catch (error) {
    console.error('Error handling GET request:', error);
    return res.status(500).json({ message: error.message });
  }
};

export default packagePublicPackageUrl;
