import { AppProvider } from '@/components/admin/context/Package/AddGuest'
import PaymentSuccess from '@/components/PaymentSuccess/PaymentSuccess'
import React from 'react'

const paymentsuccess = () => {
  return (
   <AppProvider>
    <PaymentSuccess/>
   </AppProvider>
  )
}

export default paymentsuccess