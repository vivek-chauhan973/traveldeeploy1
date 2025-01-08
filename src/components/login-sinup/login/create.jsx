import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";

const Create = () => {
  const {setLoginPopup} = useCarPopupContext();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-xl shadow-lg z-50 w-80 h-[470px] max-h-[500px]">
                <div className="pr-2 pt-1 flex justify-end items-center mt-1">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                        onClick={() =>
                            setLoginPopup(false)
                        }
                    />
                </div>
                <div className="px-7">
                    <div className="flex justify-center items-center">
                        <img
                            className="object-cover w-36 h-10"
                            src="https://images.yourstory.com/cs/images/companies/fd593ed4e9a5-bxlogo-1686298628003.png?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center items-center my-5">
                        <img
                            className="object-cover rounded-full w-20 h-20"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjGVg145rvbEunhw4fsfcCHzJTIEQzA_bhg&s"
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col justify-center my-5">
                        <p className="text-center mb-3 font-medium capitalize">
                            Create an Account
                        </p>
                        <input
                            type="text"
                            // value={mobile}
                            onChange={(e) => {
                                // setMobile(e.target.value)
                                // validateMobile(e.target.value);
                            }}
                            placeholder="Enter phone number"
                            className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center my-5">
                        <button
                            className="w-full bg-navyblack text-white px-5 py-2 rounded-full"
                        >
                            Continue
                        </button>
                    </div>
                    <div class="flex items-center justify-between my-5">
                        <span class="border-b w-1/5 lg:w-1/4 ml-2"></span>
                        <p class="text-xxs text-center text-gray-500 uppercase">
                            or continue with
                        </p>
                        <span class="border-b w-1/5 lg:w-1/4 mr-2"></span>
                    </div>
                    <div className="flex justify-center my-5">
                        <button
                            className="w-full bg-gray-200 text-navyblack px-5 py-2 rounded-full"
                        >
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
