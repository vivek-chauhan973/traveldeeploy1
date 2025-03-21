import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
        const { name,  email,  package_type,phoneNumber ,amount,package_url,dep_date,dep_time,plan,cost_per_km,ac_option,car_gst,no_of_person,vehicleType,pickup_point,location} = req.body;
        if (!name ||  !email  || !phoneNumber||!amount||!package_url||!dep_date||!dep_time) {
            return res.status(400).json({ error: 'Missing required fields' });
          }

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      // Create an order with additional fields
      const options = {
        amount: amount * 100, // Convert to paise
        currency,
        receipt: `receipt_${Date.now()}`,
        notes: {
          package_type: package_type,
          email: email,
          name: name,
          phoneNumber: phoneNumber,
          package_url: package_url,
          dep_date,
          dep_time,
          choose_car_plan,
          cost_per_km,
          plan,
          ac_option,
          car_gst,
          pickup_point,
          pickup_location,
          arrival_time,
          arrival_date,
          no_of_person,vehicleType,
          location
        },
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
