import React from 'react';
import Head from 'next/head';

const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BizareXpedition",
    "alternateName": "BX",
    "url": "https://www.bizarexpedition.com/",
    "logo": "https://www.bizarexpedition.com/bx/images/logo/15903060991.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9897581113",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/bizareX/",
      "https://x.com/bizarexpedition",
      "https://www.instagram.com/bizarexpedition/",
      "https://www.youtube.com/channel/UCppSMWFpy0e4SECyYVwiStg",
      "https://in.linkedin.com/company/bizare-xpedition",
      "https://en.everybodywiki.com/BizareXpedition_Service_Pvt_Ltd",
      "https://www.bizarexpedition.com/"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </Head>
  );
};

export default OrganizationSchema;
