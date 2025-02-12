export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
    const { name, orderId, email,package_type, arrival_date,customer_id, phoneNumber,arrival_time ,amount,package_url,dep_date,dep_time,choose_car_plan,cost_per_km,ac_option,car_gst,no_of_persons,vehicle_type,pickup_point,pickup_location} = req.body;
    if (!name ||  !orderId || !email || !customer_id || !phoneNumber||!amount||!package_url||!dep_date||!dep_time) {
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
            depature_date:`${ dep_date}`,
            depature_time:`${ dep_time}`,
            arrival_date:`${ arrival_date}`,
            arrival_time:`${ arrival_time}`,
            no_of_person:`${no_of_persons}`,
            car_plan:`${choose_car_plan}`,
            cost_per_km:`${cost_per_km}`,
            car_gst:`${car_gst===0?"All inclusive":car_gst}`,
            ac_option:`${ac_option}`,
            vehicle_type:`${vehicle_type}`,
            pickup_point:`${pickup_point}`,
            location_point:`${pickup_location}`,
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
  