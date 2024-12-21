import { CarPopupProvider } from '@/components/admin/context/CarPopupCalculation';
import React from 'react';

export default function APP({ Component, pageProps }) {
    return (
        <CarPopupProvider>
            <Component {...pageProps} />
        </CarPopupProvider>
    )
}