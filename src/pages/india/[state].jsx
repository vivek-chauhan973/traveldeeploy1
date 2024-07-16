import { useEffect, useState } from 'react';
import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import SearchPageFilter from '@/components/SearchPageFilter';
import SearchPagePackageList from '@/components/SearchPagePackageList';
import Breadcrumbs from '@/components/Breadcrumbs';
import ItineraryFaq from '@/components/itinerarylist/ItineraryFaq';
import BottomLink from '@/components/ItineraryDetail/BottomLink';
import { PromoBanner, PromoFilter, PromoList, PromoLink } from '@/components/Skeleton/Package/promo';
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';
// import Header from '@/components/Header';
// import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';




const fetchLocation = async (state) => {
    const response = await fetch(`/api/public/${state}`, { method: 'GET' });
    const data = await response.json();
    return data;
};


export default  function SearchPage  ()  {
    const router = useRouter();
    const state = router.query.state?.replace("-tour-packages", "");
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 100 });
    
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (state) {
                    const selectedLocationData = await fetchLocation(state);
                    setSelectedLocation(selectedLocationData);
                    console.log("Your state value is the",selectedLocationData)
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [state]);

    const handleApplyFilter = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };

    return (
        <AppProvider>
        <div className='bg-slate-100'  >
            <DesktopHeader/>
            
            <Breadcrumbs />
            {!loading ? (
                <div>
                    <SearchPageTopSeoContent state={selectedLocation} />
                </div>
            ) : (
                // skeleton
                <div>
                    <PromoBanner />
                </div>
            )}

            <SearchHeaderWpr />
            <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
                <div className=' relative'>
                    {!loading ? (
                        <div className='hidden xl:block '> {/*hidden*/}
                            <SearchPageFilter onApplyFilter={handleApplyFilter} />
                        </div>
                    ) : (
                        // skeleton
                        <div>
                            <PromoFilter />
                        </div>
                    )}
                </div>
                {/* package list show is here */}
                <div className=' '>
                    {!loading ? (
                        <div>
                            {selectedPriceRange && <SearchPagePackageList locationId={selectedLocation?.id} priceRange={selectedPriceRange} />}
                        </div>

                    ) : (
                        <div>
                            {/* skeleton show */}
                            <div className='pb-5'>
                                <PromoList />
                            </div>
                            <div className='pb-5'>
                                <PromoList />
                            </div>
                            <div className='pb-5'>
                                <PromoList />
                            </div>
                            <div className='pb-5'>
                                <PromoList />
                            </div>
                            <div className='pb-5'>
                                <PromoList />
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div className="container-wrapper py-12">
            {!loading ? (
                <div>
                    <ItineraryFaq />
                </div>
            ):(
                // skeleton show
                <div>
                    <PromoList />
                </div>
            )}
            </div>
            {/* bottom link */}
            <div className="">
            {!loading ? (
                <div className="border-t border">
                    <BottomLink/>   
                </div>
            ):(
                // skeleton
                <div>
                    <PromoLink />
                </div>
            )}
            </div>
        </div>
        </AppProvider>
    );
};


