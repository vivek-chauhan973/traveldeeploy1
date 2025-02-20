import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name,currency, amount,package_type, email, phoneNumber ,packageCashfree,package_url} = req.body; // Accept additional fields

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
      });

      // Create an order with additional fields
      const options = {
        amount: amount * 100, // Convert to paise
        currency,
        receipt: `receipt_${Date.now()}`,
        notes: {
          package_type: package_type,
          email: email, 
          name:name,
          phoneNumber:phoneNumber,
          package_url:package_url,
          depature_date:`${ packageCashfree?.departureSectionData?.date}`,
          depature_day:`${ packageCashfree?.departureSectionData?.day}`,
          depature_city: `${packageCashfree?.showAddguest}`,
          depature_traveller:`${packageCashfree?.inputData?.adult}`,
          depature_child:`${packageCashfree?.inputData?.child}`,
          depature_infant:`${packageCashfree?.inputData?.infant}`, 
        }
      };

      const order = await razorpay.orders.create(options);

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Order creation failed", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
