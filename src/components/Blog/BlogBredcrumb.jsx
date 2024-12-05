import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogBredcrumb = () => {
    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);
    const data=pathnames?.filter(item=>item!=="travel")
    // console.log("breadcrumbs is here ----> ",data)
    return (
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
                                    <span className="font-semibold text-gray-900 ">{name?.replace("-tour-packages", " ")?.replace("-"," ")} Tour Packages</span>
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
    );
}

export default BlogBredcrumb;