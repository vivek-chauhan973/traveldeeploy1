    import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const StaticBreadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);

    // Generate Breadcrumb Schema dynamically
    const breadcrumbsSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": name.replace("-", " "),
                "item": `${process.env.NEXT_PUBLIC_SITE_URL}${routeTo}`,
            };
        }),
    };

    return (
        <>
            {/* Inject Breadcrumb Schema JSON-LD */}
            <Head>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
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
                            {pathnames.map((name, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                                const isLast = index === pathnames.length - 1;
                                return (
                                    <li key={index} className="flex items-center capitalize">
                                        <span className="mr-2">{">"}</span>
                                        {isLast ? (
                                            <span className="font-semibold text-gray-900 ">{name}</span>
                                        ) : (
                                            <Link href={routeTo} className="hover:underline">
                                                {name.replace("-", " ")}
                                            </Link>
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
}

export default StaticBreadcrumbs;
