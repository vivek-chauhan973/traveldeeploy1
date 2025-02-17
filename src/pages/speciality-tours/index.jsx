import { useEffect, useState } from "react";
import SearchPageTopSeoContent from "@/components/SearchPageTopSeoContent";
import SearchHeaderWpr from "@/components/SearchHeaderWpr";
import "../../app/globals.css";
import SearchPageFilter from "@/components/SearchPageFilter";
import SearchPagePackageList from "@/components/SearchPagePackageList";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PromoBanner } from "@/components/Skeleton/Package/promo";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Faq1 from "@/components/Faq/Faq1";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
const fetchPromoManagementData = async () => {
  const objectId = new mongoose.Types.ObjectId("64db5b8f60a6a2145f56e39d");
  const response = await fetch(
    `/api/public/package-state/spacialitypromo?id=${objectId}`
  );
  const data = await response.json();
  return data;
};

const fetchAllPackages = async () => {
  const res = await fetch("/api/findAllPackages");
  return await res.json();
};
export default function India(pageprops) {
  const { setServerSideProps } = useCarPopupContext();

  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }
  }, [pageprops]);
  const router = useRouter();
  // console.log("..........router ",router)
  const [promoData, setPromoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [clearAll, setClearAll] = useState(false);
  const [priorityPackage, setPriorityPackage] = useState([]);
  const [packages, setPackages] = useState([]);
  const objectId = new mongoose.Types.ObjectId("64db5b8f60a6a2145f56e39d");
  const selectedLocation = {};
  selectedLocation._id = objectId;

  useEffect(() => {
    fetchPromoManagementData().then((res) => setPromoData(res?.data || {}));
  }, []);
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`/api/public/priority`);
        if (!response.ok) {
          throw new Error("Failed to fetch packages");
        }
        const data = await response.json();
        setPriorityPackage(data?.packages);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchPackages();
  }, []);

  useEffect(() => {
    fetchAllPackages().then((res) => {
      setPackages(res?.packages || []);
    });
  }, [promoData]);

  useEffect(() => {
    setLoading(false);
  }, [promoData]);
  if (loading) {
    return <PromoBanner />;
  }

  // console.log("promoData", promoData);

  return (
    <>
      <Head>
        <title>
           Speciality Tour | BizareXpedition™️
        </title>
        <meta
          name="description"
          content={promoData?.seoField?.seoDescription}
        />
        <meta
          name="keywords"
          content={promoData?.seoField?.seoKeywords || "BizareXpedition™, about us, travel excellence, quality journeys, luxury travel, travel service, brand story" }
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content={promoData?.seoField?.seoTitle || "Speciality Tour"}
        />
        <meta
          property="og:description"
          content={promoData?.seoField?.seoDescription || "Discover unforgettable journeys with BizareXpedition™️."}
        />
        <meta
          property="og:image"
          content={`https://www.bizarexpedition.com/ || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`}
        />
        <meta
          property="og:url"
          content={`https://www.bizarexpedition.com/speciality-tours`}
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={promoData?.seoField?.seoTitle || "Speciality Tour"}
        />
        <meta
          name="twitter:description"
          content={
            promoData?.seoField?.seoDescription ||
            "Discover unforgettable journeys with BizareXpedition™️."
          }
        />
        <meta
          name="twitter:image"
          content={`https://www.bizarexpedition.com/${promoData?.posterPath} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`}
        />
        {/* Organization Schema */}
        <OrganizationSchema />
      </Head>
      <main>
        <div className="bg-slate-100">
          <DesktopHeader />
          <Breadcrumbs />
          <SearchPageTopSeoContent
            state={selectedLocation}
            promoData={promoData}
            priorityPackage={priorityPackage}
          />
          <SearchHeaderWpr />
          <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
            <div className="relative">
              <div className="hidden xl:block">
                <SearchPageFilter setClearAll={setClearAll} />
              </div>
            </div>
            <div>
              <div>
                <SearchPagePackageList
                  locationId={packages}
                  clearAll={clearAll}
                />
              </div>
            </div>
          </div>
          <div className="border-t border">
            <div className="w-full md:w-3/4 m-auto px-2 pb-5">
              <div className="text-center mt-5 mb-10">
                <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">
                  Frequently Asked Questions (FAQs){" "}
                  <span className="lowercase">for</span> Speciality{" "}
                  {" Tour Packages"}
                </p>
                <p className="text-para md:text-base">
                  We help you prepare for your trip and ensure an effortless and
                  enjoyable travel experience.
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
