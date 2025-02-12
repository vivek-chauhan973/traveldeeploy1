import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';

const PackageBreadcrums = ({ addPackage }) => {

    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);
    // console.log("Pacakge BreadeCrumbs----> ",addPackage)
    // console.log("country--> ",addPackage?.country?.url)
    // console.log("country--> ",addPackage?.state?.pageUrl)

    // Ensure site URL is defined
    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.bizarexpedition.com/";
    // Generate Breadcrumbs Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": name.replace("-", " ").replace("-tour-packages", " Tour Packages"),
                "item": `${siteUrl}${routeTo}`,
            };
        }),
    };

    return (
        <>
            {/* Inject Breadcrumb Schema JSON-LD */}
            <Head>
                <script type="application/ld+json"
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
                            <span className="mr-2">{">"}</span>
                            <li>
                                <Link href={`/${addPackage?.country?.url}`} className="hover:underline">
                                    {addPackage?.country?.name}
                                </Link>
                            </li>
                            <span className="mr-2">{">"}</span>
                            <li>
                                <Link href={`/${addPackage?.country?.url}/${addPackage?.state?.pageUrl}`} className="hover:underline">
                                    {addPackage?.state?.name}
                                </Link>
                            </li>
                            <span className="mr-2">{">"}</span>
                            <li className="font-semibold text-gray-900 ">
                                {addPackage?.name} Tour Pacakge
                            </li>

                        </ul>
                    </div>
                </div>
            </main>
        </>

    );
}

export default PackageBreadcrums;
