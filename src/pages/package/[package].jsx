import "../../app/globals.css";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Package1 from "@/components/ItineraryDetail/Departure&Booking/package1";
import FAQSchema from "@/components/seo/FAQSchema";
import Head from "next/head";
import { useRouter } from "next/router";
export async function getServerSideProps(context) {
  const packageUrl = context.params.package;
  const newPackageUrl = packageUrl.replace("-tour-package", " ");
  const res = await fetch(
    `http://89.116.34.248:3000/api/public/package/${newPackageUrl}`
  );
  const data = await res.json();
  console.log("hi")
  return {
    props: {
      data,
    },
  };
}
export default function TourPackage({ data }) {
  // console.log("data is here data ssr", data);
  return (
    <>
      <Head>
        <meta name="description" content={data?.seoData?.description} />
        <meta property="og:title" content={data?.seoData?.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={data?.seoData?.description} />
        <meta property="og:image" content={`https://www.bizarexpedition.in}`} />
        <meta
          property="og:url"
          content={`https://www.bizarexpedition.in/package/${data?.pageUrl}`}
        />
        <meta property="og:site_name" content="BizareXpedition" />
        <meta property="og:locale" content="en_Us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.seoData?.title} />
        <meta name="twitter:description" content={data?.seoData?.description} />
        <meta
          name="twitter:url"
          content={`https://www.bizarexpedition.in/package/${data?.pageUrl}`}
        />
        <meta
          name="twitter:image"
          content={`https://www.bizarexpedition.in}`}
        />
        <meta name="twitter:creator" content="@bizarexpedition" />
        <meta name="twitter:site" content="BizareXpedition"></meta>
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <link rel="canonical" href={data?.seoData?.canonicalUrl} />
        <meta
          name="robots"
          content={data?.seoData ? "index, follow" : "noindex, nofollow"}
        />
      </Head>
      <FAQSchema faqs={data?.faqs?.days} />
      <AppProvider>
        <Package1 />
      </AppProvider>
    </>
  );
}
