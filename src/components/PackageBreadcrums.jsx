import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PackageBreadcrums = ({addPackage}) => {

    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);
    // console.log("Pacakge BreadeCrumbs----> ",addPackage)
    // console.log("country--> ",addPackage?.country?.url)
    // console.log("country--> ",addPackage?.state?.pageUrl)
    return (
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
                        <a href={`/${addPackage?.country?.url}`} className="hover:underline">
                            {addPackage?.country?.name}
                        </a>
                    </li>
                    <span className="mr-2">{">"}</span>
                    <li>
                        <a href={`/${addPackage?.country?.url}/${addPackage?.state?.pageUrl}`} className="hover:underline">
                           {addPackage?.state?.name}
                        </a>
                    </li>
                    <span className="mr-2">{">"}</span>
                    <li className="font-semibold text-gray-900 ">
                        {addPackage?.name} Tour Pacakge
                    </li>
                   
                </ul>
            </div>
        </div>
    );
}

export default PackageBreadcrums;
