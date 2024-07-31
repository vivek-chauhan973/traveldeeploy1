import { useEffect, useState } from 'react';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const { packageUrl } = context.query;
  const res = await fetch(`http://localhost:3000/api/public/package/${packageUrl}`);
  const data = await res.json();

  return {
    props: {
      seoData: data
    }
  };
}

const Metatag = ({ seoData }) => {
  const [seoInfo, setSeoInfo] = useState({
    title: '',
    description: '',
    canonicalUrl: ''
  });

  useEffect(() => {
    if (seoData) {
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
