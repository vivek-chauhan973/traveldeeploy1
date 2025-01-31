export default async function handler(req, res) {
    const { name,amount, orderId,email,customer_id ,phoneNumber} = req.body;
  
    const payload = {
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
        return_url: `${process.env.API_BASE_URL}/return?order_id={order_id}`,
      },
      payment_methods: 'upi,wallet,card,netbanking', // Optional: Filter specific payment methods
    };
  
    try {
      const response = await fetch('https://sandbox.cashfree.com/pg/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': process.env.payment_api_ID,
          'x-client-secret': process.env.payment_api_secrete,
          'x-api-version': '2022-09-01',
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      if (response.ok) {
        res.status(200).json({
          orderId: data.order_id,
          paymentLink: data.payments.url,
        });
      } else {
        console.error('Error creating Cashfree order:', data.message);
        res.status(500).json({ error: data.message || 'Failed to create order' });
      }
    } catch (error) {
      console.error('Error creating Cashfree order:', error.message);
      res.status(500).json({ error: 'Failed to create order' });
    }
  }