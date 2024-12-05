import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const DropDownContent = ({ navLinkData }) => {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };
  return (
    <div className="border-2 px-4 py-1 rounded-md z-50 bg-white ">
      {navLinkData?.length > 6 &&
        navLinkData?.slice(6, navLinkData?.length)?.map((items, i) => (
          <Link
            key={i}
            href={
              "/travel/" +
              router?.query?.post +
              "/" +
              items?.title?.split(" ")?.join("-")
            }
          >
            <p
              className={`relative px-3 group my-3 text-nowrap text-gray-500 hover:text-blue-500 ${
                isActive(
                  `/travel/${router?.query?.post}/${items?.title
                    ?.split(" ")
                    ?.join("-")}`
                )
                  ? "text-blue-500 border-b-2  border-blue-500"
                  : ""
              }`}
            >
              {items?.title}
              <span className="absolute left-0 -bottom-2  w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </p>
          </Link>
        ))}
    </div>
  );
};

export default DropDownContent;
