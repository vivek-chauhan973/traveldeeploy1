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

const fetchPromoManagementData = async (stateId) => {
  if (!stateId) return {};
  const response = await fetch(`/api/public/package-state/${stateId}`);
  const data = await response.json();
  return data;
};

const fetchLocation = async (state) => {
  if (!state) return {};
  const response = await fetch(`/api/public/${state}`, { method: 'GET' });
  const data = await response.json();
  return data;
};

export default function SearchPage() {
  const router = useRouter();
  const state = router.query.state?.replace("-tour-packages", "");
  // console.log("state is here :: ", state);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 100 });
  const [promoData, setPromoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [maxDay, setMaxDay] = useState(50);
  const [minDay, setMinDay] = useState(0);
  const [tourDuration, setTourDuration] = useState([20, 36]);
  const [clearAll, setClearAll] = useState(false);
  const [priorityPackage, setPriorityPackage] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`/api/public/priority-package?locationId=${selectedLocation?._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPriorityPackage(data?.packages);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (selectedLocation) {
      fetchPackages();
    }
  }, [selectedLocation]);
  useEffect(() => {
    setTourDuration([minDay, maxDay]);
  }, [maxDay, minDay]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (state) {
          const selectedLocationData = await fetchLocation(state);
          if (!selectedLocationData) {
            router.replace('/404'); // Redirect to 404 if location data is not found
            return;
          }
          setSelectedLocation(selectedLocationData);
        } else {
          setSelectedLocation(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [state, router]);

  useEffect(() => {
    if (selectedLocation?._id) {
      fetchPromoManagementData(selectedLocation._id).then(res => setPromoData(res?.data || {}));
    } else {
      setPromoData({});
    }
  }, [selectedLocation]);

  const handleApplyFilter = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  if (loading) {
    return <PromoBanner />;
  }


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
              {selectedPriceRange && <SearchPagePackageList locationId={selectedLocation?.id} priceRange={selectedPriceRange} setMaxDay={setMaxDay} maxDay={maxDay} clearAll={clearAll} setClearAll={setClearAll} />}
            </div>
          </div>
        </div>
        <div className="border-t border">
          <div className="w-full md:w-3/4 m-auto px-2 pb-5">
            <div className="text-center mt-5 mb-10">
              <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">Frequently Asked Questions (FAQs) <span className='lowercase'>for</span> {state?.split("-")?.join(" ")} {" Tour Packages"}</p>
              <p className="text-para md:text-base">
                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
              </p>
            </div>
            <Faq1 data={promoData.faq} />
          </div>
        </div>
        <div className="border-t border">
          <BottomLink locationId={selectedLocation} />
        </div>
      </div>
    </AppProvider>
  );
}
