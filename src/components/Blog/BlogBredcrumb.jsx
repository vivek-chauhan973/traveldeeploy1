import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const BlogBredcrumb = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);
  const data = pathnames?.filter((item) => item !== "travel");
//   console.log("breadcrumbs is here ----> ", data);

  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.bizarexpedition.com/";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: name.replace("-", " ").replace("-", ""),
        item: `${siteUrl}${routeTo}`,
      };
    }),
  };

  return (
    <>
      {/* Inject Breadcrumb Schema JSON-LD */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <main>
        <div className="container mx-auto py-2 px-4">
          <div className="text-sm breadcrumbs">
            <ul className="flex space-x-2 text-gray-500 breadCrumbs">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              {data.map((name, index) => {
                const routeTo = `/travel/${data.slice(0, index + 1).join("/")}`;
                const isLast = index === data.length - 1;
                return (
                  <li key={index} className="flex items-center capitalize">
                    <span className="mr-2">{">"}</span>
                    {isLast ? (
                      <span className="font-semibold text-gray-900 ">
                        {name?.replace("-", " ")?.replace("-", " ")}
                      </span>
                    ) : (
                      <a href={routeTo} className="hover:underline">
                        {name.replace("-", " ")}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogBredcrumb;
