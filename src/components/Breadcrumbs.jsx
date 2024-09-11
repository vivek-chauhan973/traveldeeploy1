// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Breadcrumbs = () => {
//     const router = useRouter();
//     const pathnames = router.asPath.split("/").filter((x) => x);

//     const Breadcrumbs=()=>{
//         return pathnames
//     }


//     return (
//         <div className="container-wrapper">
//             <div className="text-sm breadcrumbs ">
//                 <ul>
//                     <li><Link href="/">Home</Link></li>
//                     {pathnames.map((name, index) => {
//                         const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//                         const isLast = index === pathnames.length - 1;
//                         return (
//                             <li key={index}>
//                                 {isLast ? (
//                                     <span>{name}</span>
//                                 ) : (
//                                     <Link href={routeTo} passHref>{name}</Link>
//                                 )}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Breadcrumbs;



import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {

    const router = useRouter();
    const pathnames = router.asPath.split("/").filter((x) => x);
    
    return (
        <div className="container mx-auto py-2 px-4">
            <div className="text-sm breadcrumbs">
                <ul className="flex space-x-2 text-gray-500 breadCrumbs">
                    <li>
                        <Link href="/" className="">
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
                                    <Link href={routeTo} className="">
                                        {name.replace("-", " ")}
                                    </Link>
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
