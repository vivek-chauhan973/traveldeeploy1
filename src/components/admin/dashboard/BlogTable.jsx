import React from "react";
import Image from "next/image";

const BlogTable = ({ item }) => {
  // console.log("blogpost item is here -------> ", item);
  return (
    <div className="m-2 ">
      <div className="flex justify-between gap-3 items-center bg-white rounded">
        <div className="rounded">
          <Image
            className=" w-[150px] h-[80px] overflow-hidden rounded-l"
            src={
              item?.videoPath ||
              "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="max-w-56">
            <p className="font-semibold">{item?.title}</p>
            <div className="line-clamp-1">
              <p className="text-light text-sm">{item?.description}</p>
            </div>
          </div>
          <div className="flex justify-start  flex-col pr-1">
            <span className="text-xs">
              {new Date(item?.createdAt)?.toDateString()?.split(" ")?.length >
                0 && (
                <div>
                  <p className="text-center hidden md:block">
                    {new Date(item?.createdAt)?.toDateString()?.split(" ")?.[0]}
                  </p>
                  <p className="text-nowrap">
                    {new Date(item?.createdAt)?.toDateString()?.split(" ")?.[2]}
                    -
                    {new Date(item?.createdAt)?.toDateString()?.split(" ")?.[1]}
                    -
                    {new Date(item?.createdAt)?.toDateString()?.split(" ")?.[3]}
                  </p>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
