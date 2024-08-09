import React from 'react';
import Head from 'next/head';

const ArticleSchema = ({ article }) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": article.author.name,
      "url": article.author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": article.publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": article.publisher.logo
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </Head>
  );
};

export default ArticleSchema;


// use this
// import ArticleSchema from '../components/seo/ArticleSchema';

// export default function BlogPostPage() {
//   const articleDetails = {
//     url: "https://www.bizarexpedition.com/blog/chardham-yatra",
//     headline: "Chardham Yatra from Haridwar",
//     description: "Chardham Yatra is a pilgrimage journey to the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath in Uttarakhand, India.",
//     image: "https://www.bizarexpedition.com/images/image1.jpg",
//     author: {
//       name: "BizareXpedition",
//       url: "https://www.bizarexpedition.com/bizarexpedition"
//     },
//     publisher: {
//       name: "BizareXpedition",
//       logo: "https://www.bizarexpedition.com/bx/images/logo/15903060991.png"
//     },
//     datePublished: "2024-08-14",
//     dateModified: "2024-08-27"
//   };

//   return (
//     <>
//       <ArticleSchema article={articleDetails} />
//       <div>
//         {/* Your blog content */}
//       </div>
//     </>
//   );
// }
