import crypto from "crypto";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      res.status(200).json({ message: "Payment verified successfully", orderId: razorpay_order_id });
    } else {
      res.status(400).json({ message: "Invalid signature" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
