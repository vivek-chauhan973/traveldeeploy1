import React from 'react';
import Head from 'next/head';

const EventSchema = ({ event }) => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "image": event.image,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": event.location.address.streetAddress,
        "addressLocality": event.location.address.addressLocality,
        "postalCode": event.location.address.postalCode,
        "addressCountry": event.location.address.addressCountry
      }
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </Head>
  );
};

export default EventSchema;





// 
// import EventSchema from '../components/seo/EventSchema';

// export default function EventPage() {
//   const eventDetails = {
//     name: "Chardham Group Departure",
//     image: "https://www.bizarexpedition.com/image.jpg",
//     startDate: "2024-08-20",
//     endDate: "2024-08-29",
//     location: {
//       name: "BizareXpedition Office",
//       address: {
//         streetAddress: "12/16 Lane no. A3 THDC colony ranipur more Haridwar Uttarakhand",
//         addressLocality: "Haridwar",
//         postalCode: "249407",
//         addressCountry: "IN"
//       }
//     }
//   };

//   return (
//     <>
//       <EventSchema event={eventDetails} />
//       <div>
//         {/* Your page content */}
//       </div>
//     </>
//   );
// }
