// import React from 'react';
// import Head from 'next/head';

// const FAQSchema = ({ faqs }) => {
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs?.map(faq => ({
//       "@type": "Question",
//       "name": faq.title,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.information
//       }
//     }))
//   };

//   return (
//     <Head>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </Head>
//   );
// };

// export default FAQSchema;


// 

// import FAQSchema from '../components/seo/FAQSchema';

// export default function FAQPage() {
//   const faqs = [
//     {
//       question: "What is the 4 Dham Helicopter Yatra?",
//       answer: "The Char Dham Helicopter Yatra is a pilgrimage that offers a faster and more convenient way to visit the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath in Uttarakhand, India, using helicopter transportation."
//     },
//     {
//       question: "How much does the 4 Dham Helicopter Yatra cost?",
//       answer: "The cost of the Char Dham yatra by Helicopter depends on factors such as the chosen package, helicopter model, and the services included. On average, it may cost around INR 1,85,000 per person, covering darshan in all four Dhams, meals, local transfers, hotels, and a sightseeing tour."
//     }
//   ];

//   return (
//     <>
//       <FAQSchema faqs={faqs} />
//       <div>
//         {/* Your page content */}
//       </div>
//     </>
//   );
// }
