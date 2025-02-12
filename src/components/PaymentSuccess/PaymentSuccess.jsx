import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Link from "next/link";
const PaymentSuccess = () => {
  const router = useRouter();
  const { order_id } = router.query;
  const [status, setStatus] = useState("Checking...");
const [link,setLink]=useState("")
  useEffect(() => {
    if (order_id) {
      checkPaymentStatus();
    }
  }, [order_id]);

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`/api/cashfree/check-payment?order_id=${order_id}`, { method: "GET" });
      const data = await response.json();
      setStatus(data?.data?.order_status);
      setLink(data?.data?.order_tags?.package_url)
      console.log("response of status---->", data)
    } catch (error) {
      console.error("Payment Status Error:", error);
      setStatus("Failed to fetch status");
    }
  };
  const handleOk =async () => {
    
    const res=await fetch(`/api/zoho/login`);
    const data=await res.json()
    console.log("data is here zoho ---> ",data)
  }

  return (
    <div>
      <div className="flex justify-center items-center pt-72">
        <div className="flex flex-col justify-center items-center gap-5 border shadow-md rounded-md w-72 px-10 py-5">
          <h1 className="text-lg font-semibold">Payment Status</h1>
          <p className="text-base font-semibold">{status}</p>
          {/* <Link href={link}> */}
            <button
              className="bg-primary text-white py-1 px-5  rounded"
              onClick={handleOk}
            >
              OK
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
