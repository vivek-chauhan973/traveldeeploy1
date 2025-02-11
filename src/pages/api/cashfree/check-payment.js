export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { order_id } = req.query;
  
    try {
        const cashfreeUrl =
        process.env.NODE_ENV === "production"
          ? `https://api.cashfree.com/pg/orders/${order_id}`
          :` https://sandbox.cashfree.com/pg/orders/${order_id}`;  
      const response = await fetch(cashfreeUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-01-01",
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error fetching payment status");
      }
  
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  }
  