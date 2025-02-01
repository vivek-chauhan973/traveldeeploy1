import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const PaymentSuccess = () => {
  const router = useRouter();
  const { order_id } = router.query;
  const [status, setStatus] = useState("Checking...");
  useEffect(() => {
    if (order_id) {
      checkPaymentStatus();
    }
  }, [order_id]);
  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`/api/cashfree/check-payment?order_id=${order_id}`,{method:"GET"});
      
      const data=await response.json();
      setStatus(data?.payment_status);
      console.log("response of status---->",data)
    } catch (error) {
      console.error("Payment Status Error:", error);
      setStatus("Failed to fetch status");
    }
  };
  return (
    <div className="text-center p-6">
      <h1 className="text-xl font-bold">Payment Status 1</h1>
      <p className="mt-4">{status}</p>
    </div>
  );
};

export default PaymentSuccess;
