import dynamic from 'next/dynamic';
import "../../app/globals.css";
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Package1 from '@/components/ItineraryDetail/Departure&Booking/package1';

// const Package1 = dynamic(() => import('@/components/ItineraryDetail/Departure&Booking/package1'), { ssr: false });
// const AppProvider = dynamic(() => import('@/components/admin/context/Package/AddGuest'), { ssr: false });

export default function TourPackage() {
  return (
    
    <AppProvider>
      <Package1 />
     <div>HELLO WORLD</div>
     </AppProvider>
  );
}
