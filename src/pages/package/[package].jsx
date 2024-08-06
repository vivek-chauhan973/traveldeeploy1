import "../../app/globals.css";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Package1 from "@/components/ItineraryDetail/Departure&Booking/package1";
import Head from 'next/head';

export async function getServerSideProps(context) {

  const packageUrl  = context.params.package;
  const newPackageUrl = packageUrl.replace("-tour-package", " ");
  
  const res = await fetch(`http://89.116.34.248:3000/api/public/package/${newPackageUrl}`);
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}

export default function TourPackage({data}) {
  return (
    <>
    <Head>
      <meta name="description" content={data?.seoData?.description} />
      <meta property="og:title" content={data?.seoData?.title} />
      <meta property="og:type" content="product" />
      <meta property="og:description" content={data?.seoData?.description} />
      <meta property="og:url" content={data?.seoData?.canonicalUrl} />
      <meta property="og:site_name" content="bizare expedition" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data?.seoData?.title} />
      <meta name="twitter:description" content={data?.seoData?.description} />
      <link rel="canonical" href={data?.seoData?.canonicalUrl} />
    </Head>

      <AppProvider>
        <Package1 />
      </AppProvider>

    </>
  );
}
