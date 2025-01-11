// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark} from "@fortawesome/free-solid-svg-icons";
// import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";

// const Create = () => {
//     const { setLoginPopup } = useCarPopupContext();
//     useEffect(() => {
//         document.body.style.overflow = "hidden";
//         return () => {
//             document.body.style.overflow = "auto";
//         };
//     }, []);

//     return (
//         <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="bg-white rounded-xl shadow-lg z-50 w-80 h-[470px] max-h-[500px]">
//                 <div className="pr-2 pt-1 flex justify-end items-center mt-1">
//                     <FontAwesomeIcon
//                         icon={faXmark}
//                         className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
//                         onClick={() =>
//                             setLoginPopup(false)
//                         }
//                     />
//                 </div>
//                 <div className="px-7">
//                     <div className="flex justify-center items-center">
//                         <img
//                             className="object-cover w-36 h-10"
//                             src="https://images.yourstory.com/cs/images/companies/fd593ed4e9a5-bxlogo-1686298628003.png?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
//                             alt=""
//                         />
//                     </div>
//                     <div className="flex justify-center items-center my-5">
//                         <img
//                             className="object-cover rounded-full w-20 h-20"
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjGVg145rvbEunhw4fsfcCHzJTIEQzA_bhg&s"
//                             alt=""
//                         />
//                     </div>

//                     <div className="flex flex-col justify-center my-5">
//                         <p className="text-center mb-3 font-medium capitalize">
//                             Create an Account
//                         </p>
//                         <input
//                             type="text"
//                             // value={mobile}
//                             onChange={(e) => {
//                                 // setMobile(e.target.value)
//                                 // validateMobile(e.target.value);
//                             }}
//                             placeholder="Enter phone number"
//                             className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500"
//                             required
//                         />
//                     </div>
//                     <div className="flex flex-col justify-center items-center my-5">
//                         <button
//                             className="w-full bg-navyblack text-white px-5 py-2 rounded-full"
//                         >
//                             Continue
//                         </button>
//                     </div>
//                     <div class="flex items-center justify-between my-5">
//                         <span class="border-b w-1/5 lg:w-1/4 ml-2"></span>
//                         <p class="text-xxs text-center text-gray-500 uppercase">
//                             or continue with
//                         </p>
//                         <span class="border-b w-1/5 lg:w-1/4 mr-2"></span>
//                     </div>
//                     <div className="flex justify-center my-5">
//                         <button
//                             className="w-full bg-gray-200 text-navyblack px-5 py-2 rounded-full"
//                         >
//                             Google
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Create;

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Cookies from "js-cookie";
import { useSession, signIn } from "next-auth/react";
const Create = () => {
  const { setLoginPopup } = useCarPopupContext();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const { data: session } = useSession();
  console.log("session is here ----------> ", session);

  const [step, setStep] = useState(1); // Step 1: Phone input, Step 2: OTP verification
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // Countdown timer for resend OTP
  const [mobileError, setMobileError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [resendOtpError, setResendOtpError] = useState("");

  const validateMobile = (mobileNumber) => {
    const isValid = /^[0-9]{10}$/.test(mobileNumber); // 10-digit number validation
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

  // Simulate sending OTP
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
        //   setSentOtp(true);
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

        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format. Expected JSON.");
        }

        const data = await response.json();

        if (data.success) {
          Cookies.set("verifyCookie", true, { expires: 1 });
          Cookies.set("mobile", data.verifiedUser.mobile, { expires: 1 });
          setLoginPopup(false);
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

  const handleResendOtp = () => {
    if (timer === 0) {
      sendOtp();
    } else {
      setResendOtpError("Please wait before resending the OTP.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-xl shadow-lg z-50 w-80 h-[470px] max-h-[500px]">
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
                <div className="flex justify-center my-5">
                  <button
                    onClick={() => signIn("google")}
                    className="w-full bg-gray-200 text-navyblack px-5 py-2 rounded-full"
                  >
                    Google
                  </button>
                </div>
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
                <div className="flex justify-center mt-4">
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
