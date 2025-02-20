import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { order_id } = req.query; // Get order ID from request query

    if (!order_id) {
      return res.status(400).json({ message: "Order ID is required" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.fetch(order_id);
    console.log("Fetched Razorpay Order:", order);

    return res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay Fetch Order Error:", error);
    return res.status(500).json({ message: "Failed to fetch order", error });
  }
}
