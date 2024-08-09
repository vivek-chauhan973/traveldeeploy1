import { useEffect, useState } from 'react';
import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import SearchPageFilter from '@/components/SearchPageFilter';
import SearchPagePackageList from '@/components/SearchPagePackageList';
import Breadcrumbs from '@/components/Breadcrumbs';
// import ItineraryFaq from '@/components/itinerarylist/ItineraryFaq';
import BottomLink from '@/components/ItineraryDetail/BottomLink';
import { PromoBanner, PromoFilter, PromoList, PromoLink } from '@/components/Skeleton/Package/promo';
import { AppProvider, useAppContext } from '@/components/admin/context/Package/AddGuest';
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';
import Faq1 from '@/components/Faq/Faq1';


const fetchPromoManagementData = async (stateId) => {
    // Ensure stateId is not undefined before fetching
    if (!stateId) return {}; // Return an empty object if stateId is undefined
    const response = await fetch(`/api/public/package-state/${stateId}`);
    const data = await response.json();
    return data;
}

const fetchLocation = async (state) => {
    if (!state) return {}; // Check if state is undefined or null before making the request
    const response = await fetch(`/api/public/${state}`, { method: 'GET' });
    const data = await response.json();
    return data;
};

export default function SearchPage() {
    const router = useRouter();
    // const {setDuration}=useAppContext();
    const state = router.query.state?.replace("-tour-packages", "");
    const [selectedLocation, setSelectedLocation] = useState(null); // Initialize with null
    const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 100 });
    const [promoData, setPromoData] = useState({});
    const [loading, setLoading] = useState(true);
    const [maxDay,setMaxDay]=useState(0);
    const [minDay,setMinDay]=useState(0);
    const [tourDuration, setTourDuration] = useState([20, 36]);
    const [clearAll,setClearAll]=useState(false);
    

    const [priorityPackage, setPriorityPackage] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch(`/api/public/priority-package?locationId=${selectedLocation?._id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch packages');
                }
                const data = await response.json();
                console.log("package selected data show is here data",data)
                setPriorityPackage(data?.packages);
            } catch (err) {
                console.error('Error fetching data:', err);
            } 
        };

        fetchPackages();
    }, [selectedLocation]);
    console.log("package selected data show is here 0000000",priorityPackage)
    useEffect(()=>{
       setTourDuration(prev=>{
        const newItem=[...prev];
        newItem[1]=maxDay;
        newItem[0]=minDay;
        return newItem
       })
    //    setDuration(tourDuration);
    },[maxDay])
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (state) {
                    const selectedLocationData = await fetchLocation(state);
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
    }, [state]);

  
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

    return (
        <AppProvider>

            <div className='bg-slate-100'>
                <DesktopHeader />
                {/* <Breadcrumbs /> */}
                {!loading ? (
                    <div>
                        <SearchPageTopSeoContent state={selectedLocation} promoData={promoData} priorityPackage={priorityPackage}/>
                    </div>
                ) : (
                    <div>
                        <PromoBanner />
                    </div>
                )}

                <SearchHeaderWpr />
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
                    <div className='relative'>
                        {!loading ? (
                            <div className='hidden xl:block'>
                                <SearchPageFilter onApplyFilter={handleApplyFilter} setTourDuration={setTourDuration} tourDuration={tourDuration} setMaxDay={setMaxDay} setMinDay={setMinDay} setClearAll={setClearAll} />
                            </div>
                        ) : (
                            <div>
                                <PromoFilter />
                            </div>
                        )}
                    </div>
                    <div>
                        {!loading ? (
                            <div>
                                {selectedPriceRange && <SearchPagePackageList locationId={selectedLocation?.id} priceRange={selectedPriceRange} setMaxDay={setMaxDay} maxDay={maxDay} clearAll={clearAll} setClearAll={setClearAll}/>}
                            </div>
                        ) : (
                            <div>
                                <PromoList />
                            </div>
                        )}
                    </div>
                </div>
                {/* <div className="container-wrapper py-12">
                    {!loading ? (
                        <div>
                            <ItineraryFaq promoData={promoData} />
                        </div>
                    ) : (
                        <div>
                            <PromoList />
                        </div>
                    )}
                </div> */}
                <div>
                    {!loading ? (

                        <div className="border-t border">
                            <div className="w-full md:w-3/4 m-auto px-2 pb-5">
                                <div className="text-center mt-5 mb-10">
                                    <p className="md:text-[22px] text-[20px] mb-2">HighLight & Inclusion</p>
                                    <p className="text-para md:text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <Faq1 data={promoData.faq} />
                            </div>


                        </div>
                    ) : (
                        <div>
                            <PromoLink />
                        </div>
                    )}
                </div>
                <div>
                    {!loading ? (
                        <div className="border-t border">
                            <BottomLink locationId={selectedLocation} />
                        </div>
                    ) : (
                        <div>
                            <PromoLink />
                        </div>
                    )}
                </div>
            </div>
        </AppProvider>
    );
}
