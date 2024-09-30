import { useEffect, useState } from 'react';
import Head from 'next/head';

// Fetch data on the server side
export async function getServerSideProps(context) {
  const { packageUrl } = context.params;
  
  try {
    // Fetch the tour package data from your API
    const res = await fetch(`/api/public/package/${packageUrl}`);
    const data = await res.json();

    console.log("Fetched API data:", data); // Debug log

    // Extract SEO data
    const seoData = data.seoData || {};

    // Return SEO data as props
    return {
      props: { seoData },
    };
  } catch (error) {
    console.error('Error fetching tour package data:', error);

    // Handle errors or return default SEO data
    return {
      props: { seoData: {} },
    };
  }
}

const Metatag = ({ seoData }) => {
  const [seoInfo, setSeoInfo] = useState({
    title: '',
    description: '',
    canonicalUrl: ''
  });

  useEffect(() => {
    if (seoData) {
      console.log("SEO Data in useEffect:", seoData); // Debug log
      setSeoInfo({
        title: seoData.title || '',
        description: seoData.description || '',
        canonicalUrl: seoData.canonicalUrl || ''
      });
    }
  }, [seoData]);

  return (
    <Head>
      <title>{seoInfo.title}</title>
      <meta name="description" content={seoInfo.description} />
      <meta property="og:title" content={seoInfo.title} />
      <meta property="og:type" content="product" />
      <meta property="og:description" content={seoInfo.description} />
      <meta property="og:url" content={seoInfo.canonicalUrl} />
      <meta property="og:site_name" content="bizare expedition" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoInfo.title} />
      <meta name="twitter:description" content={seoInfo.description} />
      <link rel="canonical" href={seoInfo.canonicalUrl} />
    </Head>
  );
};

export default Metatag;
