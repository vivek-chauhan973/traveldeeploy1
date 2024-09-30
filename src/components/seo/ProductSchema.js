import React from 'react';
import Head from 'next/head';

const ProductSchema = ({ name, description, sku, images, ratingValue, ratingCount, price, priceValidUntil, url }) => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "description": description,
    "sku": sku,
    "image": images,
    "brand": {
      "@type": "Brand",
      "name": "BizareXpedition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": ratingCount
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "INR",
      "price": price,
      "priceValidUntil": priceValidUntil,
      "seller": {
        "@type": "Organization",
        "name": "Bizarexpedition Services Private Limited"
      }
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </Head>
  );
};

export default ProductSchema;




// 


// import ProductSchema from '../components/seo/ProductSchema';

// export default function TourPackagePage() {
//   const packageDetails = {
//     name: "Chardham yatra 2024",
//     description: "The 4 Dham Yatra by Helicopter is the fastest way to complete the pilgrimage. This private 4 Dham Yatra by Air is designed for those who seek the shortest and most convenient way to undertake the journey. The package spans 5 nights and 6 days, covering Yamunotri, Gangotri, Kedarnath, and Badrinath by chopper. You'll enjoy breathtaking aerial views of the majestic Himalayas and receive VIP treatment at each destination. This exclusive tour ensures a seamless and spiritually enriching experience without the usual travel hassles.",
//     sku: "BX1234",
//     images: [
//       "https://example.com/photos/photo.jpg",
//       "https://example.com/photos/photo.jpg",
//       "https://example.com/photos/photo.jpg"
//     ],
//     ratingValue: "4.6",
//     ratingCount: "189",
//     price: 245678,
//     priceValidUntil: "2024-11-20",
//     url: "https://example.com/anvil"
//   };

//   return (
//     <>
//       <ProductSchema {...packageDetails} />
//       <div>
//         {/* Your page content */}
//       </div>
//     </>
//   );
// }
