import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import '../../app/globals.css';
import SearchPageFilter from '@/components/SearchPageFilter';
import SearchPagePackageList from '@/components/SearchPagePackageList';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomLink from '@/components/ItineraryDetail/BottomLink';
import { PromoBanner, PromoFilter, PromoList, PromoLink } from '@/components/Skeleton/Package/promo';
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';
import Faq1 from '@/components/Faq/Faq1';
import mongoose from 'mongoose';
const fetchPromoManagementData = async () => {
  const objectId =new mongoose.Types.ObjectId("64db5b8f60a6a2145f56e39d");
  const response = await fetch(`/api/public/package-state/spacialitypromo?id=${objectId}`);
  const data = await response.json();
  return data;
};

const fetchAllPackages=async ()=>{
  const res=await fetch("/api/findAllPackages");
   return await res.json();
}
export default function India() {
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 100 });
  const [promoData, setPromoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [maxDay, setMaxDay] = useState(50);
  const [minDay, setMinDay] = useState(1);
  const [tourDuration, setTourDuration] = useState([20, 36]);
  const [clearAll, setClearAll] = useState(false);
  const [priorityPackage, setPriorityPackage] = useState([]);
  const [packages,setPackages]=useState([]);
  const objectId =new mongoose.Types.ObjectId("64db5b8f60a6a2145f56e39d");
const selectedLocation={};
selectedLocation._id=objectId;
  useEffect(() => {
    setTourDuration([minDay, maxDay]);
  }, [maxDay, minDay]);

  useEffect(() => {
      fetchPromoManagementData().then(res => setPromoData(res?.data || {}));
  }, []);
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`/api/public/priority`);
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPriorityPackage(data?.packages);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
      fetchPackages();
    
  }, []);

  useEffect(()=>{
    fetchAllPackages().then(res=>{console.log("res----> ",res?.packages);setPackages(res?.packages||[])});
  },[promoData])

  const handleApplyFilter = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
useEffect(()=>{
  setLoading(false)
},[promoData])
  if (loading) {
    return <PromoBanner />;
  }
// console.log("packages is here --> ",packages)
console.log("router---> ",promoData)

  return (
    <AppProvider>
      <div className='bg-slate-100'>
        <DesktopHeader />
        <Breadcrumbs/>
        <SearchPageTopSeoContent state={selectedLocation} promoData={promoData} priorityPackage={priorityPackage} />
        <SearchHeaderWpr />
        <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
          <div className='relative'>
            <div className='hidden xl:block'>
              <SearchPageFilter onApplyFilter={handleApplyFilter} setTourDuration={setTourDuration} tourDuration={tourDuration} setMaxDay={setMaxDay} setMinDay={setMinDay} setClearAll={setClearAll} />
            </div>
          </div>
          <div>
            <div>
              {selectedPriceRange && <SearchPagePackageList locationId={packages} priceRange={selectedPriceRange} setMaxDay={setMaxDay} maxDay={maxDay} clearAll={clearAll} setClearAll={setClearAll} />}
            </div>
          </div>
        </div>
        <div className="border-t border">
          <div className="w-full md:w-3/4 m-auto px-2 pb-5">
            <div className="text-center mt-5 mb-10">
              <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">Frequently Asked Questions (FAQs) <span className='lowercase'>for</span> Speciality {" Tour Packages"}</p>
              <p className="text-para md:text-base">
                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
              </p>
            </div>
            <Faq1 data={promoData.faq} />
          </div>
        </div>
        {/* <div className="border-t border">
          <BottomLink locationId={selectedLocation} />
        </div> */}
      </div>
    </AppProvider>
  );
}
