import { AppProvider } from '@/components/admin/context/Package/AddGuest'
import Layout from '@/components/admin/Layout'
import React from 'react'

const pagelist = () => {
  return (
    <AppProvider>
        <Layout>
            <div>
                Pages Lists
            </div>
        </Layout>
    </AppProvider>
  )
}

export default pagelist