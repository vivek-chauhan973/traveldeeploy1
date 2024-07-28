import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);
    
    const Breadcrumbs=()=>{
        return pathnames
    }


    return (
        <div className="container-wrapper">
            <div className="text-sm breadcrumbs ">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <li key={index}>
                                {isLast ? (
                                    <span>{name}</span>
                                ) : (
                                    <Link href={routeTo} passHref>{name}</Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
