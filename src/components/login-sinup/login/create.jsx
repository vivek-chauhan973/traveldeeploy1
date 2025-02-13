import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useRouter } from "next/router";
const Create = () => {
  const {
    setLoginPopup,
    summaryCarPackage,
    customiseData,
    userFormData,
    userDateLocal,
    userTimeLocal,
    userPlanLocal,
    grandTotalCar,
    summaryCarData,
    pickupDateOutstation,
    pickupTimeOutstation,
    returnDateOutstation,
    returnTimeOutstation,
    planOutstation,
    activeTab,
  } = useCarPopupContext();
  const {
    fixedDeparturePopupPrice,
    departureSectionData,
    showAddguest,
    inputData,
  } = useAppContext();
  const packageCashfree = { departureSectionData, showAddguest, inputData };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  // console.log("cash free account details--> ",packageCashfree);
  const router = useRouter();
  // console.log("router in login popup--> ", router?.route?.split("/"));
  const token = Cookies.get("token");
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [mobileError, setMobileError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [resendOtpError, setResendOtpError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const validateMobile = (mobileNumber) => {
    const isValid = /^[0-9]{10}$/.test(mobileNumber);
    if (!isValid) {
      setMobileError("Please enter a valid 10-digit mobile number.");
    } else {
      setMobileError("");
    }
    return isValid;
  };
  const validateOtp = (otpNumber) => {
    if (otpNumber.length !== 6) {
      setOtpError("Please enter valid 6-digit OTP.");
    } else {
      setOtpError("");
    }
  };
  const sendOtp = () => {
    // alert(`OTP sent to ${phoneNumber}.`);
    startTimer();
  };
  // Start countdown timer for OTP resend
  const startTimer = () => {
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const handlePhoneSubmit = async () => {
    const number = "+91" + phoneNumber;
    if (!/^\+\d{12}$/.test(number)) {
      alert(
        "Please enter a valid mobile number with country code (e.g., +91XXXXXXXXXX)"
      );
      return;
    }
    try {
      const response = await fetch("/api/authentication/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: number }),
      });
      if (response.ok) {
        alert("OTP sent successfully!");
        sendOtp();
        setStep(2);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleOtpSubmit = async () => {
    const number = "+91" + phoneNumber;
    if (otp.length === 6) {
      try {
        const response = await fetch("/api/authentication/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile: number, otp }),
        });
        const data = await response.json();
        if (data.success) {
          Cookies.set("token", data?.data?.token, { expires: 1, secure: true });
          setStep(1);
          setPhoneNumber("");
          setOtp("");
          alert("OTP verified successfully!");
        } else {
          alert(`Verification failed: ${data.message}`);
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("An error occurred while verifying OTP. Please try again.");
      }
    }
  };

  const handleResendOtp = async () => {
    if (timer === 0) {
      const number = "+91" + phoneNumber;
      if (!/^\+\d{12}$/.test(number)) {
        alert(
          "Please enter a valid mobile number with country code (e.g., +91XXXXXXXXXX)"
        );
        return;
      }
      try {
        const response = await fetch("/api/authentication/resend-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile: number }),
        });
        if (response.ok) {
          alert("Again OTP sent successfully!");
          sendOtp();
          setStep(2);
        } else {
          alert("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      setResendOtpError("Please wait before resending the OTP.");
    }
  };

  const handleMobileVerifiedAndGetMoreDetail = async () => {
    if (!token) {
      alert("something went wrong");
    }
    const fetchdata = await fetch(
      `/api/authentication/get-user?token=${token}`
    );
    const data = await fetchdata.json();

    if (fetchdata?.ok) {
      if (router?.route?.split("/")?.includes("package")) {
        const fixedDeparturePopupPrice1 = Math.floor(fixedDeparturePopupPrice);
        const data1 = {
          package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
          packageCashfree,
          name: name,
          email: email,
          phoneNumber: data?.data?.mobile,
          customer_id: `customer_${Date.now()}`,
          orderId: `order_${Date.now()}`,
          amount: fixedDeparturePopupPrice1,
          package_type:"tour-package"
        };
        try {
          const response = await fetch("/api/cashfree/initiate-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
          });

          const data = await response.json();
          // console.log("data", data);

          if (response.ok) {
            setOrderId(data.orderId);
            // setCrmData(data?.data);
            window.location.href = data.paymentLink;
            setLoginPopup(false);
          } else {
            console.error("Error creating order:", data.error);
          }
        } catch (error) {
          console.error("Error creating order:", error);
        }
      }
      if (
        router?.route?.split("/")?.includes("car-rental") &&
        router?.route?.split("/")?.length > 2
      ) {
        const fixedDeparturePopupPrice1 = Math.floor(
          summaryCarPackage?.grandTotal
        );
        const data1 = {
          package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
          summaryCarPackage,
          name: name,
          email: email,
          phoneNumber: data?.data?.mobile,
          customer_id: `customer_${Date.now()}`,
          orderId: `order_${Date.now()}`,
          amount: fixedDeparturePopupPrice1,
          package_type:"car-package"
        };
        try {
          const response = await fetch("/api/cashfree/initiate-payment1", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
          });

          const data = await response.json();
          // console.log("data", data);

          if (response.ok) {
            setOrderId(data.orderId);
            // setCrmData(data?.data);
            window.location.href = data.paymentLink;
            setLoginPopup(false);
          } else {
            console.error("Error creating order:", data.error);
          }
        } catch (error) {
          console.error("Error creating order:", error);
        }
      }
      if (
        router?.route?.split("/")?.includes("car-rental") &&
        router?.route?.split("/")?.length <= 2
      ) {
        if (activeTab === "Tab1") {
    
          const data1 = {
            package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
            name: name,
            email: email,
            package_type:"Local-Car-Hire",
            phoneNumber: data?.data?.mobile,
            customer_id: `customer_${Date.now()}`,
            orderId: `order_${Date.now()}`,
            amount: grandTotalCar,
            dep_date: userDateLocal,
            dep_time: userTimeLocal,
            plan: userPlanLocal,
            cost_per_km: summaryCarData?.costPerKm,
            ac_option: summaryCarData?.isActive,
            car_gst: summaryCarData?.selectedGST,
            no_of_person: userFormData?.persons,
            vehicleType: userFormData?.selectedCar?.[0]?.vehicleType,
            pickup_point: userFormData?.selectedPickupPoint?.[0]?.name,
            location: userFormData?.selectedlocation?.[0]?.location,
          };
          try {
            const response = await fetch(
              "/api/cashfree/initiate-payment-carlocal",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data1),
              }
            );

            const data = await response.json();
            if (response.ok) {
              setOrderId(data.orderId);
              window.location.href = data.paymentLink;
              setLoginPopup(false);
            } else {
              console.error("Error creating order:", data.error);
            }
          } catch (error) {
            console.error("Error creating order:", error);
          }
        }
        if (activeTab === "Tab2") {
          const data1 = {
            package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
            name: name,
            email: email,
            package_type:"Out_Sation_Hire",
            phoneNumber: data?.data?.mobile,
            customer_id: `customer_${Date.now()}`,
            orderId: `order_${Date.now()}`,
            amount:grandTotalCar,
            no_of_persons:userFormData?.persons,
            vehicle_type:userFormData?.selectedCar?.[0]?.vehicleType,
            pickup_location:userFormData?.selectedlocation?.[0]?.location,
            pickup_point:userFormData?.selectedPickupPoint?.[0]?.name,
            car_gst:summaryCarData?.selectedGST,
            choose_car_plan:planOutstation,
            cost_per_km:summaryCarData?.costPerKm,
            ac_option:summaryCarData?.isActive,
            dep_date:pickupDateOutstation,
            dep_time:pickupTimeOutstation,
            arrival_date:returnDateOutstation,
            arrival_time:returnTimeOutstation,
          };
          try {
            const response = await fetch("/api/cashfree/initiate-payment-caroutstaion", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data1),
            });

            const data = await response.json();
            if (response.ok) {
              setOrderId(data.orderId);
              window.location.href = data.paymentLink;
              setLoginPopup(false);
            } else {
              console.error("Error creating order:", data.error);
            }
          } catch (error) {
            console.error("Error creating order:", error);
          }
        }
      }
    }
  };

  const handleProceed = async () => {
    if (router?.route?.split("/")?.includes("package")) {
      const fixedDeparturePopupPrice1 = Math.floor(fixedDeparturePopupPrice);
      const data1 = {
        package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
        packageCashfree,
        name: session?.user.name,
        email: session?.user.email,
        phoneNumber,
        customer_id: `customer_${Date.now()}`,
        orderId: `order_${Date.now()}`,
        amount: fixedDeparturePopupPrice1,
        package_type:"tour-package"
      };
      try {
        const response = await fetch("/api/cashfree/initiate-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data1),
        });

        const data = await response.json();
        // console.log("data", data);

        if (response.ok) {
          setOrderId(data.orderId);
          // setCrmData(data?.data);
          window.location.href = data.paymentLink;
          setLoginPopup(false);
        } else {
          console.error("Error creating order:", data.error);
        }
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
    if (
      router?.route?.split("/")?.includes("car-rental") &&
      router?.route?.split("/")?.length > 2
    ) {
      // console.log("summaryCarPackage", summaryCarPackage);
      const fixedDeparturePopupPrice1 = Math.floor(
        summaryCarPackage?.grandTotal
      );
      const data1 = {
        package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
        summaryCarPackage,
        name: session?.user.name,
        email: session?.user.email,
        phoneNumber,
        customer_id: `customer_${Date.now()}`,
        orderId: `order_${Date.now()}`,
        amount: fixedDeparturePopupPrice1,
        package_type:"car-package"
      };
      try {
        const response = await fetch("/api/cashfree/initiate-payment1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data1),
        });

        const data = await response.json();
        // console.log("data", data);

        if (response.ok) {
          setOrderId(data.orderId);
          // setCrmData(data?.data);
          window.location.href = data.paymentLink;
          setLoginPopup(false);
        } else {
          console.error("Error creating order:", data.error);
        }
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
    if (
      router?.route?.split("/")?.includes("car-rental") &&
      router?.route?.split("/")?.length <= 2
    ) {
      if (activeTab === "Tab1") {
        const data1 = {
          package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
          name: session?.user.name,
          email: session?.user.email,
          phoneNumber,
          package_type:"Local-Car-Hire",
          customer_id: `customer_${Date.now()}`,
          orderId: `order_${Date.now()}`,
          amount:grandTotalCar,
          dep_date:userDateLocal,
          dep_time:userTimeLocal,
          plan:userPlanLocal,
          cost_per_km:summaryCarData?.costPerKm,
          ac_option:summaryCarData?.isActive,
          car_gst:summaryCarData?.selectedGST,
          no_of_person:userFormData?.persons,
          vehicleType:userFormData?.selectedCar?.[0]?.vehicleType,
          pickup_point:userFormData?.selectedPickupPoint?.[0]?.name,
          location:userFormData?.selectedlocation?.[0]?.location
        };
        try {
          const response = await fetch("/api/cashfree/initiate-payment-carlocal", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
          });

          const data = await response.json();
          if (response.ok) {
            setOrderId(data.orderId);
            window.location.href = data.paymentLink;
            setLoginPopup(false);
          } else {
            console.error("Error creating order:", data.error);
          }
        } catch (error) {
          console.error("Error creating order:", error);
        }
      }
      if (activeTab === "Tab2") {
        const data1 = {
          package_url: `${process.env.NEXT_PUBLIC_BASE_URL}${router?.asPath}`,
          name: session?.user.name,
          email: session?.user.email,
          phoneNumber,
          package_type:"OutStation-Car-Hire",
          customer_id: `customer_${Date.now()}`,
          orderId: `order_${Date.now()}`,
          amount:grandTotalCar,
          no_of_persons:userFormData?.persons,
          vehicle_type:userFormData?.selectedCar?.[0]?.vehicleType,
          pickup_location:userFormData?.selectedlocation?.[0]?.location,
          pickup_point:userFormData?.selectedPickupPoint?.[0]?.name,
          car_gst:summaryCarData?.selectedGST,
          choose_car_plan:planOutstation,
          cost_per_km:summaryCarData?.costPerKm,
          ac_option:summaryCarData?.isActive,
          dep_date:pickupDateOutstation,
          dep_time:pickupTimeOutstation,
          arrival_date:returnDateOutstation,
          arrival_time:returnTimeOutstation,
        };
        try {
          const response = await fetch("/api/cashfree/initiate-payment-caroutstaion", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
          });

          const data = await response.json();
          if (response.ok) {
            setOrderId(data.orderId);
            window.location.href = data.paymentLink;
            setLoginPopup(false);
          } else {
            console.error("Error creating order:", data.error);
          }
        } catch (error) {
          console.error("Error creating order:", error);
        }
      }
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-xl shadow-lg z-50 w-80 h-auto max-h-[500px]">
          {step === 1 ? (
            <div>
              <div className="pr-2 pt-1 flex justify-end items-center mt-1">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                  onClick={() => setLoginPopup(false)}
                />
              </div>
              <div className="px-7">
                <div className="flex justify-center items-center">
                  <Image
                    className="object-cover w-36 h-10"
                    src="https://images.yourstory.com/cs/images/companies/fd593ed4e9a5-bxlogo-1686298628003.png?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex justify-center items-center my-5">
                  <Image
                    className="object-cover rounded-full w-20 h-20"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjGVg145rvbEunhw4fsfcCHzJTIEQzA_bhg&s"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                {token === undefined && session === null && (
                  <div>
                    <div className="flex flex-col justify-center mt-5">
                      <p className="text-center mb-3 font-medium capitalize">
                        Create an Account
                      </p>
                      <div
                        tabindex="1"
                        className="flex w-full px-1 py-2 border border-gray-300 rounded-full focus-within:outline-none focus-within: ring-0 focus-within:ring-orange-400 focus-within:border-orange-400"
                      >
                        <p className=" border-r px-1 border-grey-500">+91</p>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            validateMobile(e.target.value);
                          }}
                          placeholder="XXXXXXXXXX"
                          className=" outline-none px-1"
                          required
                        />
                      </div>
                    </div>
                    {mobileError && (
                      <p className="text-red-500 text-xxs text-center">
                        {mobileError}
                      </p>
                    )}
                    <div className="flex flex-col justify-center items-center my-5">
                      <button
                        onClick={handlePhoneSubmit}
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
                    <div className="flex justify-center gap-2 mt-5 mb-7">
                      <button
                        onClick={() => signIn("google")}
                        className="w-full bg-gray-200 text-navyblack px-5 py-2 rounded-full flex justify-center gap-2 items-center"
                      >
                        <Image
                          src="/assets/Google.png"
                          className="h-5 w-5 object-cover"
                          alt=""
                          width={200}
                          height={200}
                        />
                        Google
                      </button>
                    </div>
                  </div>
                )}
                {token !== undefined && (
                  <div className="flex flex-col gap-2">
                    <h1 className="text-sm font-medium text-center">
                      {" "}
                      Provide Details
                    </h1>
                    <div className="flex flex-col ">
                      <label htmlFor="firstname" className="text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        required
                        className="text-sm outline-none flex w-full px-1 py-1.5 border border-gray-300 rounded-md focus-within:outline-none focus-within: ring-0 focus-within:ring-orange-400 focus-within:border-orange-400 "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" required className="text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        className=" text-sm outline-none flex w-full px-1 py-1.5 border border-gray-300 rounded-md focus-within:outline-none focus-within: ring-0 focus-within:ring-orange-400 focus-within:border-orange-400 "
                      />
                    </div>
                    <button
                      onClick={handleMobileVerifiedAndGetMoreDetail}
                      className="w-full mb-5 bg-navyblack text-white px-5 py-2 rounded-full mt-2.5"
                    >
                      Proceed
                    </button>
                  </div>
                )}
                {session !== null && (
                  <div className="flex flex-col gap-2">
                    <h1 className="text-para font-semibold text-center">
                      {" "}
                      Provide Details
                    </h1>
                    <div className="flex flex-col mt-3 ">
                      <label htmlFor="firstname" className="text-sm">
                        Mobile No.
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          validateMobile(e.target.value);
                        }}
                        placeholder="Enter Mobile No."
                        required
                        className="text-sm outline-none flex w-full px-1 py-1.5 border border-gray-300 rounded-md focus-within:outline-none focus-within: ring-0 focus-within:ring-orange-400 focus-within:border-orange-400 "
                      />
                    </div>
                    <button
                      onClick={handleProceed}
                      className="w-full bg-navyblack text-white px-5 mb-10 mt-5 py-2 rounded-full "
                    >
                      Proceed
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="pr-2 pt-1 flex justify-end items-center mt-1">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                  onClick={() => setLoginPopup(false)}
                />
              </div>
              <div className="px-7">
                <div className="flex justify-center items-center">
                  <Image
                    className="object-cover w-36 h-10"
                    src="https://images.yourstory.com/cs/images/companies/fd593ed4e9a5-bxlogo-1686298628003.png?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex justify-center items-center my-5">
                  <Image
                    className="object-cover rounded-full w-20 h-20"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjGVg145rvbEunhw4fsfcCHzJTIEQzA_bhg&s"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col justify-center mt-5">
                  <p className="text-center mb-3 font-medium capitalize">
                    Verify With OTP
                  </p>
                  <p className="text-para capitalize ml-3">
                    Phone : {phoneNumber}
                  </p>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      validateOtp(e.target.value);
                    }}
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
                {otpError && (
                  <p className="text-red-500 text-xxs text-center">
                    {otpError}
                  </p>
                )}
                <div className="flex flex-col justify-center items-center mt-4 mb-1">
                  <button
                    onClick={handleOtpSubmit}
                    className="w-full bg-navyblack text-white px-5 py-2 rounded-full"
                  >
                    Verify
                  </button>
                </div>
                <p className="text-sm capitalize ml-3">
                  Resend OTP in :{" "}
                  <span className={timer === 0 ? "text-red-500" : "text-black"}>
                    {timer}s
                  </span>
                </p>
                <div className="flex justify-center my-4">
                  <button
                    onClick={handleResendOtp}
                    // disabled={timer > 0}
                    className="w-full bg-gray-200 text-navyblack px-5 py-2 rounded-full"
                  >
                    Resend OTP
                  </button>
                </div>
                {resendOtpError && (
                  <p className="text-red-500 text-xxs text-center">
                    {resendOtpError}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Create;
