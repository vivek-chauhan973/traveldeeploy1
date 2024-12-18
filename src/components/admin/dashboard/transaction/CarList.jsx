import React from "react";
import Image from "next/image";

const CarList = ({ allTypeData }) => {
  // console.log("all type data is here---> ", allTypeData);
  return (
    <div>
      <div className="">
        <div className="w-full overflow-y-auto h-80">
          {/* repeat */}
          {allTypeData?.map((item, i) => (
            <div key={i}>
              <div className=" hidden md:flex shadow-sm my-2 bg-white rounded-md justify-between items-center pr-2">
                <div className=" flex flex-col items-center">
                  <Image
                    className="w-[150px] h-[80px] rounded"
                    src={
                      item?.uploads?.[0] ||
                      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width="1920"
                    height="1280"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-slate-900">
                    {item?.name} Tour Package
                  </p>
                  <div className="text-xs text-center">
                  <p className="text-xs">
                      {new Date(item?.createdAt)?.toDateString()?.split(" ")
                        ?.length > 0 && (
                        <div>
                          <p>
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[2]
                            }
                            -
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[1]
                            }
                            -
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[3]
                            }
                          </p>
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div className="font-semibold text-md">
                  {item?.price
                    ? `₹${new Intl.NumberFormat("en-IN").format(item.price)}`
                    : "₹0"}
                </div>
              </div>
              <div className=" flex md:hidden shadow-sm my-2 bg-white rounded-md justify-between items-center pr-2">
                <div className=" flex flex-col items-center">
                  <Image
                    className="w-[100px] h-[80px]"
                    src={
                      item?.uploads?.[0] ||
                      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width="1920"
                    height="1280"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-slate-900 text-center">
                    {item?.name} Tour Package
                  </p>
                  <div className="text-xs text-center">
                    <p className="text-xs">
                      {new Date(item?.createdAt)?.toDateString()?.split(" ")
                        ?.length > 0 && (
                        <div>
                          <p>
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[2]
                            }
                            -
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[1]
                            }
                            -
                            {
                              new Date(item?.createdAt)
                                ?.toDateString()
                                ?.split(" ")?.[3]
                            }
                          </p>
                        </div>
                      )}
                    </p>
                  </div>
                  <div className="font-semibold text-xs text-center lg:text-md">
                    {item?.price
                      ? `₹${new Intl.NumberFormat("en-IN").format(item.price)}`
                      : "₹0"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;