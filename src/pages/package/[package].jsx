
import "../../app/globals.css";
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Package1 from '@/components/ItineraryDetail/Departure&Booking/package1';


export default function TourPackage() {
  return (
    
    <AppProvider>
      <Package1 />
  
     </AppProvider>
  );
}
