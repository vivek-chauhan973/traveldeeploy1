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
import Head from 'next/head';


const fetchPromoManagementData = async (stateId) => {
    const response = await fetch(`/api/public/package-state/${stateId}`);
    const data = response.json();
    return data;

}


const fetchLocation = async (state) => {
    const response = await fetch(`/api/public/${state}`, { method: 'GET' });
    const data = await response.json();
    return data;
};


export default function SearchPage() {
    const router = useRouter();
    const state = router.query.state?.replace("-tour-packages", "");
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 100 });
    const [promoData, setPromoData] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log("state uyeirerw",state)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (state) {
                    const selectedLocationData = await fetchLocation(state);
                    setSelectedLocation(selectedLocationData);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [state]);

    useEffect(() => {
        fetchPromoManagementData(selectedLocation?._id).then(res => setPromoData(res?.data || {}))
    }, [selectedLocation])

    const handleApplyFilter = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };
    console.log("promo data", promoData);
    return (
        <AppProvider>



            {/* 
            <Head>
                <title>SEO Form</title>
                <meta name="description" content={isSEOField.description} />
                <meta property="og:title" content={isSEOField.title} />
                <meta property="og:type" content="product" />
                <meta property="og:description" content={isSEOField.description} />
                <meta property="og:url" content={isSEOField.canonicalUrl} />
                <meta property="og:site_name" content="bizare expedition" />
                <meta property="og:locale" content="en_IN" /> 
                <meta property="og:image" content="" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={isSEOField.description} />
                <meta name="twitter:image" content="" />
                <link rel="canonical" href={isSEOField.canonicalUrl} />
            </Head> */}


            <div className='bg-slate-100'  >
                <DesktopHeader />

                <Breadcrumbs />
                {!loading ? (
                    <div>
                        <SearchPageTopSeoContent state={selectedLocation} promoData={promoData} />
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
                            <ItineraryFaq promoData={promoData} />
                        </div>
                    ) : (
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
                            <BottomLink />
                        </div>
                    ) : (
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


