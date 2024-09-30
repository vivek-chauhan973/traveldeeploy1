import React from 'react';
import Head from 'next/head';

const BreadcrumbSchema = ({ breadcrumbs }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.item
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  );
};

export default BreadcrumbSchema;


// 
// import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

// export default function TourPackagePage() {
//   const breadcrumbs = [
//     {
//       name: "Home",
//       item: "https://www.bizarexpedition.com/"
//     },
//     {
//       name: "Chardham Helicopter Packages",
//       item: "https://www.bizarexpedition.com/promo-char-dham-yatra-by-helicopter"
//     },
//     {
//       name: "Badrinath Helicopter Package",
//       item: "https://www.bizarexpedition.com/pkg-badrinath-helicopter"
//     }
//   ];

//   return (
//     <>
//       <BreadcrumbSchema breadcrumbs={breadcrumbs} />
//       <div>
//         {/* Your page content */}
//       </div>
//     </>
//   );
// }
