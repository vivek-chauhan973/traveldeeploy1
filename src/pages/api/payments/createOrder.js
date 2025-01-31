export default async function handler(req, res) {
if(req.method==="POST"){
    try {
        const { name, amount, orderId, email, customer_id, phoneNumber } = req.body;
        // Validate required fields
        if (!name || !amount || !orderId || !email || !customer_id || !phoneNumber) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const payload = {
            order_id: orderId,
            order_amount: amount,
            order_currency: "INR",
            order_note: "Test Order",
            customer_details: {
                customer_id: customer_id,
                customer_name: name,
                customer_email: email,
                customer_phone: phoneNumber,
            },
            order_meta: {
                return_url: `${process.env.API_BASE_URL}/return?order_id=${orderId}`, // Fixed Interpolation
            },
            payment_methods: "upi,wallet,card,netbanking", // Optional: Filter payment methods
        };
        // https://payments-test.cashfree.com/links?code=J81jqd8tvng0
        const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-client-id": process.env.payment_api_ID, // Fixed Env Variable
                "x-client-secret": process.env.payment_api_secrete, // Fixed Env Variable
                "x-api-version": "2022-09-01",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
    console.log("data of process.env.PAYMENT_API_ID is here -------> ",process.env.payment_api_ID)
    console.log("data of process.env.PAYMENT_API_SECRET is here -------> ",process.env.payment_api_secrete)
        if (response.ok) {
            res.status(200).json({
                orderId: data.order_id,
                paymentLink: data.payment_link || data.payments?.url || null, // Safe Access
            });
        } else {
            console.error("Error creating Cashfree order:", data);
            res.status(response.status).json({ error: data.message || "Failed to create order" });
        }
    } catch (error) {
        console.error("Error creating Cashfree order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
}
