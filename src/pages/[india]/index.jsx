import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import '../../app/globals.css';
import SearchPageFilter from '@/components/SearchPageFilter';
import SearchPagePackageList from '@/components/SearchPagePackageList';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PromoBanner, PromoFilter, PromoList, PromoLink } from '@/components/Skeleton/Package/promo';
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';
import Faq1 from '@/components/Faq/Faq1';
import Footer from '@/components/Footer';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import Head from 'next/head';

const fetchPromoManagementData = async (stateId) => {
  if (!stateId) return {};
  const response = await fetch(`/api/public/package-state/${stateId}`);
  const data = await response.json();
  return data;
};
const fetchLocation = async (state) => {
  if (!state) return {};
  const response = await fetch(`/api/public/india?locationUrl=${state}`, { method: 'GET' });
  const data = await response.json();
  return data;
};
const fetchPackages = async (locationId) => {
  const response = await fetch(`/api/public/country-tourPackages?locationId=${locationId}`);
  const data = await response.json();
  return data?.packages;
};

export default function India(pageprops) {
  const { setServerSideProps } = useCarPopupContext();

  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }

  }, [pageprops]);
  const router = useRouter();
  const state = router?.query?.india;
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [promoData, setPromoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [clearAll, setClearAll] = useState(false);
  const [priorityPackage, setPriorityPackage] = useState([]);
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchPackages1 = async () => {
      try {
        const response = await fetch(`/api/public/priority?id=${selectedLocation?._id}`);
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
      fetchPackages1();
    }
  }, [selectedLocation]);

  useEffect(() => {
    fetchPackages(selectedLocation?._id).then(res => { setPackages(res) });
  }, [selectedLocation])
  // console.log("..........router ",router)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (state) {
          const selectedLocationData = await fetchLocation("india");
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
      fetchPromoManagementData(selectedLocation._id).then(res => {
        // console.log("res======>", res)
        setPromoData(res?.data || {})
      }
      );
    } else {
      setPromoData({});
    }
  }, [selectedLocation]);
  if (loading) {
    return <PromoBanner />;
  }

  // console.log("selectedLocation", selectedLocation);
  // console.log("promoData", promoData);

  return (
    <>
      <Head>
        <title>{promoData?.seoField?.seoTitle || selectedLocation?.name} | BizareXpedition™️</title>
        <meta name="description"
          content={promoData?.seoField?.seoDescription}
        />
        <meta
          name="keywords"
          content={promoData?.seoField?.seoKeywords || "BizareXpedition™, about us, travel excellence, quality journeys, luxury travel, travel service, brand story"}
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content={promoData?.seoField?.seoTitle || selectedLocation?.name} />
        <meta property="og:description" content={promoData?.seoField?.seoDescription || "Discover unforgettable journeys with BizareXpedition™️."} />
        <meta property="og:image" content={`https://www.bizarexpedition.com/ || 'https://www.bizarexpedition.com/default-meta-image.jpg          '}`} />
        <meta property="og:url" content={`https://www.bizarexpedition.com/${selectedLocation?.url}`} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={promoData?.seoField?.seoTitle || selectedLocation?.name} />
        <meta name="twitter:description" content={promoData?.seoField?.seoDescription || "Discover unforgettable journeys with BizareXpedition™️."} />
        <meta name="twitter:image" content={`https://www.bizarexpedition.com/${promoData?.image} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        {/* Organization Schema */}
        <OrganizationSchema />
      </Head>
      <main>
        <div className='bg-slate-100 '>
          <DesktopHeader />
          <Breadcrumbs />
          <SearchPageTopSeoContent state={selectedLocation} promoData={promoData} priorityPackage={priorityPackage} />
          <SearchHeaderWpr />
          <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
            <div className='relative'>
              <div className='hidden xl:block'>
                <SearchPageFilter setClearAll={setClearAll} />
              </div>
            </div>
            <div>
              <div>
                <SearchPagePackageList locationId={packages} />
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
        </div>
      </main>
      <Footer />
    </>
  );
}
