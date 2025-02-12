export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
    const { name, amount, orderId,package_type, email, customer_id, phoneNumber ,summaryCarPackage,package_url} = req.body;
    // console.log("cashfree account is that ----> ",packageCashfree)
    if (!name || !amount || !orderId || !email || !customer_id || !phoneNumber||!summaryCarPackage||!package_url) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
    try {
        const cashfreeUrl =
        process.env.NODE_ENV === "production"
          ? "https://api.cashfree.com/pg/orders"
          : "https://sandbox.cashfree.com/pg/orders"; 
  
      const response = await fetch(cashfreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-01-01",
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
        },
        body: JSON.stringify({
          order_id: orderId,
          order_amount: amount,
          order_currency: 'INR',
          order_note: 'Test Order',
          customer_details: {
            customer_id: customer_id,
            customer_name: name,
            customer_email: email,
            customer_phone: phoneNumber,
          },
          order_meta: {
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?order_id=${orderId}`,
          },
          order_tags: {
            depature_date:`${ summaryCarPackage?.Date}`,
            depature_city: `${summaryCarPackage?.departureCity}`,
            depature_traveller:`${summaryCarPackage?.travellers}`,
            package_url:`${package_url}`,
            package_type:`${package_type}`
          },
          payment_methods: 'upi,wallet,card,netbanking',
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error initiating payment");
      }
      return res.status(200).json({ paymentLink: data.payment_link , data});
    } catch (error) {
      return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  }
  